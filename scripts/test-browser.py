#!/usr/bin/env python3
"""Offline artifact smoke/regression checks, invented learners, blocked HTTP(S).
Requires Python Playwright and its Chromium browser. Run npm run build first.
"""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json
import tempfile
import shutil

ROOT = Path(__file__).resolve().parents[1]
CATALOG = json.loads((ROOT / 'public/data/colors.json').read_text())
READ_RECORDS = """() => new Promise((resolve,reject) => {
 const open=indexedDB.open('color-learning-v1');
 open.onerror=()=>reject(open.error);
 open.onsuccess=()=>{const db=open.result;const tx=db.transaction('records');const req=tx.objectStore('records').getAll();req.onsuccess=()=>resolve(req.result);tx.oncomplete=()=>db.close()};
})"""


def main():
    with tempfile.TemporaryDirectory(prefix='colors-browser-') as folder, sync_playwright() as p:
        file = Path(folder) / 'Color-Learning.html'
        shutil.copyfile(ROOT / 'artifacts/Color-Learning.html', file)
        browser = p.chromium.launch()
        context = browser.new_context(viewport={'width': 390, 'height': 844}, accept_downloads=True)
        page = context.new_page()
        errors, requests = [], []
        page.on('pageerror', lambda e: errors.append(str(e)))
        page.on('request', lambda req: requests.append(req.url) if req.url.startswith(('https:', 'http:')) else None)
        context.route('https://**/*', lambda route: route.abort())
        context.route('http://**/*', lambda route: route.abort())
        page.goto(file.as_uri())
        page.wait_for_function('!document.querySelector("#create-learner").disabled')
        page.fill('#name-input', 'Comet')
        page.click('#create-learner')
        page.wait_for_selector('.choice-btn')
        assert '11 mastered' in page.inner_text('#stats')
        # Match the displayed swatch to its catalog value, through the real UI.
        correct = page.evaluate("""colors => {
          const rgb = document.querySelector('#swatch').style.backgroundColor;
          const byId = Object.fromEntries(colors.map(c=>[c.id,c]));
          return [...document.querySelectorAll('.choice-btn')].find(b=>{
            const h=byId[b.dataset.colorId].hex.replace('#','');
            return `rgb(${parseInt(h.slice(0,2),16)}, ${parseInt(h.slice(2,4),16)}, ${parseInt(h.slice(4,6),16)})`===rgb;
          }).dataset.colorId;
        }""", CATALOG)
        page.locator(f'[data-color-id="{correct}"]').click()
        page.locator(f'[data-color-id="{correct}"]').dispatch_event('click')
        page.wait_for_function("document.querySelector('#feedback').textContent==='Correct!' && !document.querySelector('#reset-progress').disabled")
        records = page.evaluate(READ_RECORDS)
        assert sum(records[0]['snapshot']['streaks'].values()) == 1
        assert records[0]['snapshot']['streaks'][correct] == 1
        page.reload()
        page.get_by_role('button', name='Continue as Comet', exact=True).click()
        page.wait_for_selector('.choice-btn')
        assert page.evaluate(READ_RECORDS)[0]['snapshot']['streaks'][correct] == 1
        page.click('#switch-profile')
        page.fill('#name-input', 'Comet'); page.click('#create-learner')
        page.wait_for_selector('.choice-btn')
        records = page.evaluate(READ_RECORDS)
        assert len(records) == 2
        assert sorted(sum(r['snapshot']['streaks'].values()) for r in records) == [0, 1]
        page.click('#open-settings')
        assert 'works offline' in page.inner_text('#cloud-panel')
        with page.expect_download() as event:
            page.click('#export-progress')
        exported = json.loads(Path(event.value.path()).read_text())
        assert set(exported) == {'app', 'formatVersion', 'curriculumId', 'label', 'exportedAt', 'snapshot'}
        assert exported['label'] == 'Comet'
        assert 'ownerId' not in json.dumps(exported) and 'binding' not in json.dumps(exported)
        complete = {**exported, 'label': 'Maple', 'snapshot': {'formatVersion': 1, 'activeBatchIds': [], 'masteredIds': [c['id'] for c in CATALOG], 'streaks': {}, 'masteredAt': {}}}
        page.set_input_files('#import-progress', {'name': 'invented-complete.json', 'mimeType': 'application/json', 'buffer': json.dumps(complete).encode()})
        page.wait_for_selector('#complete')
        assert '949 mastered' in page.inner_text('#stats')
        assert page.locator('.choice-btn').count() == 0
        page.reload(); page.get_by_role('button', name='Continue as Maple', exact=True).click()
        page.wait_for_selector('#complete')
        page.wait_for_function('document.fonts.status==="loaded"')
        assert page.evaluate('document.fonts.check(\'14px "DM Sans"\')')
        for width in (320, 390, 768, 1440):
            page.set_viewport_size({'width': width, 'height': 900})
            assert page.evaluate('document.documentElement.scrollWidth<=innerWidth'), width
            expected = {'width': 949, 'height': 1} if width <= 720 else {'width': 1, 'height': 949}
            page.wait_for_function('(expected)=>{const c=document.querySelector("canvas");return c.width===expected.width&&c.height===expected.height}', arg=expected)
            page.click('#open-settings')
            assert page.evaluate('document.querySelector("dialog").scrollWidth<=document.querySelector("dialog").clientWidth'), width
            page.click('#close-settings')
        shots = ROOT / 'artifacts/browser-checks'
        shots.mkdir(exist_ok=True)
        page.set_viewport_size({'width': 390, 'height': 844})
        page.screenshot(path=str(shots / 'complete-390.png'), full_page=True)
        page.click('#switch-profile'); page.get_by_role('button', name='Continue as Comet', exact=True).first.click()
        page.wait_for_selector('.choice-btn'); page.screenshot(path=str(shots / 'quiz-390.png'), full_page=True)
        page.set_viewport_size({'width': 1440, 'height': 900}); page.screenshot(path=str(shots / 'quiz-1440.png'), full_page=True)
        # A quota failure must not let Import silently discard the current answer.
        page.evaluate("""() => { window.originalPut=IDBObjectStore.prototype.put; IDBObjectStore.prototype.put=function(...args){if(this.name==='records')throw new DOMException('Full','QuotaExceededError');return window.originalPut.apply(this,args)} }""")
        page.locator('.choice-btn').first.click()
        page.wait_for_function('document.querySelector("#save-status").textContent.includes("not being saved")')
        page.click('#open-settings')
        before = page.inner_text('#current-learner')
        dismissed = []
        def dismiss_import(dialog):
            dismissed.append(dialog.message)
            dialog.dismiss()
        page.once('dialog', dismiss_import)
        page.set_input_files('#import-progress', {'name':'invented.json','mimeType':'application/json','buffer':json.dumps(complete).encode()})
        assert len(dismissed) == 1 and 'unsaved' in dismissed[0]
        assert page.inner_text('#current-learner') == before
        with page.expect_download() as event:
            page.click('#export-progress')
        assert json.loads(Path(event.value.path()).read_text())['label'] == before
        page.evaluate('() => { IDBObjectStore.prototype.put=window.originalPut }')
        page.click('#close-settings')
        page.wait_for_function('!document.querySelector(".choice-btn").disabled')
        page.locator('.choice-btn').first.click()
        page.wait_for_function('!document.querySelector("#save-status").textContent.includes("not being saved")')
        # A failed local deletion must leave the learner playable.
        page.click('#open-settings')
        page.evaluate("""() => { window.originalDelete=IDBObjectStore.prototype.delete; IDBObjectStore.prototype.delete=function(){throw new DOMException('Denied','SecurityError')} }""")
        page.once('dialog', lambda dialog: dialog.accept())
        page.click('#remove-profile')
        page.wait_for_function('document.querySelector("#settings-notice").textContent.includes("could not be removed")')
        page.evaluate('() => { IDBObjectStore.prototype.delete=window.originalDelete }')
        page.click('#close-settings')
        page.locator('.choice-btn').first.click()
        page.wait_for_selector('#feedback')
        # Recovery exports are directly importable as separate learners.
        page.evaluate("""() => new Promise((resolve,reject)=>{
          const open=indexedDB.open('color-learning-v1');open.onsuccess=()=>{const db=open.result;const tx=db.transaction(['records','recovery'],'readwrite');const req=tx.objectStore('records').getAll();req.onsuccess=()=>{for(const record of req.result)tx.objectStore('recovery').put({id:crypto.randomUUID(),profileId:record.profileId,gameId:'colors',curriculumId:'xkcd-949-v1',snapshot:record.snapshot,reason:'Synthetic alternative',createdAt:'2030-01-01T00:00:00.000Z'})};tx.oncomplete=()=>{db.close();resolve()};tx.onabort=()=>reject(tx.error)};
        })""")
        page.click('#open-settings'); page.click('#export-recovery')
        with page.expect_download() as event:
            page.locator('#recovery-copies button').first.click()
        recovered = json.loads(Path(event.value.path()).read_text())
        assert recovered['app'] == 'color-learning' and 'snapshot' in recovered
        count = len(page.evaluate(READ_RECORDS))
        page.set_input_files('#import-progress', {'name':'recovered.json','mimeType':'application/json','buffer':json.dumps(recovered).encode()})
        page.wait_for_function('!document.querySelector("#settings").open')
        assert len(page.evaluate(READ_RECORDS)) == count + 1
        # Unsupported future saves remain exportable and are never silently reset.
        page.evaluate("""() => new Promise((resolve,reject)=>{
          const open=indexedDB.open('color-learning-v1');open.onsuccess=()=>{const db=open.result;const tx=db.transaction('records','readwrite');const req=tx.objectStore('records').getAll();req.onsuccess=()=>{const record=req.result.find(r=>r.snapshot.masteredIds.length===949);record.snapshot.formatVersion=2;tx.objectStore('records').put(record)};tx.oncomplete=()=>{db.close();resolve()};tx.onabort=()=>reject(tx.error)};
        })""")
        page.click('#switch-profile'); page.get_by_role('button', name='Continue as Maple', exact=True).click()
        page.wait_for_function('document.querySelector("#notice").textContent.includes("different version")')
        page.click('#open-settings')
        assert page.locator('#reset-progress').is_disabled()
        with page.expect_download() as event:
            page.click('#export-progress')
        assert json.loads(Path(event.value.path()).read_text())['snapshot']['formatVersion'] == 2
        assert not errors, errors
        assert not requests, requests
        # Separate fresh browser context with storage access denied from startup.
        fallback = browser.new_context(viewport={'width': 320, 'height': 740})
        fallback.add_init_script("Object.defineProperty(window,'indexedDB',{get(){throw new DOMException('Denied','SecurityError')}})")
        fallback.route('https://**/*', lambda route: route.abort())
        fallback.route('http://**/*', lambda route: route.abort())
        second = fallback.new_page()
        second.on('pageerror', lambda e: errors.append(str(e)))
        second.goto(file.as_uri())
        second.fill('#name-input', 'Orbit'); second.click('#create-learner')
        second.wait_for_selector('.choice-btn')
        assert 'not being saved' in second.inner_text('#save-status')
        second.click('#open-settings')
        assert 'working browser storage' in second.inner_text('#cloud-panel')
        assert not errors, errors
        print(json.dumps({'offline_play_reload_double_answer': 'pass', 'separate_same_name_profiles': 'pass', 'export_import_completion': 'pass', 'quota_failure_import_confirmation': 'pass', 'failed_delete_keeps_playable_quiz': 'pass', 'recovery_copy_import': 'pass', 'unsupported_save_export': 'pass', 'storage_denied_fallback': 'pass', 'widths': [320,390,768,1440], 'spectrum_orientation': 'pass', 'external_requests': requests, 'browser_errors': errors}))
        browser.close()


if __name__ == '__main__':
    main()
