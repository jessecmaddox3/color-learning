(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // public/data/colors.json
  var colors_default = [
    {
      id: "purple",
      name: "purple",
      hex: "#7e1e9c",
      rank: 0,
      commonness: 0
    },
    {
      id: "green",
      name: "green",
      hex: "#15b01a",
      rank: 1,
      commonness: 1
    },
    {
      id: "blue",
      name: "blue",
      hex: "#0343df",
      rank: 2,
      commonness: 2
    },
    {
      id: "pink",
      name: "pink",
      hex: "#ff81c0",
      rank: 3,
      commonness: 3
    },
    {
      id: "brown",
      name: "brown",
      hex: "#653700",
      rank: 4,
      commonness: 4
    },
    {
      id: "red",
      name: "red",
      hex: "#e50000",
      rank: 5,
      commonness: 5
    },
    {
      id: "orange",
      name: "orange",
      hex: "#f97306",
      rank: 6,
      commonness: 8
    },
    {
      id: "yellow",
      name: "yellow",
      hex: "#ffff14",
      rank: 7,
      commonness: 11
    },
    {
      id: "grey",
      name: "grey",
      hex: "#929591",
      rank: 8,
      commonness: 13
    },
    {
      id: "black",
      name: "black",
      hex: "#000000",
      rank: 9,
      commonness: 35
    },
    {
      id: "white",
      name: "white",
      hex: "#ffffff",
      rank: 10,
      commonness: 117
    },
    {
      id: "light-blue",
      name: "light blue",
      hex: "#95d0fc",
      rank: 11,
      commonness: 6
    },
    {
      id: "teal",
      name: "teal",
      hex: "#029386",
      rank: 12,
      commonness: 7
    },
    {
      id: "light-green",
      name: "light green",
      hex: "#96f97b",
      rank: 13,
      commonness: 9
    },
    {
      id: "magenta",
      name: "magenta",
      hex: "#c20078",
      rank: 14,
      commonness: 10
    },
    {
      id: "light-purple",
      name: "light purple",
      hex: "#bf77f6",
      rank: 15,
      commonness: 15
    },
    {
      id: "dark-green",
      name: "dark green",
      hex: "#033500",
      rank: 16,
      commonness: 17
    },
    {
      id: "violet",
      name: "violet",
      hex: "#9a0eea",
      rank: 17,
      commonness: 16
    },
    {
      id: "turquoise",
      name: "turquoise",
      hex: "#06c2ac",
      rank: 18,
      commonness: 18
    },
    {
      id: "dark-blue",
      name: "dark blue",
      hex: "#00035b",
      rank: 19,
      commonness: 20
    },
    {
      id: "lavender",
      name: "lavender",
      hex: "#c79fef",
      rank: 20,
      commonness: 19
    },
    {
      id: "tan",
      name: "tan",
      hex: "#d1b26f",
      rank: 21,
      commonness: 21
    },
    {
      id: "cyan",
      name: "cyan",
      hex: "#00ffff",
      rank: 22,
      commonness: 22
    },
    {
      id: "aqua",
      name: "aqua",
      hex: "#13eac9",
      rank: 23,
      commonness: 23
    },
    {
      id: "mauve",
      name: "mauve",
      hex: "#ae7181",
      rank: 24,
      commonness: 25
    },
    {
      id: "dark-purple",
      name: "dark purple",
      hex: "#35063e",
      rank: 25,
      commonness: 26
    },
    {
      id: "maroon",
      name: "maroon",
      hex: "#650021",
      rank: 26,
      commonness: 28
    },
    {
      id: "olive",
      name: "olive",
      hex: "#6e750e",
      rank: 27,
      commonness: 29
    },
    {
      id: "salmon",
      name: "salmon",
      hex: "#ff796c",
      rank: 28,
      commonness: 30
    },
    {
      id: "beige",
      name: "beige",
      hex: "#e6daa6",
      rank: 29,
      commonness: 31
    },
    {
      id: "bright-green",
      name: "bright green",
      hex: "#01ff07",
      rank: 30,
      commonness: 27
    },
    {
      id: "royal-blue",
      name: "royal blue",
      hex: "#0504aa",
      rank: 31,
      commonness: 32
    },
    {
      id: "hot-pink",
      name: "hot pink",
      hex: "#ff028d",
      rank: 32,
      commonness: 36
    },
    {
      id: "light-brown",
      name: "light brown",
      hex: "#ad8150",
      rank: 33,
      commonness: 37
    },
    {
      id: "pale-green",
      name: "pale green",
      hex: "#c7fdb5",
      rank: 34,
      commonness: 38
    },
    {
      id: "peach",
      name: "peach",
      hex: "#ffb07c",
      rank: 35,
      commonness: 39
    },
    {
      id: "dark-pink",
      name: "dark pink",
      hex: "#cb416b",
      rank: 36,
      commonness: 41
    },
    {
      id: "periwinkle",
      name: "periwinkle",
      hex: "#8e82fe",
      rank: 37,
      commonness: 42
    },
    {
      id: "sea-green",
      name: "sea green",
      hex: "#53fca1",
      rank: 38,
      commonness: 43
    },
    {
      id: "lime",
      name: "lime",
      hex: "#aaff32",
      rank: 39,
      commonness: 44
    },
    {
      id: "mustard",
      name: "mustard",
      hex: "#ceb301",
      rank: 40,
      commonness: 46
    },
    {
      id: "light-pink",
      name: "light pink",
      hex: "#ffd1df",
      rank: 41,
      commonness: 47
    },
    {
      id: "bright-blue",
      name: "bright blue",
      hex: "#0165fc",
      rank: 42,
      commonness: 49
    },
    {
      id: "burnt-orange",
      name: "burnt orange",
      hex: "#c04e01",
      rank: 43,
      commonness: 51
    },
    {
      id: "rose",
      name: "rose",
      hex: "#cf6275",
      rank: 44,
      commonness: 48
    },
    {
      id: "navy",
      name: "navy",
      hex: "#01153e",
      rank: 45,
      commonness: 53
    },
    {
      id: "pale-blue",
      name: "pale blue",
      hex: "#d0fefe",
      rank: 46,
      commonness: 55
    },
    {
      id: "dark-red",
      name: "dark red",
      hex: "#840000",
      rank: 47,
      commonness: 56
    },
    {
      id: "plum",
      name: "plum",
      hex: "#580f41",
      rank: 48,
      commonness: 62
    },
    {
      id: "royal-purple",
      name: "royal purple",
      hex: "#4b006e",
      rank: 49,
      commonness: 63
    },
    {
      id: "dark-teal",
      name: "dark teal",
      hex: "#014d4e",
      rank: 50,
      commonness: 65
    },
    {
      id: "khaki",
      name: "khaki",
      hex: "#aaa662",
      rank: 51,
      commonness: 67
    },
    {
      id: "blue-green",
      name: "blue green",
      hex: "#137e6d",
      rank: 52,
      commonness: 68
    },
    {
      id: "puke-green",
      name: "puke green",
      hex: "#9aae07",
      rank: 53,
      commonness: 71
    },
    {
      id: "taupe",
      name: "taupe",
      hex: "#b9a281",
      rank: 54,
      commonness: 73
    },
    {
      id: "dark-brown",
      name: "dark brown",
      hex: "#341c02",
      rank: 55,
      commonness: 74
    },
    {
      id: "light-orange",
      name: "light orange",
      hex: "#fdaa48",
      rank: 56,
      commonness: 78
    },
    {
      id: "grey-blue",
      name: "grey blue",
      hex: "#6b8ba4",
      rank: 57,
      commonness: 86
    },
    {
      id: "army-green",
      name: "army green",
      hex: "#4b5d16",
      rank: 58,
      commonness: 87
    },
    {
      id: "dark-grey",
      name: "dark grey",
      hex: "#363737",
      rank: 59,
      commonness: 88
    },
    {
      id: "goldenrod",
      name: "goldenrod",
      hex: "#fac205",
      rank: 60,
      commonness: 90
    },
    {
      id: "slate",
      name: "slate",
      hex: "#516572",
      rank: 61,
      commonness: 91
    },
    {
      id: "light-teal",
      name: "light teal",
      hex: "#90e4c1",
      rank: 62,
      commonness: 92
    },
    {
      id: "sand",
      name: "sand",
      hex: "#e2ca76",
      rank: 63,
      commonness: 81
    },
    {
      id: "bright-purple",
      name: "bright purple",
      hex: "#be03fd",
      rank: 64,
      commonness: 57
    },
    {
      id: "rust",
      name: "rust",
      hex: "#a83c09",
      rank: 65,
      commonness: 93
    },
    {
      id: "cerulean",
      name: "cerulean",
      hex: "#0485d1",
      rank: 66,
      commonness: 96
    },
    {
      id: "light-red",
      name: "light red",
      hex: "#ff474c",
      rank: 67,
      commonness: 97
    },
    {
      id: "ochre",
      name: "ochre",
      hex: "#bf9005",
      rank: 68,
      commonness: 99
    },
    {
      id: "bright-pink",
      name: "bright pink",
      hex: "#fe01b1",
      rank: 69,
      commonness: 77
    },
    {
      id: "pale-yellow",
      name: "pale yellow",
      hex: "#ffff84",
      rank: 70,
      commonness: 100
    },
    {
      id: "fuchsia",
      name: "fuchsia",
      hex: "#ed0dd9",
      rank: 71,
      commonness: 102
    },
    {
      id: "sea-blue",
      name: "sea blue",
      hex: "#047495",
      rank: 72,
      commonness: 107
    },
    {
      id: "light-grey",
      name: "light grey",
      hex: "#d8dcd6",
      rank: 73,
      commonness: 110
    },
    {
      id: "grass-green",
      name: "grass green",
      hex: "#3f9b0b",
      rank: 74,
      commonness: 54
    },
    {
      id: "moss-green",
      name: "moss green",
      hex: "#658b38",
      rank: 75,
      commonness: 115
    },
    {
      id: "robin-s-egg-blue",
      name: "robin's egg blue",
      hex: "#98eff9",
      rank: 76,
      commonness: 116
    },
    {
      id: "grey-green",
      name: "grey green",
      hex: "#789b73",
      rank: 77,
      commonness: 118
    },
    {
      id: "sage",
      name: "sage",
      hex: "#87ae73",
      rank: 78,
      commonness: 119
    },
    {
      id: "brick",
      name: "brick",
      hex: "#a03623",
      rank: 79,
      commonness: 120
    },
    {
      id: "reddish-brown",
      name: "reddish brown",
      hex: "#7f2b0a",
      rank: 80,
      commonness: 122
    },
    {
      id: "cream",
      name: "cream",
      hex: "#ffffc2",
      rank: 81,
      commonness: 123
    },
    {
      id: "greenish",
      name: "greenish",
      hex: "#40a368",
      rank: 82,
      commonness: 126
    },
    {
      id: "dark-magenta",
      name: "dark magenta",
      hex: "#960056",
      rank: 83,
      commonness: 127
    },
    {
      id: "red-orange",
      name: "red orange",
      hex: "#fd3c06",
      rank: 84,
      commonness: 128
    },
    {
      id: "bluish-purple",
      name: "bluish purple",
      hex: "#703be7",
      rank: 85,
      commonness: 129
    },
    {
      id: "medium-blue",
      name: "medium blue",
      hex: "#2c6fbb",
      rank: 86,
      commonness: 133
    },
    {
      id: "yellowish-green",
      name: "yellowish green",
      hex: "#b0dd16",
      rank: 87,
      commonness: 135
    },
    {
      id: "sky-blue",
      name: "sky blue",
      hex: "#75bbfd",
      rank: 88,
      commonness: 12
    },
    {
      id: "grape",
      name: "grape",
      hex: "#6c3461",
      rank: 89,
      commonness: 138
    },
    {
      id: "light-olive",
      name: "light olive",
      hex: "#acbf69",
      rank: 90,
      commonness: 139
    },
    {
      id: "pinkish-red",
      name: "pinkish red",
      hex: "#f10c45",
      rank: 91,
      commonness: 141
    },
    {
      id: "azure",
      name: "azure",
      hex: "#069af3",
      rank: 92,
      commonness: 143
    },
    {
      id: "blue-purple",
      name: "blue purple",
      hex: "#5729ce",
      rank: 93,
      commonness: 144
    },
    {
      id: "off-white",
      name: "off white",
      hex: "#ffffe4",
      rank: 94,
      commonness: 147
    },
    {
      id: "powder-blue",
      name: "powder blue",
      hex: "#b1d1fc",
      rank: 95,
      commonness: 148
    },
    {
      id: "apple-green",
      name: "apple green",
      hex: "#76cd26",
      rank: 96,
      commonness: 151
    },
    {
      id: "cobalt",
      name: "cobalt",
      hex: "#1e488f",
      rank: 97,
      commonness: 154
    },
    {
      id: "blue-grey",
      name: "blue grey",
      hex: "#607c8e",
      rank: 98,
      commonness: 104
    },
    {
      id: "dark-cyan",
      name: "dark cyan",
      hex: "#0a888a",
      rank: 99,
      commonness: 157
    },
    {
      id: "greenish-yellow",
      name: "greenish yellow",
      hex: "#cdfd02",
      rank: 100,
      commonness: 134
    },
    {
      id: "dark-lavender",
      name: "dark lavender",
      hex: "#856798",
      rank: 101,
      commonness: 160
    },
    {
      id: "electric-blue",
      name: "electric blue",
      hex: "#0652ff",
      rank: 102,
      commonness: 146
    },
    {
      id: "cornflower-blue",
      name: "cornflower blue",
      hex: "#5170d7",
      rank: 103,
      commonness: 140
    },
    {
      id: "mint",
      name: "mint",
      hex: "#9ffeb0",
      rank: 104,
      commonness: 79
    },
    {
      id: "wine",
      name: "wine",
      hex: "#80013f",
      rank: 105,
      commonness: 149
    },
    {
      id: "leaf-green",
      name: "leaf green",
      hex: "#5ca904",
      rank: 106,
      commonness: 111
    },
    {
      id: "green-blue",
      name: "green blue",
      hex: "#06b48b",
      rank: 107,
      commonness: 166
    },
    {
      id: "forest-green",
      name: "forest green",
      hex: "#06470c",
      rank: 108,
      commonness: 24
    },
    {
      id: "indigo",
      name: "indigo",
      hex: "#380282",
      rank: 109,
      commonness: 45
    },
    {
      id: "moss",
      name: "moss",
      hex: "#769958",
      rank: 110,
      commonness: 169
    },
    {
      id: "dusty-rose",
      name: "dusty rose",
      hex: "#c0737a",
      rank: 111,
      commonness: 132
    },
    {
      id: "deep-pink",
      name: "deep pink",
      hex: "#cb0162",
      rank: 112,
      commonness: 171
    },
    {
      id: "pale-purple",
      name: "pale purple",
      hex: "#b790d4",
      rank: 113,
      commonness: 106
    },
    {
      id: "light-violet",
      name: "light violet",
      hex: "#d6b4fc",
      rank: 114,
      commonness: 131
    },
    {
      id: "aqua-blue",
      name: "aqua blue",
      hex: "#02d8e9",
      rank: 115,
      commonness: 174
    },
    {
      id: "terracotta",
      name: "terracotta",
      hex: "#ca6641",
      rank: 116,
      commonness: 175
    },
    {
      id: "bright-red",
      name: "bright red",
      hex: "#ff000d",
      rank: 117,
      commonness: 142
    },
    {
      id: "sienna",
      name: "sienna",
      hex: "#a9561e",
      rank: 118,
      commonness: 177
    },
    {
      id: "dark-olive",
      name: "dark olive",
      hex: "#373e02",
      rank: 119,
      commonness: 178
    },
    {
      id: "dark-turquoise",
      name: "dark turquoise",
      hex: "#045c5a",
      rank: 120,
      commonness: 145
    },
    {
      id: "scarlet",
      name: "scarlet",
      hex: "#be0119",
      rank: 121,
      commonness: 180
    },
    {
      id: "pastel-blue",
      name: "pastel blue",
      hex: "#a2bffe",
      rank: 122,
      commonness: 168
    },
    {
      id: "puke",
      name: "puke",
      hex: "#a5a502",
      rank: 123,
      commonness: 109
    },
    {
      id: "olive-drab",
      name: "olive drab",
      hex: "#6f7632",
      rank: 124,
      commonness: 156
    },
    {
      id: "cornflower",
      name: "cornflower",
      hex: "#6a79f7",
      rank: 125,
      commonness: 184
    },
    {
      id: "baby-pink",
      name: "baby pink",
      hex: "#ffb7ce",
      rank: 126,
      commonness: 185
    },
    {
      id: "purplish-blue",
      name: "purplish blue",
      hex: "#601ef9",
      rank: 127,
      commonness: 136
    },
    {
      id: "aquamarine",
      name: "aquamarine",
      hex: "#04d8b2",
      rank: 128,
      commonness: 52
    },
    {
      id: "pumpkin",
      name: "pumpkin",
      hex: "#e17701",
      rank: 129,
      commonness: 188
    },
    {
      id: "greenish-brown",
      name: "greenish brown",
      hex: "#696112",
      rank: 130,
      commonness: 189
    },
    {
      id: "midnight-blue",
      name: "midnight blue",
      hex: "#020035",
      rank: 131,
      commonness: 130
    },
    {
      id: "light-turquoise",
      name: "light turquoise",
      hex: "#7ef4cc",
      rank: 132,
      commonness: 152
    },
    {
      id: "tangerine",
      name: "tangerine",
      hex: "#ff9408",
      rank: 133,
      commonness: 192
    },
    {
      id: "pastel-green",
      name: "pastel green",
      hex: "#b0ff9d",
      rank: 134,
      commonness: 80
    },
    {
      id: "aqua-green",
      name: "aqua green",
      hex: "#12e193",
      rank: 135,
      commonness: 194
    },
    {
      id: "raspberry",
      name: "raspberry",
      hex: "#b00149",
      rank: 136,
      commonness: 195
    },
    {
      id: "greyish-purple",
      name: "greyish purple",
      hex: "#887191",
      rank: 137,
      commonness: 196
    },
    {
      id: "rose-pink",
      name: "rose pink",
      hex: "#f7879a",
      rank: 138,
      commonness: 197
    },
    {
      id: "dark-tan",
      name: "dark tan",
      hex: "#af884a",
      rank: 139,
      commonness: 165
    },
    {
      id: "salmon-pink",
      name: "salmon pink",
      hex: "#fe7b7c",
      rank: 140,
      commonness: 193
    },
    {
      id: "orange-brown",
      name: "orange brown",
      hex: "#be6400",
      rank: 141,
      commonness: 200
    },
    {
      id: "deep-red",
      name: "deep red",
      hex: "#9a0200",
      rank: 142,
      commonness: 201
    },
    {
      id: "pinkish-purple",
      name: "pinkish purple",
      hex: "#d648d7",
      rank: 143,
      commonness: 108
    },
    {
      id: "dirty-yellow",
      name: "dirty yellow",
      hex: "#cdc50a",
      rank: 144,
      commonness: 203
    },
    {
      id: "orchid",
      name: "orchid",
      hex: "#c875c4",
      rank: 145,
      commonness: 204
    },
    {
      id: "reddish-pink",
      name: "reddish pink",
      hex: "#fe2c54",
      rank: 146,
      commonness: 205
    },
    {
      id: "bluish-green",
      name: "bluish green",
      hex: "#10a674",
      rank: 147,
      commonness: 167
    },
    {
      id: "yellow-orange",
      name: "yellow orange",
      hex: "#fcb001",
      rank: 148,
      commonness: 207
    },
    {
      id: "light-cyan",
      name: "light cyan",
      hex: "#acfffc",
      rank: 149,
      commonness: 208
    },
    {
      id: "slate-blue",
      name: "slate blue",
      hex: "#5b7c99",
      rank: 150,
      commonness: 105
    },
    {
      id: "light-magenta",
      name: "light magenta",
      hex: "#fa5ff7",
      rank: 151,
      commonness: 210
    },
    {
      id: "pale-red",
      name: "pale red",
      hex: "#d9544d",
      rank: 152,
      commonness: 211
    },
    {
      id: "emerald",
      name: "emerald",
      hex: "#01a049",
      rank: 153,
      commonness: 212
    },
    {
      id: "dark-beige",
      name: "dark beige",
      hex: "#ac9362",
      rank: 154,
      commonness: 213
    },
    {
      id: "ugly-green",
      name: "ugly green",
      hex: "#7a9703",
      rank: 155,
      commonness: 214
    },
    {
      id: "dull-green",
      name: "dull green",
      hex: "#74a662",
      rank: 156,
      commonness: 150
    },
    {
      id: "greenish-grey",
      name: "greenish grey",
      hex: "#96ae8d",
      rank: 157,
      commonness: 216
    },
    {
      id: "pine-green",
      name: "pine green",
      hex: "#0a481e",
      rank: 158,
      commonness: 187
    },
    {
      id: "purplish-pink",
      name: "purplish pink",
      hex: "#ce5dae",
      rank: 159,
      commonness: 218
    },
    {
      id: "dark-aqua",
      name: "dark aqua",
      hex: "#05696b",
      rank: 160,
      commonness: 219
    },
    {
      id: "brownish-orange",
      name: "brownish orange",
      hex: "#cb7723",
      rank: 161,
      commonness: 220
    },
    {
      id: "deep-blue",
      name: "deep blue",
      hex: "#040273",
      rank: 162,
      commonness: 94
    },
    {
      id: "chocolate",
      name: "chocolate",
      hex: "#3d1c02",
      rank: 163,
      commonness: 182
    },
    {
      id: "clay",
      name: "clay",
      hex: "#b66a50",
      rank: 164,
      commonness: 223
    },
    {
      id: "medium-green",
      name: "medium green",
      hex: "#39ad48",
      rank: 165,
      commonness: 224
    },
    {
      id: "pale-orange",
      name: "pale orange",
      hex: "#ffa756",
      rank: 166,
      commonness: 163
    },
    {
      id: "dull-blue",
      name: "dull blue",
      hex: "#49759c",
      rank: 167,
      commonness: 226
    },
    {
      id: "pale-brown",
      name: "pale brown",
      hex: "#b1916e",
      rank: 168,
      commonness: 227
    },
    {
      id: "emerald-green",
      name: "emerald green",
      hex: "#028f1e",
      rank: 169,
      commonness: 228
    },
    {
      id: "brownish",
      name: "brownish",
      hex: "#9c6d57",
      rank: 170,
      commonness: 229
    },
    {
      id: "mud",
      name: "mud",
      hex: "#735c12",
      rank: 171,
      commonness: 230
    },
    {
      id: "dark-rose",
      name: "dark rose",
      hex: "#b5485d",
      rank: 172,
      commonness: 231
    },
    {
      id: "ocean-blue",
      name: "ocean blue",
      hex: "#03719c",
      rank: 173,
      commonness: 125
    },
    {
      id: "eggplant",
      name: "eggplant",
      hex: "#380835",
      rank: 174,
      commonness: 113
    },
    {
      id: "pinky-purple",
      name: "pinky purple",
      hex: "#c94cbe",
      rank: 175,
      commonness: 234
    },
    {
      id: "red-brown",
      name: "red brown",
      hex: "#8b2e16",
      rank: 176,
      commonness: 190
    },
    {
      id: "greyish-green",
      name: "greyish green",
      hex: "#82a67d",
      rank: 177,
      commonness: 181
    },
    {
      id: "dusty-pink",
      name: "dusty pink",
      hex: "#d58a94",
      rank: 178,
      commonness: 237
    },
    {
      id: "seafoam",
      name: "seafoam",
      hex: "#80f9ad",
      rank: 179,
      commonness: 85
    },
    {
      id: "vomit-green",
      name: "vomit green",
      hex: "#89a203",
      rank: 180,
      commonness: 239
    },
    {
      id: "deep-green",
      name: "deep green",
      hex: "#02590f",
      rank: 181,
      commonness: 240
    },
    {
      id: "dark-salmon",
      name: "dark salmon",
      hex: "#c85a53",
      rank: 182,
      commonness: 217
    },
    {
      id: "mahogany",
      name: "mahogany",
      hex: "#4a0100",
      rank: 183,
      commonness: 242
    },
    {
      id: "gold",
      name: "gold",
      hex: "#dbb40c",
      rank: 184,
      commonness: 60
    },
    {
      id: "dull-pink",
      name: "dull pink",
      hex: "#d5869d",
      rank: 185,
      commonness: 244
    },
    {
      id: "evergreen",
      name: "evergreen",
      hex: "#05472a",
      rank: 186,
      commonness: 245
    },
    {
      id: "dark-sky-blue",
      name: "dark sky blue",
      hex: "#448ee4",
      rank: 187,
      commonness: 246
    },
    {
      id: "olive-green",
      name: "olive green",
      hex: "#677a04",
      rank: 188,
      commonness: 40
    },
    {
      id: "burnt-umber",
      name: "burnt umber",
      hex: "#a0450e",
      rank: 189,
      commonness: 225
    },
    {
      id: "blue-violet",
      name: "blue violet",
      hex: "#5d06e9",
      rank: 190,
      commonness: 183
    },
    {
      id: "coral",
      name: "coral",
      hex: "#fc5a50",
      rank: 191,
      commonness: 124
    },
    {
      id: "dark-mauve",
      name: "dark mauve",
      hex: "#874c62",
      rank: 192,
      commonness: 251
    },
    {
      id: "baby-blue",
      name: "baby blue",
      hex: "#a2cffe",
      rank: 193,
      commonness: 59
    },
    {
      id: "navy-blue",
      name: "navy blue",
      hex: "#001146",
      rank: 194,
      commonness: 33
    },
    {
      id: "light-tan",
      name: "light tan",
      hex: "#fbeeac",
      rank: 195,
      commonness: 254
    },
    {
      id: "dirty-green",
      name: "dirty green",
      hex: "#667e2c",
      rank: 196,
      commonness: 255
    },
    {
      id: "neon-blue",
      name: "neon blue",
      hex: "#04d9ff",
      rank: 197,
      commonness: 256
    },
    {
      id: "wine-red",
      name: "wine red",
      hex: "#7b0323",
      rank: 198,
      commonness: 257
    },
    {
      id: "lime-green",
      name: "lime green",
      hex: "#89fe05",
      rank: 199,
      commonness: 14
    },
    {
      id: "dull-purple",
      name: "dull purple",
      hex: "#84597e",
      rank: 200,
      commonness: 259
    },
    {
      id: "yellow-brown",
      name: "yellow brown",
      hex: "#b79400",
      rank: 201,
      commonness: 260
    },
    {
      id: "denim",
      name: "denim",
      hex: "#3b638c",
      rank: 202,
      commonness: 261
    },
    {
      id: "eggshell",
      name: "eggshell",
      hex: "#ffffd4",
      rank: 203,
      commonness: 262
    },
    {
      id: "jungle-green",
      name: "jungle green",
      hex: "#048243",
      rank: 204,
      commonness: 263
    },
    {
      id: "dark-peach",
      name: "dark peach",
      hex: "#de7e5d",
      rank: 205,
      commonness: 264
    },
    {
      id: "poop",
      name: "poop",
      hex: "#7f5e00",
      rank: 206,
      commonness: 265
    },
    {
      id: "spring-green",
      name: "spring green",
      hex: "#a9f971",
      rank: 207,
      commonness: 83
    },
    {
      id: "light-lavender",
      name: "light lavender",
      hex: "#dfc5fe",
      rank: 208,
      commonness: 267
    },
    {
      id: "camo-green",
      name: "camo green",
      hex: "#526525",
      rank: 209,
      commonness: 235
    },
    {
      id: "crimson",
      name: "crimson",
      hex: "#8c000f",
      rank: 210,
      commonness: 101
    },
    {
      id: "dusty-blue",
      name: "dusty blue",
      hex: "#5a86ad",
      rank: 211,
      commonness: 270
    },
    {
      id: "umber",
      name: "umber",
      hex: "#b26400",
      rank: 212,
      commonness: 266
    },
    {
      id: "lighter-green",
      name: "lighter green",
      hex: "#75fd63",
      rank: 213,
      commonness: 272
    },
    {
      id: "mint-green",
      name: "mint green",
      hex: "#8fff9f",
      rank: 214,
      commonness: 61
    },
    {
      id: "slate-grey",
      name: "slate grey",
      hex: "#59656d",
      rank: 215,
      commonness: 273
    },
    {
      id: "marine-blue",
      name: "marine blue",
      hex: "#01386a",
      rank: 216,
      commonness: 275
    },
    {
      id: "avocado",
      name: "avocado",
      hex: "#90b134",
      rank: 217,
      commonness: 276
    },
    {
      id: "faded-green",
      name: "faded green",
      hex: "#7bb274",
      rank: 218,
      commonness: 236
    },
    {
      id: "dusty-purple",
      name: "dusty purple",
      hex: "#825f87",
      rank: 219,
      commonness: 278
    },
    {
      id: "light-maroon",
      name: "light maroon",
      hex: "#a24857",
      rank: 220,
      commonness: 279
    },
    {
      id: "reddish",
      name: "reddish",
      hex: "#c44240",
      rank: 221,
      commonness: 280
    },
    {
      id: "dark-lilac",
      name: "dark lilac",
      hex: "#9c6da5",
      rank: 222,
      commonness: 281
    },
    {
      id: "dark-periwinkle",
      name: "dark periwinkle",
      hex: "#665fd1",
      rank: 223,
      commonness: 282
    },
    {
      id: "bluish-grey",
      name: "bluish grey",
      hex: "#748b97",
      rank: 224,
      commonness: 283
    },
    {
      id: "mustard-yellow",
      name: "mustard yellow",
      hex: "#d2bd0a",
      rank: 225,
      commonness: 98
    },
    {
      id: "purplish",
      name: "purplish",
      hex: "#94568c",
      rank: 226,
      commonness: 285
    },
    {
      id: "pastel-purple",
      name: "pastel purple",
      hex: "#caa0ff",
      rank: 227,
      commonness: 176
    },
    {
      id: "barney-purple",
      name: "barney purple",
      hex: "#a00498",
      rank: 228,
      commonness: 287
    },
    {
      id: "grass",
      name: "grass",
      hex: "#5cac2d",
      rank: 229,
      commonness: 170
    },
    {
      id: "pea-soup",
      name: "pea soup",
      hex: "#929901",
      rank: 230,
      commonness: 289
    },
    {
      id: "burnt-sienna",
      name: "burnt sienna",
      hex: "#b04e0f",
      rank: 231,
      commonness: 121
    },
    {
      id: "bright-teal",
      name: "bright teal",
      hex: "#01f9c6",
      rank: 232,
      commonness: 291
    },
    {
      id: "bluegreen",
      name: "bluegreen",
      hex: "#017a79",
      rank: 233,
      commonness: 292
    },
    {
      id: "green-brown",
      name: "green brown",
      hex: "#544e03",
      rank: 234,
      commonness: 293
    },
    {
      id: "blurple",
      name: "blurple",
      hex: "#5539cc",
      rank: 235,
      commonness: 294
    },
    {
      id: "yellow-green",
      name: "yellow green",
      hex: "#c0fb2d",
      rank: 236,
      commonness: 58
    },
    {
      id: "periwinkle-blue",
      name: "periwinkle blue",
      hex: "#8f99fb",
      rank: 237,
      commonness: 296
    },
    {
      id: "light-aqua",
      name: "light aqua",
      hex: "#8cffdb",
      rank: 238,
      commonness: 222
    },
    {
      id: "true-blue",
      name: "true blue",
      hex: "#010fcc",
      rank: 239,
      commonness: 298
    },
    {
      id: "green-grey",
      name: "green grey",
      hex: "#77926f",
      rank: 240,
      commonness: 299
    },
    {
      id: "grey-brown",
      name: "grey brown",
      hex: "#7f7053",
      rank: 241,
      commonness: 300
    },
    {
      id: "dark-olive-green",
      name: "dark olive green",
      hex: "#3c4d03",
      rank: 242,
      commonness: 301
    },
    {
      id: "apricot",
      name: "apricot",
      hex: "#ffb16d",
      rank: 243,
      commonness: 302
    },
    {
      id: "faded-purple",
      name: "faded purple",
      hex: "#916e99",
      rank: 244,
      commonness: 303
    },
    {
      id: "cerise",
      name: "cerise",
      hex: "#de0c62",
      rank: 245,
      commonness: 304
    },
    {
      id: "khaki-green",
      name: "khaki green",
      hex: "#728639",
      rank: 246,
      commonness: 305
    },
    {
      id: "burnt-red",
      name: "burnt red",
      hex: "#9f2305",
      rank: 247,
      commonness: 306
    },
    {
      id: "light-forest-green",
      name: "light forest green",
      hex: "#4f9153",
      rank: 248,
      commonness: 307
    },
    {
      id: "violet-blue",
      name: "violet blue",
      hex: "#510ac9",
      rank: 249,
      commonness: 308
    },
    {
      id: "pale-lavender",
      name: "pale lavender",
      hex: "#eecffe",
      rank: 250,
      commonness: 309
    },
    {
      id: "greenish-blue",
      name: "greenish blue",
      hex: "#0b8b87",
      rank: 251,
      commonness: 164
    },
    {
      id: "purple-grey",
      name: "purple grey",
      hex: "#866f85",
      rank: 252,
      commonness: 311
    },
    {
      id: "lemon",
      name: "lemon",
      hex: "#fdff52",
      rank: 253,
      commonness: 312
    },
    {
      id: "bright-orange",
      name: "bright orange",
      hex: "#ff5b00",
      rank: 254,
      commonness: 313
    },
    {
      id: "soft-green",
      name: "soft green",
      hex: "#6fc276",
      rank: 255,
      commonness: 314
    },
    {
      id: "blush",
      name: "blush",
      hex: "#f29e8e",
      rank: 256,
      commonness: 315
    },
    {
      id: "yellowish-brown",
      name: "yellowish brown",
      hex: "#9b7a01",
      rank: 257,
      commonness: 316
    },
    {
      id: "neon-pink",
      name: "neon pink",
      hex: "#fe019a",
      rank: 258,
      commonness: 198
    },
    {
      id: "electric-purple",
      name: "electric purple",
      hex: "#aa23ff",
      rank: 259,
      commonness: 318
    },
    {
      id: "steel",
      name: "steel",
      hex: "#738595",
      rank: 260,
      commonness: 319
    },
    {
      id: "dull-orange",
      name: "dull orange",
      hex: "#d8863b",
      rank: 261,
      commonness: 320
    },
    {
      id: "muddy-green",
      name: "muddy green",
      hex: "#657432",
      rank: 262,
      commonness: 321
    },
    {
      id: "kelly-green",
      name: "kelly green",
      hex: "#02ab2e",
      rank: 263,
      commonness: 70
    },
    {
      id: "ocean",
      name: "ocean",
      hex: "#017b92",
      rank: 264,
      commonness: 323
    },
    {
      id: "light-mauve",
      name: "light mauve",
      hex: "#c292a1",
      rank: 265,
      commonness: 324
    },
    {
      id: "bordeaux",
      name: "bordeaux",
      hex: "#7b002c",
      rank: 266,
      commonness: 325
    },
    {
      id: "pea-green",
      name: "pea green",
      hex: "#8eab12",
      rank: 267,
      commonness: 72
    },
    {
      id: "yellowish",
      name: "yellowish",
      hex: "#faee66",
      rank: 268,
      commonness: 327
    },
    {
      id: "snot-green",
      name: "snot green",
      hex: "#9dc100",
      rank: 269,
      commonness: 328
    },
    {
      id: "light-lime-green",
      name: "light lime green",
      hex: "#b9ff66",
      rank: 270,
      commonness: 329
    },
    {
      id: "brownish-green",
      name: "brownish green",
      hex: "#6a6e09",
      rank: 271,
      commonness: 191
    },
    {
      id: "faded-blue",
      name: "faded blue",
      hex: "#658cbb",
      rank: 272,
      commonness: 331
    },
    {
      id: "dark-forest-green",
      name: "dark forest green",
      hex: "#002d04",
      rank: 273,
      commonness: 332
    },
    {
      id: "hot-purple",
      name: "hot purple",
      hex: "#cb00f5",
      rank: 274,
      commonness: 333
    },
    {
      id: "dark-maroon",
      name: "dark maroon",
      hex: "#3c0008",
      rank: 275,
      commonness: 334
    },
    {
      id: "chocolate-brown",
      name: "chocolate brown",
      hex: "#411900",
      rank: 276,
      commonness: 258
    },
    {
      id: "swamp-green",
      name: "swamp green",
      hex: "#748500",
      rank: 277,
      commonness: 336
    },
    {
      id: "sky",
      name: "sky",
      hex: "#82cafc",
      rank: 278,
      commonness: 209
    },
    {
      id: "purpley-blue",
      name: "purpley blue",
      hex: "#5f34e7",
      rank: 279,
      commonness: 338
    },
    {
      id: "lightish-blue",
      name: "lightish blue",
      hex: "#3d7afd",
      rank: 280,
      commonness: 339
    },
    {
      id: "teal-blue",
      name: "teal blue",
      hex: "#01889f",
      rank: 281,
      commonness: 340
    },
    {
      id: "denim-blue",
      name: "denim blue",
      hex: "#3b5b92",
      rank: 282,
      commonness: 341
    },
    {
      id: "dark-lime-green",
      name: "dark lime green",
      hex: "#7ebd01",
      rank: 283,
      commonness: 342
    },
    {
      id: "dull-yellow",
      name: "dull yellow",
      hex: "#eedc5b",
      rank: 284,
      commonness: 343
    },
    {
      id: "pistachio",
      name: "pistachio",
      hex: "#c0fa8b",
      rank: 285,
      commonness: 344
    },
    {
      id: "lilac",
      name: "lilac",
      hex: "#cea2fd",
      rank: 286,
      commonness: 34
    },
    {
      id: "red-violet",
      name: "red violet",
      hex: "#9e0168",
      rank: 287,
      commonness: 346
    },
    {
      id: "dusky-pink",
      name: "dusky pink",
      hex: "#cc7a8b",
      rank: 288,
      commonness: 347
    },
    {
      id: "dirt",
      name: "dirt",
      hex: "#8a6e45",
      rank: 289,
      commonness: 348
    },
    {
      id: "brown-green",
      name: "brown green",
      hex: "#706c11",
      rank: 290,
      commonness: 335
    },
    {
      id: "medium-purple",
      name: "medium purple",
      hex: "#9e43a2",
      rank: 291,
      commonness: 350
    },
    {
      id: "pinkish",
      name: "pinkish",
      hex: "#d46a7e",
      rank: 292,
      commonness: 155
    },
    {
      id: "dark-mustard",
      name: "dark mustard",
      hex: "#a88905",
      rank: 293,
      commonness: 352
    },
    {
      id: "hunter-green",
      name: "hunter green",
      hex: "#0b4008",
      rank: 294,
      commonness: 103
    },
    {
      id: "bubblegum-pink",
      name: "bubblegum pink",
      hex: "#fe83cc",
      rank: 295,
      commonness: 354
    },
    {
      id: "barbie-pink",
      name: "barbie pink",
      hex: "#fe46a5",
      rank: 296,
      commonness: 355
    },
    {
      id: "military-green",
      name: "military green",
      hex: "#667c3e",
      rank: 297,
      commonness: 356
    },
    {
      id: "pale-teal",
      name: "pale teal",
      hex: "#82cbb2",
      rank: 298,
      commonness: 357
    },
    {
      id: "bronze",
      name: "bronze",
      hex: "#a87900",
      rank: 299,
      commonness: 358
    },
    {
      id: "pinky-red",
      name: "pinky red",
      hex: "#fc2647",
      rank: 300,
      commonness: 359
    },
    {
      id: "neon-green",
      name: "neon green",
      hex: "#0cff0c",
      rank: 301,
      commonness: 50
    },
    {
      id: "darkish-blue",
      name: "darkish blue",
      hex: "#014182",
      rank: 302,
      commonness: 361
    },
    {
      id: "bluish",
      name: "bluish",
      hex: "#2976bb",
      rank: 303,
      commonness: 362
    },
    {
      id: "puke-yellow",
      name: "puke yellow",
      hex: "#c2be0e",
      rank: 304,
      commonness: 284
    },
    {
      id: "orange-red",
      name: "orange red",
      hex: "#fd411e",
      rank: 305,
      commonness: 202
    },
    {
      id: "pine",
      name: "pine",
      hex: "#2b5d34",
      rank: 306,
      commonness: 365
    },
    {
      id: "dark-blue-green",
      name: "dark blue green",
      hex: "#005249",
      rank: 307,
      commonness: 366
    },
    {
      id: "dirty-pink",
      name: "dirty pink",
      hex: "#ca7b80",
      rank: 308,
      commonness: 367
    },
    {
      id: "slate-green",
      name: "slate green",
      hex: "#658d6d",
      rank: 309,
      commonness: 368
    },
    {
      id: "prussian-blue",
      name: "prussian blue",
      hex: "#004577",
      rank: 310,
      commonness: 369
    },
    {
      id: "light-olive-green",
      name: "light olive green",
      hex: "#a4be5c",
      rank: 311,
      commonness: 221
    },
    {
      id: "lighter-purple",
      name: "lighter purple",
      hex: "#a55af4",
      rank: 312,
      commonness: 371
    },
    {
      id: "steel-grey",
      name: "steel grey",
      hex: "#6f828a",
      rank: 313,
      commonness: 372
    },
    {
      id: "dull-red",
      name: "dull red",
      hex: "#bb3f3f",
      rank: 314,
      commonness: 360
    },
    {
      id: "brick-red",
      name: "brick red",
      hex: "#8f1402",
      rank: 315,
      commonness: 64
    },
    {
      id: "vermillion",
      name: "vermillion",
      hex: "#f4320c",
      rank: 316,
      commonness: 374
    },
    {
      id: "burgundy",
      name: "burgundy",
      hex: "#610023",
      rank: 317,
      commonness: 66
    },
    {
      id: "greyish-brown",
      name: "greyish brown",
      hex: "#7a6a4f",
      rank: 318,
      commonness: 375
    },
    {
      id: "light-indigo",
      name: "light indigo",
      hex: "#6d5acf",
      rank: 319,
      commonness: 337
    },
    {
      id: "seafoam-green",
      name: "seafoam green",
      hex: "#7af9ab",
      rank: 320,
      commonness: 69
    },
    {
      id: "cerulean-blue",
      name: "cerulean blue",
      hex: "#056eee",
      rank: 321,
      commonness: 380
    },
    {
      id: "soft-blue",
      name: "soft blue",
      hex: "#6488ea",
      rank: 322,
      commonness: 381
    },
    {
      id: "golden-brown",
      name: "golden brown",
      hex: "#b27a01",
      rank: 323,
      commonness: 379
    },
    {
      id: "yellowy-green",
      name: "yellowy green",
      hex: "#bff128",
      rank: 324,
      commonness: 364
    },
    {
      id: "pea-soup-green",
      name: "pea soup green",
      hex: "#94a617",
      rank: 325,
      commonness: 353
    },
    {
      id: "deep-purple",
      name: "deep purple",
      hex: "#36013f",
      rank: 326,
      commonness: 75
    },
    {
      id: "chartreuse",
      name: "chartreuse",
      hex: "#c1f80a",
      rank: 327,
      commonness: 76
    },
    {
      id: "hospital-green",
      name: "hospital green",
      hex: "#9be5aa",
      rank: 328,
      commonness: 386
    },
    {
      id: "shit-brown",
      name: "shit brown",
      hex: "#7b5804",
      rank: 329,
      commonness: 385
    },
    {
      id: "silver",
      name: "silver",
      hex: "#c5c9c7",
      rank: 330,
      commonness: 389
    },
    {
      id: "purpleish-blue",
      name: "purpleish blue",
      hex: "#6140ef",
      rank: 331,
      commonness: 387
    },
    {
      id: "melon",
      name: "melon",
      hex: "#ff7855",
      rank: 332,
      commonness: 391
    },
    {
      id: "dark-orange",
      name: "dark orange",
      hex: "#c65102",
      rank: 333,
      commonness: 82
    },
    {
      id: "dusky-rose",
      name: "dusky rose",
      hex: "#ba6873",
      rank: 334,
      commonness: 392
    },
    {
      id: "puce",
      name: "puce",
      hex: "#a57e52",
      rank: 335,
      commonness: 84
    },
    {
      id: "cranberry",
      name: "cranberry",
      hex: "#9e003a",
      rank: 336,
      commonness: 395
    },
    {
      id: "darkish-green",
      name: "darkish green",
      hex: "#287c37",
      rank: 337,
      commonness: 394
    },
    {
      id: "brown-orange",
      name: "brown orange",
      hex: "#b96902",
      rank: 338,
      commonness: 393
    },
    {
      id: "mocha",
      name: "mocha",
      hex: "#9d7651",
      rank: 339,
      commonness: 398
    },
    {
      id: "dark-yellow",
      name: "dark yellow",
      hex: "#d5b60a",
      rank: 340,
      commonness: 89
    },
    {
      id: "bright-magenta",
      name: "bright magenta",
      hex: "#ff08e8",
      rank: 341,
      commonness: 399
    },
    {
      id: "sepia",
      name: "sepia",
      hex: "#985e2b",
      rank: 342,
      commonness: 401
    },
    {
      id: "faded-red",
      name: "faded red",
      hex: "#d3494e",
      rank: 343,
      commonness: 402
    },
    {
      id: "coffee",
      name: "coffee",
      hex: "#a6814c",
      rank: 344,
      commonness: 400
    },
    {
      id: "bluey-purple",
      name: "bluey purple",
      hex: "#6241c7",
      rank: 345,
      commonness: 404
    },
    {
      id: "pale-pink",
      name: "pale pink",
      hex: "#ffcfdc",
      rank: 346,
      commonness: 95
    },
    {
      id: "pale-turquoise",
      name: "pale turquoise",
      hex: "#a5fbd5",
      rank: 347,
      commonness: 406
    },
    {
      id: "greyish-pink",
      name: "greyish pink",
      hex: "#c88d94",
      rank: 348,
      commonness: 407
    },
    {
      id: "marine",
      name: "marine",
      hex: "#042e60",
      rank: 349,
      commonness: 408
    },
    {
      id: "purplish-grey",
      name: "purplish grey",
      hex: "#7a687f",
      rank: 350,
      commonness: 409
    },
    {
      id: "camel",
      name: "camel",
      hex: "#c69f59",
      rank: 351,
      commonness: 410
    },
    {
      id: "brownish-grey",
      name: "brownish grey",
      hex: "#86775f",
      rank: 352,
      commonness: 411
    },
    {
      id: "burnt-yellow",
      name: "burnt yellow",
      hex: "#d5ab09",
      rank: 353,
      commonness: 412
    },
    {
      id: "cherry-red",
      name: "cherry red",
      hex: "#f7022a",
      rank: 354,
      commonness: 413
    },
    {
      id: "pastel-yellow",
      name: "pastel yellow",
      hex: "#fffe71",
      rank: 355,
      commonness: 405
    },
    {
      id: "soft-pink",
      name: "soft pink",
      hex: "#fdb0c0",
      rank: 356,
      commonness: 415
    },
    {
      id: "dark-sea-green",
      name: "dark sea green",
      hex: "#11875d",
      rank: 357,
      commonness: 416
    },
    {
      id: "aqua-marine",
      name: "aqua marine",
      hex: "#2ee8bb",
      rank: 358,
      commonness: 417
    },
    {
      id: "charcoal",
      name: "charcoal",
      hex: "#343837",
      rank: 359,
      commonness: 186
    },
    {
      id: "light-sea-green",
      name: "light sea green",
      hex: "#98f6b0",
      rank: 360,
      commonness: 419
    },
    {
      id: "mud-brown",
      name: "mud brown",
      hex: "#60460f",
      rank: 361,
      commonness: 420
    },
    {
      id: "sandstone",
      name: "sandstone",
      hex: "#c9ae74",
      rank: 362,
      commonness: 421
    },
    {
      id: "light-yellow",
      name: "light yellow",
      hex: "#fffe7a",
      rank: 363,
      commonness: 112
    },
    {
      id: "faded-pink",
      name: "faded pink",
      hex: "#de9dac",
      rank: 364,
      commonness: 423
    },
    {
      id: "steel-blue",
      name: "steel blue",
      hex: "#5a7d9a",
      rank: 365,
      commonness: 114
    },
    {
      id: "maize",
      name: "maize",
      hex: "#f4d054",
      rank: 366,
      commonness: 424
    },
    {
      id: "ocre",
      name: "ocre",
      hex: "#c69c04",
      rank: 367,
      commonness: 425
    },
    {
      id: "dark-khaki",
      name: "dark khaki",
      hex: "#9b8f55",
      rank: 368,
      commonness: 427
    },
    {
      id: "red-purple",
      name: "red purple",
      hex: "#820747",
      rank: 369,
      commonness: 376
    },
    {
      id: "bright-light-blue",
      name: "bright light blue",
      hex: "#26f7fd",
      rank: 370,
      commonness: 429
    },
    {
      id: "jade-green",
      name: "jade green",
      hex: "#2baf6a",
      rank: 371,
      commonness: 430
    },
    {
      id: "barney",
      name: "barney",
      hex: "#ac1db8",
      rank: 372,
      commonness: 431
    },
    {
      id: "adobe",
      name: "adobe",
      hex: "#bd6c48",
      rank: 373,
      commonness: 432
    },
    {
      id: "minty-green",
      name: "minty green",
      hex: "#0bf77d",
      rank: 374,
      commonness: 433
    },
    {
      id: "light-navy-blue",
      name: "light navy blue",
      hex: "#2e5a88",
      rank: 375,
      commonness: 434
    },
    {
      id: "dusty-green",
      name: "dusty green",
      hex: "#76a973",
      rank: 376,
      commonness: 435
    },
    {
      id: "sickly-green",
      name: "sickly green",
      hex: "#94b21c",
      rank: 377,
      commonness: 390
    },
    {
      id: "ocean-green",
      name: "ocean green",
      hex: "#3d9973",
      rank: 378,
      commonness: 437
    },
    {
      id: "mustard-green",
      name: "mustard green",
      hex: "#a8b504",
      rank: 379,
      commonness: 438
    },
    {
      id: "mid-blue",
      name: "mid blue",
      hex: "#276ab3",
      rank: 380,
      commonness: 384
    },
    {
      id: "olive-brown",
      name: "olive brown",
      hex: "#645403",
      rank: 381,
      commonness: 440
    },
    {
      id: "pink-red",
      name: "pink red",
      hex: "#f5054f",
      rank: 382,
      commonness: 441
    },
    {
      id: "light-navy",
      name: "light navy",
      hex: "#155084",
      rank: 383,
      commonness: 442
    },
    {
      id: "very-light-purple",
      name: "very light purple",
      hex: "#f6cefc",
      rank: 384,
      commonness: 443
    },
    {
      id: "ivory",
      name: "ivory",
      hex: "#ffffcb",
      rank: 385,
      commonness: 444
    },
    {
      id: "bright-lavender",
      name: "bright lavender",
      hex: "#c760ff",
      rank: 386,
      commonness: 445
    },
    {
      id: "greyish-blue",
      name: "greyish blue",
      hex: "#5e819d",
      rank: 387,
      commonness: 137
    },
    {
      id: "bright-aqua",
      name: "bright aqua",
      hex: "#0bf9ea",
      rank: 388,
      commonness: 446
    },
    {
      id: "robin-s-egg",
      name: "robin's egg",
      hex: "#6dedfd",
      rank: 389,
      commonness: 447
    },
    {
      id: "medium-brown",
      name: "medium brown",
      hex: "#7f5112",
      rank: 390,
      commonness: 449
    },
    {
      id: "copper",
      name: "copper",
      hex: "#b66325",
      rank: 391,
      commonness: 450
    },
    {
      id: "muted-green",
      name: "muted green",
      hex: "#5fa052",
      rank: 392,
      commonness: 448
    },
    {
      id: "dark-lime",
      name: "dark lime",
      hex: "#84b701",
      rank: 393,
      commonness: 451
    },
    {
      id: "dirt-brown",
      name: "dirt brown",
      hex: "#836539",
      rank: 394,
      commonness: 453
    },
    {
      id: "pale-violet",
      name: "pale violet",
      hex: "#ceaefa",
      rank: 395,
      commonness: 297
    },
    {
      id: "bright-sky-blue",
      name: "bright sky blue",
      hex: "#02ccfe",
      rank: 396,
      commonness: 455
    },
    {
      id: "poo-brown",
      name: "poo brown",
      hex: "#885f01",
      rank: 397,
      commonness: 456
    },
    {
      id: "pinkish-brown",
      name: "pinkish brown",
      hex: "#b17261",
      rank: 398,
      commonness: 457
    },
    {
      id: "light-sky-blue",
      name: "light sky blue",
      hex: "#c6fcff",
      rank: 399,
      commonness: 295
    },
    {
      id: "bright-lime-green",
      name: "bright lime green",
      hex: "#65fe08",
      rank: 400,
      commonness: 459
    },
    {
      id: "auburn",
      name: "auburn",
      hex: "#9a3001",
      rank: 401,
      commonness: 460
    },
    {
      id: "forrest-green",
      name: "forrest green",
      hex: "#154406",
      rank: 402,
      commonness: 161
    },
    {
      id: "neon-purple",
      name: "neon purple",
      hex: "#bc13fe",
      rank: 403,
      commonness: 153
    },
    {
      id: "carolina-blue",
      name: "carolina blue",
      hex: "#8ab8fe",
      rank: 404,
      commonness: 463
    },
    {
      id: "lightish-green",
      name: "lightish green",
      hex: "#61e160",
      rank: 405,
      commonness: 464
    },
    {
      id: "light-lilac",
      name: "light lilac",
      hex: "#edc8ff",
      rank: 406,
      commonness: 465
    },
    {
      id: "pale-olive",
      name: "pale olive",
      hex: "#b9cc81",
      rank: 407,
      commonness: 466
    },
    {
      id: "purple-blue",
      name: "purple blue",
      hex: "#632de9",
      rank: 408,
      commonness: 158
    },
    {
      id: "dark-violet",
      name: "dark violet",
      hex: "#34013f",
      rank: 409,
      commonness: 159
    },
    {
      id: "pumpkin-orange",
      name: "pumpkin orange",
      hex: "#fb7d07",
      rank: 410,
      commonness: 467
    },
    {
      id: "deep-sky-blue",
      name: "deep sky blue",
      hex: "#0d75f8",
      rank: 411,
      commonness: 470
    },
    {
      id: "vomit",
      name: "vomit",
      hex: "#a2a415",
      rank: 412,
      commonness: 162
    },
    {
      id: "watermelon",
      name: "watermelon",
      hex: "#fd4659",
      rank: 413,
      commonness: 471
    },
    {
      id: "very-dark-purple",
      name: "very dark purple",
      hex: "#2a0134",
      rank: 414,
      commonness: 473
    },
    {
      id: "wheat",
      name: "wheat",
      hex: "#fbdd7e",
      rank: 415,
      commonness: 474
    },
    {
      id: "mulberry",
      name: "mulberry",
      hex: "#920a4e",
      rank: 416,
      commonness: 462
    },
    {
      id: "brownish-purple",
      name: "brownish purple",
      hex: "#76424e",
      rank: 417,
      commonness: 476
    },
    {
      id: "kermit-green",
      name: "kermit green",
      hex: "#5cb200",
      rank: 418,
      commonness: 477
    },
    {
      id: "primary-blue",
      name: "primary blue",
      hex: "#0804f9",
      rank: 419,
      commonness: 478
    },
    {
      id: "grey-purple",
      name: "grey purple",
      hex: "#826d8c",
      rank: 420,
      commonness: 249
    },
    {
      id: "very-light-green",
      name: "very light green",
      hex: "#d1ffbd",
      rank: 421,
      commonness: 247
    },
    {
      id: "blood-red",
      name: "blood red",
      hex: "#980002",
      rank: 422,
      commonness: 172
    },
    {
      id: "sage-green",
      name: "sage green",
      hex: "#88b378",
      rank: 423,
      commonness: 173
    },
    {
      id: "pinkish-grey",
      name: "pinkish grey",
      hex: "#c8aca9",
      rank: 424,
      commonness: 483
    },
    {
      id: "light-plum",
      name: "light plum",
      hex: "#9d5783",
      rank: 425,
      commonness: 484
    },
    {
      id: "greeny-blue",
      name: "greeny blue",
      hex: "#42b395",
      rank: 426,
      commonness: 485
    },
    {
      id: "dirty-orange",
      name: "dirty orange",
      hex: "#c87606",
      rank: 427,
      commonness: 482
    },
    {
      id: "rust-red",
      name: "rust red",
      hex: "#aa2704",
      rank: 428,
      commonness: 481
    },
    {
      id: "green-yellow",
      name: "green yellow",
      hex: "#c9ff27",
      rank: 429,
      commonness: 179
    },
    {
      id: "baby-poop",
      name: "baby poop",
      hex: "#937c00",
      rank: 430,
      commonness: 489
    },
    {
      id: "slime-green",
      name: "slime green",
      hex: "#99cc04",
      rank: 431,
      commonness: 490
    },
    {
      id: "irish-green",
      name: "irish green",
      hex: "#019529",
      rank: 432,
      commonness: 488
    },
    {
      id: "rouge",
      name: "rouge",
      hex: "#ab1239",
      rank: 433,
      commonness: 492
    },
    {
      id: "light-rose",
      name: "light rose",
      hex: "#ffc5cb",
      rank: 434,
      commonness: 493
    },
    {
      id: "drab",
      name: "drab",
      hex: "#828344",
      rank: 435,
      commonness: 494
    },
    {
      id: "dark-navy-blue",
      name: "dark navy blue",
      hex: "#00022e",
      rank: 436,
      commonness: 495
    },
    {
      id: "light-yellow-green",
      name: "light yellow green",
      hex: "#ccfd7f",
      rank: 437,
      commonness: 496
    },
    {
      id: "pink-purple-2",
      name: "pink/purple",
      hex: "#ef1de7",
      rank: 438,
      commonness: 487
    },
    {
      id: "robin-egg-blue",
      name: "robin egg blue",
      hex: "#8af1fe",
      rank: 439,
      commonness: 418
    },
    {
      id: "light-salmon",
      name: "light salmon",
      hex: "#fea993",
      rank: 440,
      commonness: 499
    },
    {
      id: "purpley-pink",
      name: "purpley pink",
      hex: "#c83cb9",
      rank: 441,
      commonness: 500
    },
    {
      id: "poo",
      name: "poo",
      hex: "#8f7303",
      rank: 442,
      commonness: 501
    },
    {
      id: "berry",
      name: "berry",
      hex: "#990f4b",
      rank: 443,
      commonness: 502
    },
    {
      id: "medium-grey",
      name: "medium grey",
      hex: "#7d7f7c",
      rank: 444,
      commonness: 503
    },
    {
      id: "brown-red",
      name: "brown red",
      hex: "#922b05",
      rank: 445,
      commonness: 504
    },
    {
      id: "blood",
      name: "blood",
      hex: "#770001",
      rank: 446,
      commonness: 505
    },
    {
      id: "soft-purple",
      name: "soft purple",
      hex: "#a66fb5",
      rank: 447,
      commonness: 506
    },
    {
      id: "grey-pink",
      name: "grey pink",
      hex: "#c3909b",
      rank: 448,
      commonness: 507
    },
    {
      id: "cobalt-blue",
      name: "cobalt blue",
      hex: "#030aa7",
      rank: 449,
      commonness: 199
    },
    {
      id: "bluey-green",
      name: "bluey green",
      hex: "#2bb179",
      rank: 450,
      commonness: 508
    },
    {
      id: "dark-indigo",
      name: "dark indigo",
      hex: "#1f0954",
      rank: 451,
      commonness: 510
    },
    {
      id: "warm-grey",
      name: "warm grey",
      hex: "#978a84",
      rank: 452,
      commonness: 511
    },
    {
      id: "sandy-brown",
      name: "sandy brown",
      hex: "#c4a661",
      rank: 453,
      commonness: 512
    },
    {
      id: "cherry",
      name: "cherry",
      hex: "#cf0234",
      rank: 454,
      commonness: 513
    },
    {
      id: "pale-lilac",
      name: "pale lilac",
      hex: "#e4cbff",
      rank: 455,
      commonness: 480
    },
    {
      id: "reddish-purple",
      name: "reddish purple",
      hex: "#910951",
      rank: 456,
      commonness: 206
    },
    {
      id: "deep-violet",
      name: "deep violet",
      hex: "#490648",
      rank: 457,
      commonness: 516
    },
    {
      id: "tree-green",
      name: "tree green",
      hex: "#2a7e19",
      rank: 458,
      commonness: 517
    },
    {
      id: "gunmetal",
      name: "gunmetal",
      hex: "#536267",
      rank: 459,
      commonness: 515
    },
    {
      id: "shamrock-green",
      name: "shamrock green",
      hex: "#02c14d",
      rank: 460,
      commonness: 519
    },
    {
      id: "orangish-brown",
      name: "orangish brown",
      hex: "#b25f03",
      rank: 461,
      commonness: 518
    },
    {
      id: "easter-purple",
      name: "easter purple",
      hex: "#c071fe",
      rank: 462,
      commonness: 497
    },
    {
      id: "ugly-yellow",
      name: "ugly yellow",
      hex: "#d0c101",
      rank: 463,
      commonness: 522
    },
    {
      id: "french-blue",
      name: "french blue",
      hex: "#436bad",
      rank: 464,
      commonness: 523
    },
    {
      id: "jade",
      name: "jade",
      hex: "#1fa774",
      rank: 465,
      commonness: 215
    },
    {
      id: "dusky-purple",
      name: "dusky purple",
      hex: "#895b7b",
      rank: 466,
      commonness: 524
    },
    {
      id: "light-beige",
      name: "light beige",
      hex: "#fffeb6",
      rank: 467,
      commonness: 526
    },
    {
      id: "bottle-green",
      name: "bottle green",
      hex: "#044a05",
      rank: 468,
      commonness: 472
    },
    {
      id: "dusky-blue",
      name: "dusky blue",
      hex: "#475f94",
      rank: 469,
      commonness: 528
    },
    {
      id: "celadon",
      name: "celadon",
      hex: "#befdb7",
      rank: 470,
      commonness: 458
    },
    {
      id: "purply-pink",
      name: "purply pink",
      hex: "#f075e6",
      rank: 471,
      commonness: 530
    },
    {
      id: "off-green",
      name: "off green",
      hex: "#6ba353",
      rank: 472,
      commonness: 531
    },
    {
      id: "ocher",
      name: "ocher",
      hex: "#bf9b0c",
      rank: 473,
      commonness: 532
    },
    {
      id: "milk-chocolate",
      name: "milk chocolate",
      hex: "#7f4e1e",
      rank: 474,
      commonness: 533
    },
    {
      id: "light-peach",
      name: "light peach",
      hex: "#ffd8b1",
      rank: 475,
      commonness: 534
    },
    {
      id: "deep-magenta",
      name: "deep magenta",
      hex: "#a0025c",
      rank: 476,
      commonness: 535
    },
    {
      id: "caramel",
      name: "caramel",
      hex: "#af6f09",
      rank: 477,
      commonness: 536
    },
    {
      id: "greenish-teal",
      name: "greenish teal",
      hex: "#32bf84",
      rank: 478,
      commonness: 537
    },
    {
      id: "lightblue",
      name: "lightblue",
      hex: "#7bc8f6",
      rank: 479,
      commonness: 529
    },
    {
      id: "aubergine",
      name: "aubergine",
      hex: "#3d0734",
      rank: 480,
      commonness: 243
    },
    {
      id: "blueberry",
      name: "blueberry",
      hex: "#464196",
      rank: 481,
      commonness: 540
    },
    {
      id: "brownish-red",
      name: "brownish red",
      hex: "#9e3623",
      rank: 482,
      commonness: 232
    },
    {
      id: "pink-purple",
      name: "pink purple",
      hex: "#db4bda",
      rank: 483,
      commonness: 233
    },
    {
      id: "light-grey-blue",
      name: "light grey blue",
      hex: "#9dbcd4",
      rank: 484,
      commonness: 543
    },
    {
      id: "asparagus",
      name: "asparagus",
      hex: "#77ab56",
      rank: 485,
      commonness: 541
    },
    {
      id: "orange-yellow",
      name: "orange yellow",
      hex: "#ffad01",
      rank: 486,
      commonness: 426
    },
    {
      id: "mossy-green",
      name: "mossy green",
      hex: "#638b27",
      rank: 487,
      commonness: 546
    },
    {
      id: "purple-pink",
      name: "purple pink",
      hex: "#e03fd8",
      rank: 488,
      commonness: 238
    },
    {
      id: "earth",
      name: "earth",
      hex: "#a2653e",
      rank: 489,
      commonness: 547
    },
    {
      id: "deep-orange",
      name: "deep orange",
      hex: "#dc4d01",
      rank: 490,
      commonness: 548
    },
    {
      id: "reddish-orange",
      name: "reddish orange",
      hex: "#f8481c",
      rank: 491,
      commonness: 241
    },
    {
      id: "pale-aqua",
      name: "pale aqua",
      hex: "#b8ffeb",
      rank: 492,
      commonness: 549
    },
    {
      id: "stone",
      name: "stone",
      hex: "#ada587",
      rank: 493,
      commonness: 551
    },
    {
      id: "rose-red",
      name: "rose red",
      hex: "#be013c",
      rank: 494,
      commonness: 550
    },
    {
      id: "rusty-orange",
      name: "rusty orange",
      hex: "#cd5909",
      rank: 495,
      commonness: 552
    },
    {
      id: "chestnut",
      name: "chestnut",
      hex: "#742802",
      rank: 496,
      commonness: 555
    },
    {
      id: "blue-green-2",
      name: "blue/green",
      hex: "#0f9b8e",
      rank: 497,
      commonness: 556
    },
    {
      id: "pastel-pink",
      name: "pastel pink",
      hex: "#ffbacd",
      rank: 498,
      commonness: 248
    },
    {
      id: "amethyst",
      name: "amethyst",
      hex: "#9b5fc0",
      rank: 499,
      commonness: 557
    },
    {
      id: "very-light-blue",
      name: "very light blue",
      hex: "#d5ffff",
      rank: 500,
      commonness: 250
    },
    {
      id: "dark-mint-green",
      name: "dark mint green",
      hex: "#20c073",
      rank: 501,
      commonness: 558
    },
    {
      id: "cadet-blue",
      name: "cadet blue",
      hex: "#4e7496",
      rank: 502,
      commonness: 252
    },
    {
      id: "ice-blue",
      name: "ice blue",
      hex: "#d7fffe",
      rank: 503,
      commonness: 253
    },
    {
      id: "buff",
      name: "buff",
      hex: "#fef69e",
      rank: 504,
      commonness: 562
    },
    {
      id: "muddy-brown",
      name: "muddy brown",
      hex: "#886806",
      rank: 505,
      commonness: 564
    },
    {
      id: "sea",
      name: "sea",
      hex: "#3c9992",
      rank: 506,
      commonness: 565
    },
    {
      id: "tomato",
      name: "tomato",
      hex: "#ef4026",
      rank: 507,
      commonness: 566
    },
    {
      id: "carnation-pink",
      name: "carnation pink",
      hex: "#ff7fa7",
      rank: 508,
      commonness: 567
    },
    {
      id: "fawn",
      name: "fawn",
      hex: "#cfaf7b",
      rank: 509,
      commonness: 561
    },
    {
      id: "muted-blue",
      name: "muted blue",
      hex: "#3b719f",
      rank: 510,
      commonness: 560
    },
    {
      id: "greyish",
      name: "greyish",
      hex: "#a8a495",
      rank: 511,
      commonness: 570
    },
    {
      id: "mid-green",
      name: "mid green",
      hex: "#50a747",
      rank: 512,
      commonness: 571
    },
    {
      id: "sick-green",
      name: "sick green",
      hex: "#9db92c",
      rank: 513,
      commonness: 554
    },
    {
      id: "turquoise-green",
      name: "turquoise green",
      hex: "#04f489",
      rank: 514,
      commonness: 563
    },
    {
      id: "sandy",
      name: "sandy",
      hex: "#f1da7a",
      rank: 515,
      commonness: 574
    },
    {
      id: "ugly-pink",
      name: "ugly pink",
      hex: "#cd7584",
      rank: 516,
      commonness: 575
    },
    {
      id: "turquoise-blue",
      name: "turquoise blue",
      hex: "#06b1c4",
      rank: 517,
      commonness: 576
    },
    {
      id: "bright-yellow",
      name: "bright yellow",
      hex: "#fffd01",
      rank: 518,
      commonness: 268
    },
    {
      id: "golden-yellow",
      name: "golden yellow",
      hex: "#fec615",
      rank: 519,
      commonness: 269
    },
    {
      id: "light-burgundy",
      name: "light burgundy",
      hex: "#a8415b",
      rank: 520,
      commonness: 577
    },
    {
      id: "electric-green",
      name: "electric green",
      hex: "#21fc0d",
      rank: 521,
      commonness: 271
    },
    {
      id: "light-urple",
      name: "light urple",
      hex: "#b36ff6",
      rank: 522,
      commonness: 580
    },
    {
      id: "dark-mint",
      name: "dark mint",
      hex: "#48c072",
      rank: 523,
      commonness: 579
    },
    {
      id: "teal-green",
      name: "teal green",
      hex: "#25a36f",
      rank: 524,
      commonness: 274
    },
    {
      id: "pear",
      name: "pear",
      hex: "#cbf85f",
      rank: 525,
      commonness: 583
    },
    {
      id: "dark-plum",
      name: "dark plum",
      hex: "#3f012c",
      rank: 526,
      commonness: 584
    },
    {
      id: "terra-cotta",
      name: "terra cotta",
      hex: "#c9643b",
      rank: 527,
      commonness: 277
    },
    {
      id: "perrywinkle",
      name: "perrywinkle",
      hex: "#8f8ce7",
      rank: 528,
      commonness: 586
    },
    {
      id: "pastel-orange",
      name: "pastel orange",
      hex: "#ff964f",
      rank: 529,
      commonness: 588
    },
    {
      id: "iris",
      name: "iris",
      hex: "#6258c4",
      rank: 530,
      commonness: 589
    },
    {
      id: "ultramarine-blue",
      name: "ultramarine blue",
      hex: "#1805db",
      rank: 531,
      commonness: 590
    },
    {
      id: "navy-green",
      name: "navy green",
      hex: "#35530a",
      rank: 532,
      commonness: 591
    },
    {
      id: "seaweed",
      name: "seaweed",
      hex: "#18d17b",
      rank: 533,
      commonness: 592
    },
    {
      id: "kiwi",
      name: "kiwi",
      hex: "#9cef43",
      rank: 534,
      commonness: 593
    },
    {
      id: "pea",
      name: "pea",
      hex: "#a4bf20",
      rank: 535,
      commonness: 553
    },
    {
      id: "ultramarine",
      name: "ultramarine",
      hex: "#2000b1",
      rank: 536,
      commonness: 286
    },
    {
      id: "bright-light-green",
      name: "bright light green",
      hex: "#2dfe54",
      rank: 537,
      commonness: 595
    },
    {
      id: "forest",
      name: "forest",
      hex: "#0b5509",
      rank: 538,
      commonness: 288
    },
    {
      id: "frog-green",
      name: "frog green",
      hex: "#58bc08",
      rank: 539,
      commonness: 597
    },
    {
      id: "brownish-yellow",
      name: "brownish yellow",
      hex: "#c9b003",
      rank: 540,
      commonness: 290
    },
    {
      id: "dusk",
      name: "dusk",
      hex: "#4e5481",
      rank: 541,
      commonness: 599
    },
    {
      id: "leafy-green",
      name: "leafy green",
      hex: "#51b73b",
      rank: 542,
      commonness: 601
    },
    {
      id: "cool-blue",
      name: "cool blue",
      hex: "#4984b8",
      rank: 543,
      commonness: 602
    },
    {
      id: "almost-black",
      name: "almost black",
      hex: "#070d0d",
      rank: 544,
      commonness: 603
    },
    {
      id: "vivid-green",
      name: "vivid green",
      hex: "#2fef10",
      rank: 545,
      commonness: 596
    },
    {
      id: "heliotrope",
      name: "heliotrope",
      hex: "#d94ff5",
      rank: 546,
      commonness: 605
    },
    {
      id: "green-apple",
      name: "green apple",
      hex: "#5edc1f",
      rank: 547,
      commonness: 606
    },
    {
      id: "mustard-brown",
      name: "mustard brown",
      hex: "#ac7e04",
      rank: 548,
      commonness: 600
    },
    {
      id: "apple",
      name: "apple",
      hex: "#6ecb3c",
      rank: 549,
      commonness: 608
    },
    {
      id: "purpleish-pink",
      name: "purpleish pink",
      hex: "#df4ec8",
      rank: 550,
      commonness: 609
    },
    {
      id: "night-blue",
      name: "night blue",
      hex: "#040348",
      rank: 551,
      commonness: 610
    },
    {
      id: "merlot",
      name: "merlot",
      hex: "#730039",
      rank: 552,
      commonness: 611
    },
    {
      id: "lightgreen",
      name: "lightgreen",
      hex: "#76ff7b",
      rank: 553,
      commonness: 612
    },
    {
      id: "tomato-red",
      name: "tomato red",
      hex: "#ec2d01",
      rank: 554,
      commonness: 613
    },
    {
      id: "dull-brown",
      name: "dull brown",
      hex: "#876e4b",
      rank: 555,
      commonness: 598
    },
    {
      id: "tealish",
      name: "tealish",
      hex: "#24bca8",
      rank: 556,
      commonness: 585
    },
    {
      id: "pale-cyan",
      name: "pale cyan",
      hex: "#b7fffa",
      rank: 557,
      commonness: 615
    },
    {
      id: "purplish-brown",
      name: "purplish brown",
      hex: "#6b4247",
      rank: 558,
      commonness: 617
    },
    {
      id: "bubblegum",
      name: "bubblegum",
      hex: "#ff6cb5",
      rank: 559,
      commonness: 618
    },
    {
      id: "acid-green",
      name: "acid green",
      hex: "#8ffe09",
      rank: 560,
      commonness: 310
    },
    {
      id: "shamrock",
      name: "shamrock",
      hex: "#01b44c",
      rank: 561,
      commonness: 619
    },
    {
      id: "mango",
      name: "mango",
      hex: "#ffa62b",
      rank: 562,
      commonness: 620
    },
    {
      id: "greenish-tan",
      name: "greenish tan",
      hex: "#bccb7a",
      rank: 563,
      commonness: 578
    },
    {
      id: "grape-purple",
      name: "grape purple",
      hex: "#5d1451",
      rank: 564,
      commonness: 623
    },
    {
      id: "faded-orange",
      name: "faded orange",
      hex: "#f0944d",
      rank: 565,
      commonness: 624
    },
    {
      id: "avocado-green",
      name: "avocado green",
      hex: "#87a922",
      rank: 566,
      commonness: 625
    },
    {
      id: "fluorescent-green",
      name: "fluorescent green",
      hex: "#08ff08",
      rank: 567,
      commonness: 317
    },
    {
      id: "peacock-blue",
      name: "peacock blue",
      hex: "#016795",
      rank: 568,
      commonness: 626
    },
    {
      id: "weird-green",
      name: "weird green",
      hex: "#3ae57f",
      rank: 569,
      commonness: 627
    },
    {
      id: "fern-green",
      name: "fern green",
      hex: "#548d44",
      rank: 570,
      commonness: 629
    },
    {
      id: "dirty-blue",
      name: "dirty blue",
      hex: "#3f829d",
      rank: 571,
      commonness: 630
    },
    {
      id: "marigold",
      name: "marigold",
      hex: "#fcc006",
      rank: 572,
      commonness: 322
    },
    {
      id: "heather",
      name: "heather",
      hex: "#a484ac",
      rank: 573,
      commonness: 632
    },
    {
      id: "deep-teal",
      name: "deep teal",
      hex: "#00555a",
      rank: 574,
      commonness: 633
    },
    {
      id: "russet",
      name: "russet",
      hex: "#a13905",
      rank: 575,
      commonness: 373
    },
    {
      id: "light-blue-green",
      name: "light blue green",
      hex: "#7efbb3",
      rank: 576,
      commonness: 326
    },
    {
      id: "baby-poo",
      name: "baby poo",
      hex: "#ab9004",
      rank: 577,
      commonness: 635
    },
    {
      id: "light-sage",
      name: "light sage",
      hex: "#bcecac",
      rank: 578,
      commonness: 637
    },
    {
      id: "light-aquamarine",
      name: "light aquamarine",
      hex: "#7bfdc7",
      rank: 579,
      commonness: 638
    },
    {
      id: "drab-green",
      name: "drab green",
      hex: "#749551",
      rank: 580,
      commonness: 330
    },
    {
      id: "muted-purple",
      name: "muted purple",
      hex: "#805b87",
      rank: 581,
      commonness: 572
    },
    {
      id: "vibrant-green",
      name: "vibrant green",
      hex: "#0add08",
      rank: 582,
      commonness: 641
    },
    {
      id: "snot",
      name: "snot",
      hex: "#acbb0d",
      rank: 583,
      commonness: 498
    },
    {
      id: "pale-lime",
      name: "pale lime",
      hex: "#befd73",
      rank: 584,
      commonness: 538
    },
    {
      id: "bile",
      name: "bile",
      hex: "#b5c306",
      rank: 585,
      commonness: 644
    },
    {
      id: "viridian",
      name: "viridian",
      hex: "#1e9167",
      rank: 586,
      commonness: 645
    },
    {
      id: "very-light-pink",
      name: "very light pink",
      hex: "#fff4f2",
      rank: 587,
      commonness: 646
    },
    {
      id: "puke-brown",
      name: "puke brown",
      hex: "#947706",
      rank: 588,
      commonness: 647
    },
    {
      id: "medium-pink",
      name: "medium pink",
      hex: "#f36196",
      rank: 589,
      commonness: 648
    },
    {
      id: "bright-turquoise",
      name: "bright turquoise",
      hex: "#0ffef9",
      rank: 590,
      commonness: 378
    },
    {
      id: "key-lime",
      name: "key lime",
      hex: "#aeff6e",
      rank: 591,
      commonness: 614
    },
    {
      id: "easter-green",
      name: "easter green",
      hex: "#8cfd7e",
      rank: 592,
      commonness: 382
    },
    {
      id: "light-periwinkle",
      name: "light periwinkle",
      hex: "#c1c6fc",
      rank: 593,
      commonness: 652
    },
    {
      id: "lemon-green",
      name: "lemon green",
      hex: "#adf802",
      rank: 594,
      commonness: 653
    },
    {
      id: "lemon-yellow",
      name: "lemon yellow",
      hex: "#fdff38",
      rank: 595,
      commonness: 345
    },
    {
      id: "dark-grey-blue",
      name: "dark grey blue",
      hex: "#29465b",
      rank: 596,
      commonness: 655
    },
    {
      id: "bright-olive",
      name: "bright olive",
      hex: "#9cbb04",
      rank: 597,
      commonness: 656
    },
    {
      id: "turtle-green",
      name: "turtle green",
      hex: "#75b84f",
      rank: 598,
      commonness: 657
    },
    {
      id: "very-dark-green",
      name: "very dark green",
      hex: "#062e03",
      rank: 599,
      commonness: 349
    },
    {
      id: "pale-sky-blue",
      name: "pale sky blue",
      hex: "#bdf6fe",
      rank: 600,
      commonness: 658
    },
    {
      id: "shit",
      name: "shit",
      hex: "#7f5f00",
      rank: 601,
      commonness: 351
    },
    {
      id: "dark-aquamarine",
      name: "dark aquamarine",
      hex: "#017371",
      rank: 602,
      commonness: 661
    },
    {
      id: "brownish-pink",
      name: "brownish pink",
      hex: "#c27e79",
      rank: 603,
      commonness: 662
    },
    {
      id: "baby-shit-green",
      name: "baby shit green",
      hex: "#889717",
      rank: 604,
      commonness: 663
    },
    {
      id: "purpley",
      name: "purpley",
      hex: "#8756e4",
      rank: 605,
      commonness: 664
    },
    {
      id: "greyblue",
      name: "greyblue",
      hex: "#77a1b5",
      rank: 606,
      commonness: 665
    },
    {
      id: "hot-magenta",
      name: "hot magenta",
      hex: "#f504c9",
      rank: 607,
      commonness: 666
    },
    {
      id: "diarrhea",
      name: "diarrhea",
      hex: "#9f8303",
      rank: 608,
      commonness: 660
    },
    {
      id: "pale",
      name: "pale",
      hex: "#fff9d0",
      rank: 609,
      commonness: 668
    },
    {
      id: "cool-green",
      name: "cool green",
      hex: "#33b864",
      rank: 610,
      commonness: 669
    },
    {
      id: "blue-grey-2",
      name: "blue/grey",
      hex: "#758da3",
      rank: 611,
      commonness: 667
    },
    {
      id: "eggshell-blue",
      name: "eggshell blue",
      hex: "#c4fff7",
      rank: 612,
      commonness: 671
    },
    {
      id: "dark-gold",
      name: "dark gold",
      hex: "#b59410",
      rank: 613,
      commonness: 363
    },
    {
      id: "sandy-yellow",
      name: "sandy yellow",
      hex: "#fdee73",
      rank: 614,
      commonness: 670
    },
    {
      id: "vibrant-purple",
      name: "vibrant purple",
      hex: "#ad03de",
      rank: 615,
      commonness: 674
    },
    {
      id: "brown-grey",
      name: "brown grey",
      hex: "#8d8468",
      rank: 616,
      commonness: 675
    },
    {
      id: "shocking-pink",
      name: "shocking pink",
      hex: "#fe02a2",
      rank: 617,
      commonness: 461
    },
    {
      id: "lipstick-red",
      name: "lipstick red",
      hex: "#c0022f",
      rank: 618,
      commonness: 677
    },
    {
      id: "pinkish-orange",
      name: "pinkish orange",
      hex: "#ff724c",
      rank: 619,
      commonness: 582
    },
    {
      id: "bright-violet",
      name: "bright violet",
      hex: "#ad0afd",
      rank: 620,
      commonness: 370
    },
    {
      id: "wisteria",
      name: "wisteria",
      hex: "#a87dc2",
      rank: 621,
      commonness: 679
    },
    {
      id: "purple-brown",
      name: "purple brown",
      hex: "#673a3f",
      rank: 622,
      commonness: 680
    },
    {
      id: "purple-pink-2",
      name: "purple/pink",
      hex: "#d725de",
      rank: 623,
      commonness: 682
    },
    {
      id: "brown-yellow",
      name: "brown yellow",
      hex: "#b29705",
      rank: 624,
      commonness: 681
    },
    {
      id: "purply-blue",
      name: "purply blue",
      hex: "#661aee",
      rank: 625,
      commonness: 388
    },
    {
      id: "dusty-red",
      name: "dusty red",
      hex: "#b9484e",
      rank: 626,
      commonness: 685
    },
    {
      id: "red-pink",
      name: "red pink",
      hex: "#fa2a55",
      rank: 627,
      commonness: 377
    },
    {
      id: "deep-rose",
      name: "deep rose",
      hex: "#c74767",
      rank: 628,
      commonness: 686
    },
    {
      id: "muddy-yellow",
      name: "muddy yellow",
      hex: "#bfac05",
      rank: 629,
      commonness: 688
    },
    {
      id: "carnation",
      name: "carnation",
      hex: "#fd798f",
      rank: 630,
      commonness: 689
    },
    {
      id: "yellowy-brown",
      name: "yellowy brown",
      hex: "#ae8b0c",
      rank: 631,
      commonness: 690
    },
    {
      id: "violet-red",
      name: "violet red",
      hex: "#a50055",
      rank: 632,
      commonness: 691
    },
    {
      id: "amber",
      name: "amber",
      hex: "#feb308",
      rank: 633,
      commonness: 383
    },
    {
      id: "dark-seafoam-green",
      name: "dark seafoam green",
      hex: "#3eaf76",
      rank: 634,
      commonness: 687
    },
    {
      id: "twilight-blue",
      name: "twilight blue",
      hex: "#0a437a",
      rank: 635,
      commonness: 692
    },
    {
      id: "brick-orange",
      name: "brick orange",
      hex: "#c14a09",
      rank: 636,
      commonness: 695
    },
    {
      id: "velvet",
      name: "velvet",
      hex: "#750851",
      rank: 637,
      commonness: 696
    },
    {
      id: "ugly-purple",
      name: "ugly purple",
      hex: "#a442a0",
      rank: 638,
      commonness: 649
    },
    {
      id: "light-mustard",
      name: "light mustard",
      hex: "#f7d560",
      rank: 639,
      commonness: 659
    },
    {
      id: "light-grass-green",
      name: "light grass green",
      hex: "#9af764",
      rank: 640,
      commonness: 699
    },
    {
      id: "lavender-blue",
      name: "lavender blue",
      hex: "#8b88f8",
      rank: 641,
      commonness: 700
    },
    {
      id: "rusty-red",
      name: "rusty red",
      hex: "#af2f0d",
      rank: 642,
      commonness: 701
    },
    {
      id: "lightish-purple",
      name: "lightish purple",
      hex: "#a552e6",
      rank: 643,
      commonness: 702
    },
    {
      id: "celery",
      name: "celery",
      hex: "#c1fd95",
      rank: 644,
      commonness: 454
    },
    {
      id: "light-blue-grey",
      name: "light blue grey",
      hex: "#b7c9e2",
      rank: 645,
      commonness: 704
    },
    {
      id: "purpleish",
      name: "purpleish",
      hex: "#98568d",
      rank: 646,
      commonness: 396
    },
    {
      id: "ecru",
      name: "ecru",
      hex: "#feffca",
      rank: 647,
      commonness: 397
    },
    {
      id: "orangish",
      name: "orangish",
      hex: "#fc824a",
      rank: 648,
      commonness: 706
    },
    {
      id: "pale-olive-green",
      name: "pale olive green",
      hex: "#b1d27b",
      rank: 649,
      commonness: 707
    },
    {
      id: "dusty-orange",
      name: "dusty orange",
      hex: "#f0833a",
      rank: 650,
      commonness: 709
    },
    {
      id: "leaf",
      name: "leaf",
      hex: "#71aa34",
      rank: 651,
      commonness: 705
    },
    {
      id: "royal",
      name: "royal",
      hex: "#0c1793",
      rank: 652,
      commonness: 711
    },
    {
      id: "canary-yellow",
      name: "canary yellow",
      hex: "#fffe40",
      rank: 653,
      commonness: 403
    },
    {
      id: "petrol",
      name: "petrol",
      hex: "#005f6a",
      rank: 654,
      commonness: 712
    },
    {
      id: "greenish-cyan",
      name: "greenish cyan",
      hex: "#2afeb7",
      rank: 655,
      commonness: 713
    },
    {
      id: "off-yellow",
      name: "off yellow",
      hex: "#f1f33f",
      rank: 656,
      commonness: 708
    },
    {
      id: "bluegrey",
      name: "bluegrey",
      hex: "#85a3b2",
      rank: 657,
      commonness: 716
    },
    {
      id: "warm-brown",
      name: "warm brown",
      hex: "#964e02",
      rank: 658,
      commonness: 717
    },
    {
      id: "twilight",
      name: "twilight",
      hex: "#4e518b",
      rank: 659,
      commonness: 718
    },
    {
      id: "light-mint-green",
      name: "light mint green",
      hex: "#a6fbb2",
      rank: 660,
      commonness: 698
    },
    {
      id: "water-blue",
      name: "water blue",
      hex: "#0e87cc",
      rank: 661,
      commonness: 676
    },
    {
      id: "dark-sand",
      name: "dark sand",
      hex: "#a88f59",
      rank: 662,
      commonness: 721
    },
    {
      id: "vibrant-blue",
      name: "vibrant blue",
      hex: "#0339f8",
      rank: 663,
      commonness: 722
    },
    {
      id: "orangey-brown",
      name: "orangey brown",
      hex: "#b16002",
      rank: 664,
      commonness: 414
    },
    {
      id: "putty",
      name: "putty",
      hex: "#beae8a",
      rank: 665,
      commonness: 723
    },
    {
      id: "lawn-green",
      name: "lawn green",
      hex: "#4da409",
      rank: 666,
      commonness: 724
    },
    {
      id: "blush-pink",
      name: "blush pink",
      hex: "#fe828c",
      rank: 667,
      commonness: 726
    },
    {
      id: "reddy-brown",
      name: "reddy brown",
      hex: "#6e1005",
      rank: 668,
      commonness: 727
    },
    {
      id: "darkish-red",
      name: "darkish red",
      hex: "#a90308",
      rank: 669,
      commonness: 728
    },
    {
      id: "camouflage-green",
      name: "camouflage green",
      hex: "#4b6113",
      rank: 670,
      commonness: 725
    },
    {
      id: "dark-coral",
      name: "dark coral",
      hex: "#cf524e",
      rank: 671,
      commonness: 730
    },
    {
      id: "british-racing-green",
      name: "british racing green",
      hex: "#05480d",
      rank: 672,
      commonness: 422
    },
    {
      id: "piss-yellow",
      name: "piss yellow",
      hex: "#ddd618",
      rank: 673,
      commonness: 732
    },
    {
      id: "pastel-red",
      name: "pastel red",
      hex: "#db5856",
      rank: 674,
      commonness: 733
    },
    {
      id: "algae-green",
      name: "algae green",
      hex: "#21c36f",
      rank: 675,
      commonness: 729
    },
    {
      id: "dark",
      name: "dark",
      hex: "#1b2431",
      rank: 676,
      commonness: 735
    },
    {
      id: "ruby",
      name: "ruby",
      hex: "#ca0147",
      rank: 677,
      commonness: 736
    },
    {
      id: "light-lime",
      name: "light lime",
      hex: "#aefd6c",
      rank: 678,
      commonness: 428
    },
    {
      id: "poop-green",
      name: "poop green",
      hex: "#6f7c00",
      rank: 679,
      commonness: 737
    },
    {
      id: "dandelion",
      name: "dandelion",
      hex: "#fedf08",
      rank: 680,
      commonness: 739
    },
    {
      id: "claret",
      name: "claret",
      hex: "#680018",
      rank: 681,
      commonness: 740
    },
    {
      id: "pale-mauve",
      name: "pale mauve",
      hex: "#fed0fc",
      rank: 682,
      commonness: 741
    },
    {
      id: "lipstick",
      name: "lipstick",
      hex: "#d5174e",
      rank: 683,
      commonness: 742
    },
    {
      id: "rosa",
      name: "rosa",
      hex: "#fe86a4",
      rank: 684,
      commonness: 743
    },
    {
      id: "darkblue",
      name: "darkblue",
      hex: "#030764",
      rank: 685,
      commonness: 744
    },
    {
      id: "very-dark-blue",
      name: "very dark blue",
      hex: "#000133",
      rank: 686,
      commonness: 436
    },
    {
      id: "shit-green",
      name: "shit green",
      hex: "#758000",
      rank: 687,
      commonness: 746
    },
    {
      id: "red-wine",
      name: "red wine",
      hex: "#8c0034",
      rank: 688,
      commonness: 747
    },
    {
      id: "poop-brown",
      name: "poop brown",
      hex: "#7a5901",
      rank: 689,
      commonness: 439
    },
    {
      id: "mud-green",
      name: "mud green",
      hex: "#606602",
      rank: 690,
      commonness: 749
    },
    {
      id: "light-greenish-blue",
      name: "light greenish blue",
      hex: "#63f7b4",
      rank: 691,
      commonness: 750
    },
    {
      id: "dull-teal",
      name: "dull teal",
      hex: "#5f9e8f",
      rank: 692,
      commonness: 751
    },
    {
      id: "deep-lavender",
      name: "deep lavender",
      hex: "#8d5eb7",
      rank: 693,
      commonness: 752
    },
    {
      id: "vivid-blue",
      name: "vivid blue",
      hex: "#152eff",
      rank: 694,
      commonness: 753
    },
    {
      id: "raw-umber",
      name: "raw umber",
      hex: "#a75e09",
      rank: 695,
      commonness: 754
    },
    {
      id: "light-mint",
      name: "light mint",
      hex: "#b6ffbb",
      rank: 696,
      commonness: 755
    },
    {
      id: "light-light-blue",
      name: "light light blue",
      hex: "#cafffb",
      rank: 697,
      commonness: 756
    },
    {
      id: "pinky",
      name: "pinky",
      hex: "#fc86aa",
      rank: 698,
      commonness: 748
    },
    {
      id: "greeny-grey",
      name: "greeny grey",
      hex: "#7ea07a",
      rank: 699,
      commonness: 758
    },
    {
      id: "bluey-grey",
      name: "bluey grey",
      hex: "#89a0b0",
      rank: 700,
      commonness: 759
    },
    {
      id: "algae",
      name: "algae",
      hex: "#54ac68",
      rank: 701,
      commonness: 760
    },
    {
      id: "strawberry",
      name: "strawberry",
      hex: "#fb2943",
      rank: 702,
      commonness: 452
    },
    {
      id: "pale-salmon",
      name: "pale salmon",
      hex: "#ffb19a",
      rank: 703,
      commonness: 762
    },
    {
      id: "metallic-blue",
      name: "metallic blue",
      hex: "#4f738e",
      rank: 704,
      commonness: 763
    },
    {
      id: "sap-green",
      name: "sap green",
      hex: "#5c8b15",
      rank: 705,
      commonness: 761
    },
    {
      id: "ice",
      name: "ice",
      hex: "#d6fffa",
      rank: 706,
      commonness: 764
    },
    {
      id: "dodger-blue",
      name: "dodger blue",
      hex: "#3e82fc",
      rank: 707,
      commonness: 766
    },
    {
      id: "warm-pink",
      name: "warm pink",
      hex: "#fb5581",
      rank: 708,
      commonness: 767
    },
    {
      id: "bright-cyan",
      name: "bright cyan",
      hex: "#41fdfe",
      rank: 709,
      commonness: 731
    },
    {
      id: "flat-green",
      name: "flat green",
      hex: "#699d4c",
      rank: 710,
      commonness: 769
    },
    {
      id: "dark-blue-grey",
      name: "dark blue grey",
      hex: "#1f3b4d",
      rank: 711,
      commonness: 770
    },
    {
      id: "clay-brown",
      name: "clay brown",
      hex: "#b2713d",
      rank: 712,
      commonness: 771
    },
    {
      id: "sand-yellow",
      name: "sand yellow",
      hex: "#fce166",
      rank: 713,
      commonness: 772
    },
    {
      id: "grapefruit",
      name: "grapefruit",
      hex: "#fd5956",
      rank: 714,
      commonness: 773
    },
    {
      id: "blood-orange",
      name: "blood orange",
      hex: "#fe4b03",
      rank: 715,
      commonness: 774
    },
    {
      id: "purple-blue-2",
      name: "purple/blue",
      hex: "#5d21d0",
      rank: 716,
      commonness: 720
    },
    {
      id: "old-pink",
      name: "old pink",
      hex: "#c77986",
      rank: 717,
      commonness: 776
    },
    {
      id: "yellow-ochre",
      name: "yellow ochre",
      hex: "#cb9d06",
      rank: 718,
      commonness: 468
    },
    {
      id: "fire-engine-red",
      name: "fire engine red",
      hex: "#fe0002",
      rank: 719,
      commonness: 469
    },
    {
      id: "plum-purple",
      name: "plum purple",
      hex: "#4e0550",
      rank: 720,
      commonness: 779
    },
    {
      id: "pale-peach",
      name: "pale peach",
      hex: "#ffe5ad",
      rank: 721,
      commonness: 780
    },
    {
      id: "dark-yellow-green",
      name: "dark yellow green",
      hex: "#728f02",
      rank: 722,
      commonness: 781
    },
    {
      id: "carmine",
      name: "carmine",
      hex: "#9d0216",
      rank: 723,
      commonness: 782
    },
    {
      id: "deep-sea-blue",
      name: "deep sea blue",
      hex: "#015482",
      rank: 724,
      commonness: 783
    },
    {
      id: "murky-green",
      name: "murky green",
      hex: "#6c7a0e",
      rank: 725,
      commonness: 475
    },
    {
      id: "warm-blue",
      name: "warm blue",
      hex: "#4b57db",
      rank: 726,
      commonness: 785
    },
    {
      id: "light-khaki",
      name: "light khaki",
      hex: "#e6f2a2",
      rank: 727,
      commonness: 786
    },
    {
      id: "dark-hot-pink",
      name: "dark hot pink",
      hex: "#d90166",
      rank: 728,
      commonness: 784
    },
    {
      id: "orangey-red",
      name: "orangey red",
      hex: "#fa4224",
      rank: 729,
      commonness: 479
    },
    {
      id: "dirty-purple",
      name: "dirty purple",
      hex: "#734a65",
      rank: 730,
      commonness: 789
    },
    {
      id: "neon-red",
      name: "neon red",
      hex: "#ff073a",
      rank: 731,
      commonness: 777
    },
    {
      id: "mushroom",
      name: "mushroom",
      hex: "#ba9e88",
      rank: 732,
      commonness: 791
    },
    {
      id: "rich-blue",
      name: "rich blue",
      hex: "#021bf9",
      rank: 733,
      commonness: 790
    },
    {
      id: "dark-slate-blue",
      name: "dark slate blue",
      hex: "#214761",
      rank: 734,
      commonness: 793
    },
    {
      id: "dark-sage",
      name: "dark sage",
      hex: "#598556",
      rank: 735,
      commonness: 794
    },
    {
      id: "dark-navy",
      name: "dark navy",
      hex: "#000435",
      rank: 736,
      commonness: 486
    },
    {
      id: "true-green",
      name: "true green",
      hex: "#089404",
      rank: 737,
      commonness: 796
    },
    {
      id: "darkish-purple",
      name: "darkish purple",
      hex: "#751973",
      rank: 738,
      commonness: 797
    },
    {
      id: "dark-taupe",
      name: "dark taupe",
      hex: "#7f684e",
      rank: 739,
      commonness: 798
    },
    {
      id: "cool-grey",
      name: "cool grey",
      hex: "#95a3a6",
      rank: 740,
      commonness: 799
    },
    {
      id: "purplish-red",
      name: "purplish red",
      hex: "#b0054b",
      rank: 741,
      commonness: 491
    },
    {
      id: "coral-pink",
      name: "coral pink",
      hex: "#ff6163",
      rank: 742,
      commonness: 795
    },
    {
      id: "muted-pink",
      name: "muted pink",
      hex: "#d1768f",
      rank: 743,
      commonness: 802
    },
    {
      id: "hazel",
      name: "hazel",
      hex: "#8e7618",
      rank: 744,
      commonness: 803
    },
    {
      id: "greenblue",
      name: "greenblue",
      hex: "#23c48b",
      rank: 745,
      commonness: 788
    },
    {
      id: "vivid-purple",
      name: "vivid purple",
      hex: "#9900fa",
      rank: 746,
      commonness: 805
    },
    {
      id: "flat-blue",
      name: "flat blue",
      hex: "#3c73a8",
      rank: 747,
      commonness: 792
    },
    {
      id: "leather",
      name: "leather",
      hex: "#ac7434",
      rank: 748,
      commonness: 807
    },
    {
      id: "green-blue-2",
      name: "green/blue",
      hex: "#01c08d",
      rank: 749,
      commonness: 808
    },
    {
      id: "sunflower-yellow",
      name: "sunflower yellow",
      hex: "#ffda03",
      rank: 750,
      commonness: 809
    },
    {
      id: "rich-purple",
      name: "rich purple",
      hex: "#720058",
      rank: 751,
      commonness: 810
    },
    {
      id: "pale-magenta",
      name: "pale magenta",
      hex: "#d767ad",
      rank: 752,
      commonness: 811
    },
    {
      id: "canary",
      name: "canary",
      hex: "#fdff63",
      rank: 753,
      commonness: 800
    },
    {
      id: "indigo-blue",
      name: "indigo blue",
      hex: "#3a18b1",
      rank: 754,
      commonness: 813
    },
    {
      id: "booger-green",
      name: "booger green",
      hex: "#96b403",
      rank: 755,
      commonness: 801
    },
    {
      id: "icky-green",
      name: "icky green",
      hex: "#8fae22",
      rank: 756,
      commonness: 787
    },
    {
      id: "midnight-purple",
      name: "midnight purple",
      hex: "#280137",
      rank: 757,
      commonness: 581
    },
    {
      id: "light-yellowish-green",
      name: "light yellowish green",
      hex: "#c2ff89",
      rank: 758,
      commonness: 812
    },
    {
      id: "midnight",
      name: "midnight",
      hex: "#03012d",
      rank: 759,
      commonness: 509
    },
    {
      id: "topaz",
      name: "topaz",
      hex: "#13bbaf",
      rank: 760,
      commonness: 818
    },
    {
      id: "seafoam-blue",
      name: "seafoam blue",
      hex: "#78d1b6",
      rank: 761,
      commonness: 819
    },
    {
      id: "grey-green-2",
      name: "grey/green",
      hex: "#86a17d",
      rank: 762,
      commonness: 821
    },
    {
      id: "light-gold",
      name: "light gold",
      hex: "#fddc5c",
      rank: 763,
      commonness: 820
    },
    {
      id: "blue-purple-2",
      name: "blue/purple",
      hex: "#5a06ef",
      rank: 764,
      commonness: 514
    },
    {
      id: "clear-blue",
      name: "clear blue",
      hex: "#247afd",
      rank: 765,
      commonness: 824
    },
    {
      id: "ugly-blue",
      name: "ugly blue",
      hex: "#31668a",
      rank: 766,
      commonness: 825
    },
    {
      id: "foam-green",
      name: "foam green",
      hex: "#90fda9",
      rank: 767,
      commonness: 822
    },
    {
      id: "very-dark-brown",
      name: "very dark brown",
      hex: "#1d0200",
      rank: 768,
      commonness: 827
    },
    {
      id: "straw",
      name: "straw",
      hex: "#fcf679",
      rank: 769,
      commonness: 828
    },
    {
      id: "orangish-red",
      name: "orangish red",
      hex: "#f43605",
      rank: 770,
      commonness: 520
    },
    {
      id: "greeny-yellow",
      name: "greeny yellow",
      hex: "#c6f808",
      rank: 771,
      commonness: 521
    },
    {
      id: "greyish-teal",
      name: "greyish teal",
      hex: "#719f91",
      rank: 772,
      commonness: 831
    },
    {
      id: "sapphire",
      name: "sapphire",
      hex: "#2138ab",
      rank: 773,
      commonness: 832
    },
    {
      id: "nice-blue",
      name: "nice blue",
      hex: "#107ab0",
      rank: 774,
      commonness: 833
    },
    {
      id: "butter-yellow",
      name: "butter yellow",
      hex: "#fffd74",
      rank: 775,
      commonness: 525
    },
    {
      id: "browny-orange",
      name: "browny orange",
      hex: "#ca6b02",
      rank: 776,
      commonness: 834
    },
    {
      id: "golden",
      name: "golden",
      hex: "#f5bf03",
      rank: 777,
      commonness: 527
    },
    {
      id: "tiffany-blue",
      name: "tiffany blue",
      hex: "#7bf2da",
      rank: 778,
      commonness: 836
    },
    {
      id: "light-seafoam",
      name: "light seafoam",
      hex: "#a0febf",
      rank: 779,
      commonness: 837
    },
    {
      id: "washed-out-green",
      name: "washed out green",
      hex: "#bcf5a6",
      rank: 780,
      commonness: 835
    },
    {
      id: "orangey-yellow",
      name: "orangey yellow",
      hex: "#fdb915",
      rank: 781,
      commonness: 830
    },
    {
      id: "rosy-pink",
      name: "rosy pink",
      hex: "#f6688e",
      rank: 782,
      commonness: 841
    },
    {
      id: "peachy-pink",
      name: "peachy pink",
      hex: "#ff9a8a",
      rank: 783,
      commonness: 842
    },
    {
      id: "light-bright-green",
      name: "light bright green",
      hex: "#53fe5c",
      rank: 784,
      commonness: 839
    },
    {
      id: "old-rose",
      name: "old rose",
      hex: "#c87f89",
      rank: 785,
      commonness: 844
    },
    {
      id: "fern",
      name: "fern",
      hex: "#63a950",
      rank: 786,
      commonness: 845
    },
    {
      id: "dusk-blue",
      name: "dusk blue",
      hex: "#26538d",
      rank: 787,
      commonness: 846
    },
    {
      id: "camo",
      name: "camo",
      hex: "#7f8f4e",
      rank: 788,
      commonness: 847
    },
    {
      id: "purple-red",
      name: "purple red",
      hex: "#990147",
      rank: 789,
      commonness: 539
    },
    {
      id: "tealish-green",
      name: "tealish green",
      hex: "#0cdc73",
      rank: 790,
      commonness: 849
    },
    {
      id: "burnt-siena",
      name: "burnt siena",
      hex: "#b75203",
      rank: 791,
      commonness: 848
    },
    {
      id: "pale-grey",
      name: "pale grey",
      hex: "#fdfdfe",
      rank: 792,
      commonness: 542
    },
    {
      id: "rust-brown",
      name: "rust brown",
      hex: "#8b3103",
      rank: 793,
      commonness: 852
    },
    {
      id: "pale-lime-green",
      name: "pale lime green",
      hex: "#b1ff65",
      rank: 794,
      commonness: 544
    },
    {
      id: "grassy-green",
      name: "grassy green",
      hex: "#419c03",
      rank: 795,
      commonness: 545
    },
    {
      id: "cocoa",
      name: "cocoa",
      hex: "#875f42",
      rank: 796,
      commonness: 855
    },
    {
      id: "orangeish",
      name: "orangeish",
      hex: "#fd8d49",
      rank: 797,
      commonness: 853
    },
    {
      id: "raw-sienna",
      name: "raw sienna",
      hex: "#9a6200",
      rank: 798,
      commonness: 857
    },
    {
      id: "swamp",
      name: "swamp",
      hex: "#698339",
      rank: 799,
      commonness: 850
    },
    {
      id: "baby-purple",
      name: "baby purple",
      hex: "#ca9bf7",
      rank: 800,
      commonness: 856
    },
    {
      id: "cinnamon",
      name: "cinnamon",
      hex: "#ac4f06",
      rank: 801,
      commonness: 860
    },
    {
      id: "squash",
      name: "squash",
      hex: "#f2ab15",
      rank: 802,
      commonness: 861
    },
    {
      id: "charcoal-grey",
      name: "charcoal grey",
      hex: "#3c4142",
      rank: 803,
      commonness: 862
    },
    {
      id: "sand-brown",
      name: "sand brown",
      hex: "#cba560",
      rank: 804,
      commonness: 851
    },
    {
      id: "light-royal-blue",
      name: "light royal blue",
      hex: "#3a2efe",
      rank: 805,
      commonness: 854
    },
    {
      id: "bright-yellow-green",
      name: "bright yellow green",
      hex: "#9dff00",
      rank: 806,
      commonness: 863
    },
    {
      id: "light-lavendar",
      name: "light lavendar",
      hex: "#efc0fe",
      rank: 807,
      commonness: 866
    },
    {
      id: "light-bluish-green",
      name: "light bluish green",
      hex: "#76fda8",
      rank: 808,
      commonness: 840
    },
    {
      id: "pale-rose",
      name: "pale rose",
      hex: "#fdc1c5",
      rank: 809,
      commonness: 559
    },
    {
      id: "toupe",
      name: "toupe",
      hex: "#c7ac7d",
      rank: 810,
      commonness: 869
    },
    {
      id: "butterscotch",
      name: "butterscotch",
      hex: "#fdb147",
      rank: 811,
      commonness: 870
    },
    {
      id: "racing-green",
      name: "racing green",
      hex: "#014600",
      rank: 812,
      commonness: 806
    },
    {
      id: "tan-green",
      name: "tan green",
      hex: "#a9be70",
      rank: 813,
      commonness: 872
    },
    {
      id: "dark-seafoam",
      name: "dark seafoam",
      hex: "#1fb57a",
      rank: 814,
      commonness: 634
    },
    {
      id: "pale-gold",
      name: "pale gold",
      hex: "#fdde6c",
      rank: 815,
      commonness: 874
    },
    {
      id: "light-light-green",
      name: "light light green",
      hex: "#c8ffb0",
      rank: 816,
      commonness: 875
    },
    {
      id: "lichen",
      name: "lichen",
      hex: "#8fb67b",
      rank: 817,
      commonness: 876
    },
    {
      id: "banana",
      name: "banana",
      hex: "#ffff7e",
      rank: 818,
      commonness: 568
    },
    {
      id: "neon-yellow",
      name: "neon yellow",
      hex: "#cfff04",
      rank: 819,
      commonness: 569
    },
    {
      id: "azul",
      name: "azul",
      hex: "#1d5dec",
      rank: 820,
      commonness: 879
    },
    {
      id: "green-yellow-2",
      name: "green/yellow",
      hex: "#b5ce08",
      rank: 821,
      commonness: 877
    },
    {
      id: "sickly-yellow",
      name: "sickly yellow",
      hex: "#d0e429",
      rank: 822,
      commonness: 881
    },
    {
      id: "electric-pink",
      name: "electric pink",
      hex: "#ff0490",
      rank: 823,
      commonness: 573
    },
    {
      id: "bruise",
      name: "bruise",
      hex: "#7e4071",
      rank: 824,
      commonness: 883
    },
    {
      id: "kelley-green",
      name: "kelley green",
      hex: "#009337",
      rank: 825,
      commonness: 882
    },
    {
      id: "battleship-grey",
      name: "battleship grey",
      hex: "#6b7c85",
      rank: 826,
      commonness: 885
    },
    {
      id: "dark-cream",
      name: "dark cream",
      hex: "#fff39a",
      rank: 827,
      commonness: 868
    },
    {
      id: "manilla",
      name: "manilla",
      hex: "#fffa86",
      rank: 828,
      commonness: 887
    },
    {
      id: "greenish-beige",
      name: "greenish beige",
      hex: "#c9d179",
      rank: 829,
      commonness: 888
    },
    {
      id: "deep-brown",
      name: "deep brown",
      hex: "#410200",
      rank: 830,
      commonness: 889
    },
    {
      id: "darkish-pink",
      name: "darkish pink",
      hex: "#da467d",
      rank: 831,
      commonness: 890
    },
    {
      id: "barf-green",
      name: "barf green",
      hex: "#94ac02",
      rank: 832,
      commonness: 672
    },
    {
      id: "ugly-brown",
      name: "ugly brown",
      hex: "#7d7103",
      rank: 833,
      commonness: 892
    },
    {
      id: "stormy-blue",
      name: "stormy blue",
      hex: "#507b9c",
      rank: 834,
      commonness: 893
    },
    {
      id: "liliac",
      name: "liliac",
      hex: "#c48efd",
      rank: 835,
      commonness: 894
    },
    {
      id: "bubble-gum-pink",
      name: "bubble gum pink",
      hex: "#ff69af",
      rank: 836,
      commonness: 715
    },
    {
      id: "yellowish-orange",
      name: "yellowish orange",
      hex: "#ffab0f",
      rank: 837,
      commonness: 587
    },
    {
      id: "reddish-grey",
      name: "reddish grey",
      hex: "#997570",
      rank: 838,
      commonness: 896
    },
    {
      id: "powder-pink",
      name: "powder pink",
      hex: "#ffb2d0",
      rank: 839,
      commonness: 897
    },
    {
      id: "eggplant-purple",
      name: "eggplant purple",
      hex: "#430541",
      rank: 840,
      commonness: 898
    },
    {
      id: "very-light-brown",
      name: "very light brown",
      hex: "#d3b683",
      rank: 841,
      commonness: 900
    },
    {
      id: "egg-shell",
      name: "egg shell",
      hex: "#fffcc4",
      rank: 842,
      commonness: 899
    },
    {
      id: "orange-pink",
      name: "orange pink",
      hex: "#ff6f52",
      rank: 843,
      commonness: 902
    },
    {
      id: "fluro-green",
      name: "fluro green",
      hex: "#0aff02",
      rank: 844,
      commonness: 594
    },
    {
      id: "kiwi-green",
      name: "kiwi green",
      hex: "#8ee53f",
      rank: 845,
      commonness: 904
    },
    {
      id: "boring-green",
      name: "boring green",
      hex: "#63b365",
      rank: 846,
      commonness: 905
    },
    {
      id: "light-grey-green",
      name: "light grey green",
      hex: "#b7e1a1",
      rank: 847,
      commonness: 903
    },
    {
      id: "candy-pink",
      name: "candy pink",
      hex: "#ff63e9",
      rank: 848,
      commonness: 907
    },
    {
      id: "purply",
      name: "purply",
      hex: "#983fb2",
      rank: 849,
      commonness: 908
    },
    {
      id: "purpley-grey",
      name: "purpley grey",
      hex: "#947e94",
      rank: 850,
      commonness: 909
    },
    {
      id: "dusty-lavender",
      name: "dusty lavender",
      hex: "#ac86a8",
      rank: 851,
      commonness: 910
    },
    {
      id: "desert",
      name: "desert",
      hex: "#ccad60",
      rank: 852,
      commonness: 911
    },
    {
      id: "deep-lilac",
      name: "deep lilac",
      hex: "#966ebd",
      rank: 853,
      commonness: 912
    },
    {
      id: "yellow-green-2",
      name: "yellow/green",
      hex: "#c8fd3d",
      rank: 854,
      commonness: 604
    },
    {
      id: "pig-pink",
      name: "pig pink",
      hex: "#e78ea5",
      rank: 855,
      commonness: 913
    },
    {
      id: "olive-yellow",
      name: "olive yellow",
      hex: "#c2b709",
      rank: 856,
      commonness: 914
    },
    {
      id: "baby-poop-green",
      name: "baby poop green",
      hex: "#8f9805",
      rank: 857,
      commonness: 607
    },
    {
      id: "lavender-pink",
      name: "lavender pink",
      hex: "#dd85d7",
      rank: 858,
      commonness: 917
    },
    {
      id: "deep-aqua",
      name: "deep aqua",
      hex: "#08787f",
      rank: 859,
      commonness: 918
    },
    {
      id: "light-moss-green",
      name: "light moss green",
      hex: "#a6c875",
      rank: 860,
      commonness: 916
    },
    {
      id: "light-pastel-green",
      name: "light pastel green",
      hex: "#b2fba5",
      rank: 861,
      commonness: 906
    },
    {
      id: "indian-red",
      name: "indian red",
      hex: "#850e04",
      rank: 862,
      commonness: 867
    },
    {
      id: "deep-turquoise",
      name: "deep turquoise",
      hex: "#017374",
      rank: 863,
      commonness: 922
    },
    {
      id: "dark-green-blue",
      name: "dark green blue",
      hex: "#1f6357",
      rank: 864,
      commonness: 923
    },
    {
      id: "bright-sea-green",
      name: "bright sea green",
      hex: "#05ffa6",
      rank: 865,
      commonness: 924
    },
    {
      id: "vomit-yellow",
      name: "vomit yellow",
      hex: "#c7c10c",
      rank: 866,
      commonness: 616
    },
    {
      id: "booger",
      name: "booger",
      hex: "#9bb53c",
      rank: 867,
      commonness: 925
    },
    {
      id: "blue-blue",
      name: "blue blue",
      hex: "#2242c7",
      rank: 868,
      commonness: 927
    },
    {
      id: "windows-blue",
      name: "windows blue",
      hex: "#3778bf",
      rank: 869,
      commonness: 928
    },
    {
      id: "greeny-brown",
      name: "greeny brown",
      hex: "#696006",
      rank: 870,
      commonness: 654
    },
    {
      id: "lime-yellow",
      name: "lime yellow",
      hex: "#d0fe1d",
      rank: 871,
      commonness: 621
    },
    {
      id: "hot-green",
      name: "hot green",
      hex: "#25ff29",
      rank: 872,
      commonness: 622
    },
    {
      id: "spruce",
      name: "spruce",
      hex: "#0a5f38",
      rank: 873,
      commonness: 931
    },
    {
      id: "pinkish-tan",
      name: "pinkish tan",
      hex: "#d99b82",
      rank: 874,
      commonness: 932
    },
    {
      id: "macaroni-and-cheese",
      name: "macaroni and cheese",
      hex: "#efb435",
      rank: 875,
      commonness: 933
    },
    {
      id: "dusty-teal",
      name: "dusty teal",
      hex: "#4c9085",
      rank: 876,
      commonness: 935
    },
    {
      id: "dark-grass-green",
      name: "dark grass green",
      hex: "#388004",
      rank: 877,
      commonness: 936
    },
    {
      id: "bright-lilac",
      name: "bright lilac",
      hex: "#c95efb",
      rank: 878,
      commonness: 628
    },
    {
      id: "cement",
      name: "cement",
      hex: "#a5a391",
      rank: 879,
      commonness: 937
    },
    {
      id: "warm-purple",
      name: "warm purple",
      hex: "#952e8f",
      rank: 880,
      commonness: 939
    },
    {
      id: "rust-orange",
      name: "rust orange",
      hex: "#c45508",
      rank: 881,
      commonness: 631
    },
    {
      id: "tea",
      name: "tea",
      hex: "#65ab7c",
      rank: 882,
      commonness: 940
    },
    {
      id: "nasty-green",
      name: "nasty green",
      hex: "#70b23f",
      rank: 883,
      commonness: 942
    },
    {
      id: "light-eggplant",
      name: "light eggplant",
      hex: "#894585",
      rank: 884,
      commonness: 943
    },
    {
      id: "fresh-green",
      name: "fresh green",
      hex: "#69d84f",
      rank: 885,
      commonness: 944
    },
    {
      id: "yellowgreen",
      name: "yellowgreen",
      hex: "#bbf90f",
      rank: 886,
      commonness: 636
    },
    {
      id: "dust",
      name: "dust",
      hex: "#b2996e",
      rank: 887,
      commonness: 946
    },
    {
      id: "dark-pastel-green",
      name: "dark pastel green",
      hex: "#56ae57",
      rank: 888,
      commonness: 947
    },
    {
      id: "spearmint",
      name: "spearmint",
      hex: "#1ef876",
      rank: 889,
      commonness: 639
    },
    {
      id: "bright-lime",
      name: "bright lime",
      hex: "#87fd05",
      rank: 890,
      commonness: 640
    },
    {
      id: "cloudy-blue",
      name: "cloudy blue",
      hex: "#acc2d9",
      rank: 891,
      commonness: 948
    },
    {
      id: "very-pale-green",
      name: "very pale green",
      hex: "#cffdbc",
      rank: 892,
      commonness: 642
    },
    {
      id: "faded-yellow",
      name: "faded yellow",
      hex: "#feff7f",
      rank: 893,
      commonness: 643
    },
    {
      id: "grey-teal",
      name: "grey teal",
      hex: "#5e9b8a",
      rank: 894,
      commonness: 934
    },
    {
      id: "electric-lime",
      name: "electric lime",
      hex: "#a8ff04",
      rank: 895,
      commonness: 945
    },
    {
      id: "tea-green",
      name: "tea green",
      hex: "#bdf8a3",
      rank: 896,
      commonness: 901
    },
    {
      id: "light-pea-green",
      name: "light pea green",
      hex: "#c4fe82",
      rank: 897,
      commonness: 859
    },
    {
      id: "greenish-turquoise",
      name: "greenish turquoise",
      hex: "#00fbb0",
      rank: 898,
      commonness: 734
    },
    {
      id: "burple",
      name: "burple",
      hex: "#6832e3",
      rank: 899,
      commonness: 871
    },
    {
      id: "sunshine-yellow",
      name: "sunshine yellow",
      hex: "#fffd37",
      rank: 900,
      commonness: 650
    },
    {
      id: "seaweed-green",
      name: "seaweed green",
      hex: "#35ad6b",
      rank: 901,
      commonness: 651
    },
    {
      id: "sunny-yellow",
      name: "sunny yellow",
      hex: "#fff917",
      rank: 902,
      commonness: 880
    },
    {
      id: "wintergreen",
      name: "wintergreen",
      hex: "#20f986",
      rank: 903,
      commonness: 816
    },
    {
      id: "parchment",
      name: "parchment",
      hex: "#fefcaf",
      rank: 904,
      commonness: 829
    },
    {
      id: "lightish-red",
      name: "lightish red",
      hex: "#fe2f4a",
      rank: 905,
      commonness: 694
    },
    {
      id: "golden-rod",
      name: "golden rod",
      hex: "#f9bc08",
      rank: 906,
      commonness: 778
    },
    {
      id: "blue-with-a-hint-of-purple",
      name: "blue with a hint of purple",
      hex: "#533cc6",
      rank: 907,
      commonness: 926
    },
    {
      id: "tan-brown",
      name: "tan brown",
      hex: "#ab7e4c",
      rank: 908,
      commonness: 745
    },
    {
      id: "dark-royal-blue",
      name: "dark royal blue",
      hex: "#02066f",
      rank: 909,
      commonness: 804
    },
    {
      id: "bland",
      name: "bland",
      hex: "#afa88b",
      rank: 910,
      commonness: 919
    },
    {
      id: "grey-blue-2",
      name: "grey/blue",
      hex: "#647d8e",
      rank: 911,
      commonness: 684
    },
    {
      id: "off-blue",
      name: "off blue",
      hex: "#5684ae",
      rank: 912,
      commonness: 886
    },
    {
      id: "duck-egg-blue",
      name: "duck egg blue",
      hex: "#c3fbf4",
      rank: 913,
      commonness: 714
    },
    {
      id: "yellow-tan",
      name: "yellow tan",
      hex: "#ffe36e",
      rank: 914,
      commonness: 815
    },
    {
      id: "poison-green",
      name: "poison green",
      hex: "#40fd14",
      rank: 915,
      commonness: 865
    },
    {
      id: "strong-pink",
      name: "strong pink",
      hex: "#ff0789",
      rank: 916,
      commonness: 920
    },
    {
      id: "orangered",
      name: "orangered",
      hex: "#fe420f",
      rank: 917,
      commonness: 738
    },
    {
      id: "pale-light-green",
      name: "pale light green",
      hex: "#b1fc99",
      rank: 918,
      commonness: 843
    },
    {
      id: "light-seafoam-green",
      name: "light seafoam green",
      hex: "#a7ffb5",
      rank: 919,
      commonness: 915
    },
    {
      id: "gross-green",
      name: "gross green",
      hex: "#a0bf16",
      rank: 920,
      commonness: 765
    },
    {
      id: "dark-fuchsia",
      name: "dark fuchsia",
      hex: "#9d0759",
      rank: 921,
      commonness: 814
    },
    {
      id: "sun-yellow",
      name: "sun yellow",
      hex: "#ffdf22",
      rank: 922,
      commonness: 873
    },
    {
      id: "baby-green",
      name: "baby green",
      hex: "#8cff9e",
      rank: 923,
      commonness: 673
    },
    {
      id: "pure-blue",
      name: "pure blue",
      hex: "#0203e2",
      rank: 924,
      commonness: 693
    },
    {
      id: "baby-shit-brown",
      name: "baby shit brown",
      hex: "#ad900d",
      rank: 925,
      commonness: 895
    },
    {
      id: "lemon-lime",
      name: "lemon lime",
      hex: "#bffe28",
      rank: 926,
      commonness: 683
    },
    {
      id: "green-teal",
      name: "green teal",
      hex: "#0cb577",
      rank: 927,
      commonness: 921
    },
    {
      id: "banana-yellow",
      name: "banana yellow",
      hex: "#fafe4b",
      rank: 928,
      commonness: 678
    },
    {
      id: "violet-pink",
      name: "violet pink",
      hex: "#fb5ffc",
      rank: 929,
      commonness: 817
    },
    {
      id: "light-neon-green",
      name: "light neon green",
      hex: "#4efd54",
      rank: 930,
      commonness: 838
    },
    {
      id: "toxic-green",
      name: "toxic green",
      hex: "#61de2a",
      rank: 931,
      commonness: 929
    },
    {
      id: "radioactive-green",
      name: "radioactive green",
      hex: "#2cfa1f",
      rank: 932,
      commonness: 858
    },
    {
      id: "browny-green",
      name: "browny green",
      hex: "#6f6c0a",
      rank: 933,
      commonness: 884
    },
    {
      id: "yellowish-tan",
      name: "yellowish tan",
      hex: "#fcfc81",
      rank: 934,
      commonness: 938
    },
    {
      id: "terracota",
      name: "terracota",
      hex: "#cb6843",
      rank: 935,
      commonness: 826
    },
    {
      id: "sunflower",
      name: "sunflower",
      hex: "#ffc512",
      rank: 936,
      commonness: 697
    },
    {
      id: "darkgreen",
      name: "darkgreen",
      hex: "#054907",
      rank: 937,
      commonness: 878
    },
    {
      id: "saffron",
      name: "saffron",
      hex: "#feb209",
      rank: 938,
      commonness: 719
    },
    {
      id: "creme",
      name: "creme",
      hex: "#ffffb6",
      rank: 939,
      commonness: 823
    },
    {
      id: "custard",
      name: "custard",
      hex: "#fffd78",
      rank: 940,
      commonness: 891
    },
    {
      id: "butter",
      name: "butter",
      hex: "#ffff81",
      rank: 941,
      commonness: 710
    },
    {
      id: "baby-puke-green",
      name: "baby puke green",
      hex: "#b6c406",
      rank: 942,
      commonness: 864
    },
    {
      id: "very-pale-blue",
      name: "very pale blue",
      hex: "#d6fffe",
      rank: 943,
      commonness: 775
    },
    {
      id: "dried-blood",
      name: "dried blood",
      hex: "#4b0101",
      rank: 944,
      commonness: 703
    },
    {
      id: "really-light-blue",
      name: "really light blue",
      hex: "#d4ffff",
      rank: 945,
      commonness: 941
    },
    {
      id: "strong-blue",
      name: "strong blue",
      hex: "#0c06f7",
      rank: 946,
      commonness: 930
    },
    {
      id: "light-green-blue",
      name: "light green blue",
      hex: "#56fca2",
      rank: 947,
      commonness: 768
    },
    {
      id: "highlighter-green",
      name: "highlighter green",
      hex: "#1bfc06",
      rank: 948,
      commonness: 757
    }
  ];

  // public/lib/colorDistance.js
  function hexToRgb(hex) {
    const clean = hex.replace("#", "");
    return [
      parseInt(clean.slice(0, 2), 16),
      parseInt(clean.slice(2, 4), 16),
      parseInt(clean.slice(4, 6), 16)
    ];
  }
  var labCache = /* @__PURE__ */ new Map();
  function hexToLab(hex) {
    const cached = labCache.get(hex);
    if (cached) return cached;
    const lab = computeLab(hex);
    labCache.set(hex, lab);
    return lab;
  }
  function computeLab(hex) {
    const [r8, g8, b8] = hexToRgb(hex);
    const linear = (v) => {
      const c = v / 255;
      return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
    };
    const r = linear(r8);
    const g = linear(g8);
    const b = linear(b8);
    const x = (r * 0.4124564 + g * 0.3575761 + b * 0.1804375) / 0.95047;
    const y = r * 0.2126729 + g * 0.7151522 + b * 0.072175;
    const z = (r * 0.0193339 + g * 0.119192 + b * 0.9503041) / 1.08883;
    const f = (t) => t > 216 / 24389 ? Math.cbrt(t) : 841 / 108 * t + 4 / 29;
    const fx = f(x);
    const fy = f(y);
    const fz = f(z);
    return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)];
  }
  var DEG = Math.PI / 180;
  var RAD = 180 / Math.PI;
  function deltaE2000FromLab([L1, a1, b1], [L2, a2, b2]) {
    const C1 = Math.hypot(a1, b1);
    const C2 = Math.hypot(a2, b2);
    const cBar = (C1 + C2) / 2;
    const cBar7 = Math.pow(cBar, 7);
    const G = 0.5 * (1 - Math.sqrt(cBar7 / (cBar7 + Math.pow(25, 7))));
    const ap1 = (1 + G) * a1;
    const ap2 = (1 + G) * a2;
    const Cp1 = Math.hypot(ap1, b1);
    const Cp2 = Math.hypot(ap2, b2);
    const hue = (b, ap) => {
      if (b === 0 && ap === 0) return 0;
      const h = Math.atan2(b, ap) * RAD;
      return h >= 0 ? h : h + 360;
    };
    const hp1 = hue(b1, ap1);
    const hp2 = hue(b2, ap2);
    const dLp = L2 - L1;
    const dCp = Cp2 - Cp1;
    let dhp = 0;
    if (Cp1 * Cp2 !== 0) {
      dhp = hp2 - hp1;
      if (dhp > 180) dhp -= 360;
      else if (dhp < -180) dhp += 360;
    }
    const dHp = 2 * Math.sqrt(Cp1 * Cp2) * Math.sin(dhp / 2 * DEG);
    const lBarP = (L1 + L2) / 2;
    const cBarP = (Cp1 + Cp2) / 2;
    let hBarP;
    if (Cp1 * Cp2 === 0) {
      hBarP = hp1 + hp2;
    } else if (Math.abs(hp1 - hp2) <= 180) {
      hBarP = (hp1 + hp2) / 2;
    } else if (hp1 + hp2 < 360) {
      hBarP = (hp1 + hp2 + 360) / 2;
    } else {
      hBarP = (hp1 + hp2 - 360) / 2;
    }
    const T = 1 - 0.17 * Math.cos((hBarP - 30) * DEG) + 0.24 * Math.cos(2 * hBarP * DEG) + 0.32 * Math.cos((3 * hBarP + 6) * DEG) - 0.2 * Math.cos((4 * hBarP - 63) * DEG);
    const cBarP7 = Math.pow(cBarP, 7);
    const sL = 1 + 0.015 * Math.pow(lBarP - 50, 2) / Math.sqrt(20 + Math.pow(lBarP - 50, 2));
    const sC = 1 + 0.045 * cBarP;
    const sH = 1 + 0.015 * cBarP * T;
    const rT = -2 * Math.sqrt(cBarP7 / (cBarP7 + Math.pow(25, 7))) * Math.sin(2 * (30 * Math.exp(-Math.pow((hBarP - 275) / 25, 2))) * DEG);
    return Math.sqrt(
      Math.pow(dLp / sL, 2) + Math.pow(dCp / sC, 2) + Math.pow(dHp / sH, 2) + rT * (dCp / sC) * (dHp / sH)
    );
  }
  function hexToHsl(hex) {
    const [r255, g255, b255] = hexToRgb(hex);
    const r = r255 / 255;
    const g = g255 / 255;
    const b = b255 / 255;
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    const l = (max + min) / 2;
    if (max === min) return { h: 0, s: 0, l };
    const d = max - min;
    const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    let h;
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    return { h: h * 60, s, l };
  }
  function sortByHue(colors) {
    return [...colors].sort((a, b) => {
      const ha = hexToHsl(a.hex);
      const hb = hexToHsl(b.hex);
      if (ha.h !== hb.h) return ha.h - hb.h;
      return ha.l - hb.l;
    });
  }

  // public/lib/progression.js
  var BATCH_SIZE = 5;
  var MASTERY_STREAK = 3;
  var MIN_DISTRACTOR_SEPARATION = 12;
  var ASSUMED_KNOWN_NAMES = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "brown",
    "black",
    "white",
    "grey"
  ];
  function buildLearningOrder(colors) {
    const known = colors.filter((c) => ASSUMED_KNOWN_NAMES.includes(c.name));
    const rest = colors.filter((c) => !ASSUMED_KNOWN_NAMES.includes(c.name));
    return {
      order: [...known, ...rest].map((c) => c.id),
      assumedKnownCount: known.length
    };
  }
  function createLearnerState(orderedColorIds, batchSize = BATCH_SIZE, assumedKnownCount2 = 0) {
    const masteredIds = orderedColorIds.slice(0, assumedKnownCount2);
    const activeBatchIds = orderedColorIds.slice(assumedKnownCount2, assumedKnownCount2 + batchSize);
    const streaks = {};
    for (const id of activeBatchIds) streaks[id] = 0;
    return { orderedColorIds, batchSize, activeBatchIds, streaks, masteredIds };
  }
  function selectTarget(state2, lastTargetId, rng = Math.random) {
    if (state2.activeBatchIds.length === 0) return null;
    const pool = state2.activeBatchIds.length > 1 ? state2.activeBatchIds.filter((id) => id !== lastTargetId) : state2.activeBatchIds;
    const weights = pool.map((id) => MASTERY_STREAK + 1 - state2.streaks[id]);
    const total = weights.reduce((sum, w) => sum + w, 0);
    let roll = rng() * total;
    for (let i = 0; i < pool.length; i++) {
      roll -= weights[i];
      if (roll <= 0) return pool[i];
    }
    return pool[pool.length - 1];
  }
  function selectDistractors(targetId, colorsById, introducedIds, count = 3, minSeparation = MIN_DISTRACTOR_SEPARATION) {
    const targetLab = hexToLab(colorsById[targetId].hex);
    const ranked = introducedIds.filter((id) => id !== targetId).map((id) => ({ id, distance: deltaE2000FromLab(targetLab, hexToLab(colorsById[id].hex)) })).sort((a, b) => a.distance - b.distance);
    const legible = ranked.filter((entry) => entry.distance >= minSeparation);
    if (legible.length >= count) return legible.slice(0, count).map((entry) => entry.id);
    const tooClose = ranked.filter((entry) => entry.distance < minSeparation).reverse();
    return [...legible, ...tooClose].slice(0, count).map((entry) => entry.id);
  }
  function recordAnswer(state2, colorId, correct, masteryStreak = MASTERY_STREAK) {
    if (!state2.activeBatchIds.includes(colorId)) return state2;
    const currentStreak = state2.streaks[colorId] ?? 0;
    const newStreak = correct ? currentStreak + 1 : 0;
    if (newStreak < masteryStreak) {
      return { ...state2, streaks: { ...state2.streaks, [colorId]: newStreak } };
    }
    const activeBatchIds = state2.activeBatchIds.filter((id) => id !== colorId);
    const masteredIds = [...state2.masteredIds, colorId];
    const streaks = { ...state2.streaks };
    delete streaks[colorId];
    const introduced = /* @__PURE__ */ new Set([...activeBatchIds, ...masteredIds]);
    const nextId = state2.orderedColorIds.find((id) => !introduced.has(id));
    if (nextId) {
      activeBatchIds.push(nextId);
      streaks[nextId] = 0;
    }
    return { ...state2, activeBatchIds, masteredIds, streaks };
  }

  // public/lib/snapshot.js
  var FORMAT_VERSION = 1;
  var CURRICULUM_ID = "xkcd-949-v1";
  var UnsupportedSnapshot = class extends Error {
    constructor() {
      super("This progress was saved by a different version. Keep an export before changing it.");
      this.name = "UnsupportedSnapshot";
    }
  };
  var plainObject = (value) => value !== null && typeof value === "object" && !Array.isArray(value);
  var ids = (values, allowed) => [...new Set(values.filter((id) => typeof id === "string" && allowed.has(id)))];
  function restoreSnapshot(snapshot, orderedColorIds, assumedKnownCount2 = 0) {
    if (snapshot === void 0) return createLearnerState(orderedColorIds, BATCH_SIZE, assumedKnownCount2);
    if (!plainObject(snapshot)) throw new TypeError("Saved progress is not a learning record.");
    if (snapshot.formatVersion !== FORMAT_VERSION) throw new UnsupportedSnapshot();
    if (!Array.isArray(snapshot.masteredIds) || !Array.isArray(snapshot.activeBatchIds) || !plainObject(snapshot.streaks)) {
      throw new TypeError("Saved progress is incomplete. Keep an export before starting again.");
    }
    const allowed = new Set(orderedColorIds);
    const masteredIds = ids(snapshot.masteredIds, allowed);
    const mastered = new Set(masteredIds);
    const activeBatchIds = ids(snapshot.activeBatchIds, allowed).filter((id) => !mastered.has(id)).slice(0, BATCH_SIZE);
    const introduced = /* @__PURE__ */ new Set([...masteredIds, ...activeBatchIds]);
    for (const id of orderedColorIds) {
      if (activeBatchIds.length === BATCH_SIZE) break;
      if (!introduced.has(id)) {
        activeBatchIds.push(id);
        introduced.add(id);
      }
    }
    const streaks = Object.fromEntries(activeBatchIds.map((id) => {
      const value = snapshot.streaks[id];
      return [id, Number.isInteger(value) && value >= 0 && value < MASTERY_STREAK ? value : 0];
    }));
    const masteredAt = {};
    if (plainObject(snapshot.masteredAt)) {
      for (const id of masteredIds) {
        const value = snapshot.masteredAt[id];
        if (typeof value === "string" && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value) && Number.isFinite(Date.parse(value))) {
          masteredAt[id] = value;
        }
      }
    }
    return { orderedColorIds, batchSize: BATCH_SIZE, activeBatchIds, masteredIds, streaks, masteredAt };
  }
  function snapshotForState(state2, previous = null, now = (/* @__PURE__ */ new Date()).toISOString()) {
    const previousDates = previous?.masteredAt ?? state2.masteredAt ?? {};
    const previouslyMastered = new Set(previous?.masteredIds ?? state2.masteredIds);
    const masteredAt = {};
    for (const id of state2.masteredIds) {
      if (previousDates[id]) masteredAt[id] = previousDates[id];
      else if (!previouslyMastered.has(id)) masteredAt[id] = now;
    }
    return {
      formatVersion: FORMAT_VERSION,
      activeBatchIds: [...state2.activeBatchIds],
      masteredIds: [...state2.masteredIds],
      streaks: Object.fromEntries(state2.activeBatchIds.map((id) => [id, state2.streaks[id] ?? 0])),
      masteredAt
    };
  }

  // public/lib/progress-store.js
  var MAX_PROFILES = 8;
  var MAX_SNAPSHOT_BYTES = 1048576;
  var UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  var clone = (value) => structuredClone(value);
  var sameBinding = (a, b) => !!a && !!b && a.backend === b.backend && a.ownerId === b.ownerId && a.profileId === b.profileId;
  function validateBinding(value) {
    if (!value || !UUID.test(value.ownerId) || !UUID.test(value.profileId)) throw new TypeError("Invalid cloud profile.");
    const url = new URL(value.backend);
    if (url.protocol !== "https:" || url.origin !== value.backend || url.username || url.password) throw new TypeError("Invalid cloud destination.");
    return { backend: url.origin, ownerId: value.ownerId, profileId: value.profileId };
  }
  async function openProgressStore({ indexedDB = globalThis.indexedDB, dbName = "color-learning-v1", gameId, curriculumId, normalize: normalize2 }) {
    if (!indexedDB) throw new Error("This browser cannot save progress on this device.");
    const db = await new Promise((resolve, reject) => {
      const request = indexedDB.open(dbName, 1);
      request.onupgradeneeded = () => {
        const next = request.result;
        next.createObjectStore("profiles", { keyPath: "id" });
        next.createObjectStore("records", { keyPath: "key" });
        const recovery = next.createObjectStore("recovery", { keyPath: "id" });
        recovery.createIndex("profileId", "profileId");
      };
      request.onerror = () => reject(request.error);
      request.onblocked = () => reject(new Error("Close older tabs before updating saved progress."));
      request.onsuccess = () => resolve(request.result);
    });
    db.onversionchange = () => db.close();
    const keyFor = (id) => JSON.stringify([id, gameId, curriculumId]);
    const clean = (value) => {
      const next = normalize2(clone(value));
      if (new TextEncoder().encode(JSON.stringify(next)).length > MAX_SNAPSHOT_BYTES) throw new Error("Progress is too large to save.");
      return next;
    };
    const remoteValue = (remote) => {
      if (remote === null) return null;
      if (!remote || !remote.snapshot || typeof remote.snapshot !== "object" || Array.isArray(remote.snapshot) || !Number.isSafeInteger(remote.revision) || remote.revision < 1 || !UUID.test(remote.writeId)) throw new TypeError("Invalid cloud progress.");
      return { snapshot: clean(remote.snapshot), revision: remote.revision, writeId: remote.writeId };
    };
    function transaction(names, mode, run) {
      return new Promise((resolve, reject) => {
        let tx, result, failure;
        try {
          tx = db.transaction(names, mode);
        } catch (error) {
          reject(error);
          return;
        }
        const fail = (error) => {
          failure = error;
          try {
            tx.abort();
          } catch {
          }
        };
        const guard = (fn) => (...args) => {
          try {
            fn(...args);
          } catch (error) {
            fail(error);
          }
        };
        const get = (name, id, then) => {
          const req = id === void 0 ? tx.objectStore(name).getAll() : tx.objectStore(name).get(id);
          req.onsuccess = guard(() => then(req.result));
        };
        tx.oncomplete = () => resolve(result);
        tx.onabort = () => reject(failure ?? tx.error ?? new Error("Progress was not saved."));
        tx.onerror = () => {
        };
        guard(run)({ tx, get, done: (value) => {
          result = value;
        }, guard });
      });
    }
    function preserve(tx, record2, snapshot, reason) {
      tx.objectStore("recovery").put({
        id: crypto.randomUUID(),
        profileId: record2.profileId,
        gameId,
        curriculumId,
        snapshot: clone(snapshot),
        reason,
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      });
    }
    function change(profileId, run) {
      return transaction(["records", "recovery"], "readwrite", ({ tx, get, done }) => {
        get("records", keyFor(profileId), (record2) => run(record2 ?? null, tx, done));
      });
    }
    const write = (tx, record2, done, status = "saved") => {
      tx.objectStore("records").put(record2);
      done({ status, record: clone(record2) });
    };
    const requireRecord = (record2) => {
      if (!record2) throw new Error("This local profile no longer exists.");
    };
    function choose(record2, tx, remote, choice) {
      if (!["cloud", "device"].includes(choice)) throw new Error("Choose this device or cloud progress.");
      if (choice === "cloud") {
        if (!remote) throw new Error("There is no cloud progress to restore.");
        preserve(tx, record2, record2.snapshot, "Before restoring cloud progress");
        record2.snapshot = remote.snapshot;
      } else if (remote) preserve(tx, record2, remote.snapshot, "Cloud progress before keeping this device");
      record2.localRevision++;
      record2.remoteRevision = remote?.revision ?? 0;
      record2.inflight = null;
      record2.conflict = null;
      record2.needsUpload = choice === "device";
    }
    const api = {
      close: () => db.close(),
      listProfiles: () => transaction(["profiles"], "readonly", ({ get, done }) => get("profiles", void 0, (rows) => done(rows.sort((a, b) => a.createdAt.localeCompare(b.createdAt))))),
      async createProfile(label, initialSnapshot2) {
        if (typeof label !== "string" || !label.trim() || label.trim().length > 60) throw new TypeError("Use a nickname of 1 to 60 characters.");
        const snapshot = clean(initialSnapshot2);
        return transaction(["profiles", "records"], "readwrite", ({ tx, get, done }) => {
          get("profiles", void 0, (profiles) => {
            if (profiles.length >= MAX_PROFILES) throw new Error("This device has eight profiles. Export and remove one before adding another.");
            const profile2 = { id: crypto.randomUUID(), label: label.trim(), createdAt: (/* @__PURE__ */ new Date()).toISOString() };
            tx.objectStore("profiles").put(profile2);
            tx.objectStore("records").put({ key: keyFor(profile2.id), profileId: profile2.id, gameId, curriculumId, snapshot, localRevision: 1, binding: null, remoteRevision: 0, inflight: null, conflict: null, needsUpload: false });
            done(profile2);
          });
        });
      },
      load: (profileId) => transaction(["records"], "readonly", ({ get, done }) => get("records", keyFor(profileId), (record2) => done(record2 ?? null))),
      save(profileId, snapshot, expectedRevision) {
        const value = clean(snapshot);
        return change(profileId, (record2, tx, done) => {
          requireRecord(record2);
          if (record2.localRevision !== expectedRevision) {
            preserve(tx, record2, value, "Another tab saved first");
            done({ status: "local-conflict", record: record2 });
            return;
          }
          record2.snapshot = value;
          record2.localRevision++;
          record2.needsUpload = !!record2.binding;
          write(tx, record2, done);
        });
      },
      attach(profileId, binding, expectedRevision, remote, choice) {
        const safeBinding = validateBinding(binding);
        const safeRemote = remoteValue(remote);
        return change(profileId, (record2, tx, done) => {
          requireRecord(record2);
          if (record2.localRevision !== expectedRevision) {
            done({ status: "local-conflict", record: record2 });
            return;
          }
          choose(record2, tx, safeRemote, choice);
          record2.binding = safeBinding;
          write(tx, record2, done);
        });
      },
      beginFlush(profileId, binding) {
        return change(profileId, (record2, tx, done) => {
          if (!record2 || !sameBinding(record2.binding, binding) || record2.conflict || !record2.inflight && !record2.needsUpload) {
            done(null);
            return;
          }
          if (!record2.inflight) record2.inflight = {
            writeId: crypto.randomUUID(),
            localRevision: record2.localRevision,
            expectedRemoteRevision: record2.remoteRevision,
            snapshot: clone(record2.snapshot)
          };
          tx.objectStore("records").put(record2);
          done(clone(record2));
        });
      },
      acknowledge(profileId, binding, writeId, remoteRevision) {
        if (!Number.isSafeInteger(remoteRevision) || remoteRevision < 1) throw new TypeError("Invalid saved revision.");
        return change(profileId, (record2, tx, done) => {
          if (!record2 || !sameBinding(record2.binding, binding) || record2.inflight?.writeId !== writeId) {
            done({ status: "stale" });
            return;
          }
          if (remoteRevision !== record2.inflight.expectedRemoteRevision + 1) throw new Error("Unexpected cloud revision. Progress remains queued.");
          record2.remoteRevision = remoteRevision;
          record2.needsUpload = record2.localRevision !== record2.inflight.localRevision;
          record2.inflight = null;
          record2.conflict = null;
          write(tx, record2, done);
        });
      },
      markConflict(profileId, binding, writeId, remote) {
        const safeRemote = remoteValue(remote);
        return change(profileId, (record2, tx, done) => {
          if (!record2 || !sameBinding(record2.binding, binding) || record2.inflight?.writeId !== writeId) {
            done({ status: "stale" });
            return;
          }
          if (safeRemote && record2.conflict?.remote && safeRemote.revision < record2.conflict.remote.revision) {
            done({ status: "stale" });
            return;
          }
          if (JSON.stringify(record2.conflict?.remote) === JSON.stringify(safeRemote)) {
            done({ status: "cloud-conflict", record: record2 });
            return;
          }
          record2.conflict = { id: crypto.randomUUID(), remote: safeRemote };
          write(tx, record2, done, "cloud-conflict");
        });
      },
      resolveConflict(profileId, binding, expectedRevision, choice, expectedConflictId) {
        return change(profileId, (record2, tx, done) => {
          requireRecord(record2);
          if (!sameBinding(record2.binding, binding) || !record2.conflict) {
            done({ status: "stale" });
            return;
          }
          if (record2.localRevision !== expectedRevision) {
            done({ status: "local-conflict", record: record2 });
            return;
          }
          if (!expectedConflictId || record2.conflict.id !== expectedConflictId) {
            done({ status: "stale", record: record2 });
            return;
          }
          choose(record2, tx, record2.conflict.remote, choice);
          write(tx, record2, done);
        });
      },
      listRecovery: (profileId) => transaction(["recovery"], "readonly", ({ tx, done, guard }) => {
        const request = tx.objectStore("recovery").index("profileId").getAll(profileId);
        request.onsuccess = guard(() => done(request.result.filter((row) => row.gameId === gameId && row.curriculumId === curriculumId).sort((a, b) => b.createdAt.localeCompare(a.createdAt))));
      }),
      removeProfile: (profileId) => transaction(["profiles", "records", "recovery"], "readwrite", ({ tx, get, done }) => {
        tx.objectStore("profiles").delete(profileId);
        get("records", void 0, (rows) => {
          for (const row of rows) if (row.profileId === profileId) tx.objectStore("records").delete(row.key);
        });
        get("recovery", void 0, (rows) => {
          for (const row of rows) if (row.profileId === profileId) tx.objectStore("recovery").delete(row.id);
        });
        done(void 0);
      })
    };
    return api;
  }

  // public/lib/memory-store.js
  function createMemoryStore(normalize2) {
    const profiles = /* @__PURE__ */ new Map(), records = /* @__PURE__ */ new Map();
    return {
      close() {
      },
      async listProfiles() {
        return [...profiles.values()].map((value) => structuredClone(value));
      },
      async createProfile(label, snapshot) {
        if (profiles.size >= 8) throw new Error("There are already eight profiles in this session.");
        if (typeof label !== "string" || !label.trim() || label.trim().length > 60) throw new Error("Use a nickname of 1 to 60 characters.");
        const value = normalize2(snapshot);
        const profile2 = { id: crypto.randomUUID(), label: label.trim(), createdAt: (/* @__PURE__ */ new Date()).toISOString() };
        profiles.set(profile2.id, profile2);
        records.set(profile2.id, { profileId: profile2.id, snapshot: value, localRevision: 1, binding: null, needsUpload: false, conflict: null });
        return structuredClone(profile2);
      },
      async load(id) {
        return structuredClone(records.get(id) ?? null);
      },
      async save(id, snapshot, expectedRevision) {
        const record2 = records.get(id);
        if (!record2) throw new Error("This local profile no longer exists.");
        if (record2.localRevision !== expectedRevision) return { status: "local-conflict", record: structuredClone(record2) };
        record2.snapshot = normalize2(snapshot);
        record2.localRevision++;
        return { status: "saved", record: structuredClone(record2) };
      },
      async listRecovery() {
        return [];
      },
      async removeProfile(id) {
        profiles.delete(id);
        records.delete(id);
      }
    };
  }

  // public/lib/cloud-config.js
  var CloudError = class extends Error {
    constructor(code, message2) {
      super(message2);
      this.name = "CloudError";
      this.code = code;
    }
  };
  function parseCloudConfig(raw) {
    if (!raw || raw.enabled !== true) return null;
    let url;
    try {
      url = new URL(raw.url);
    } catch {
      throw new CloudError("configuration", "Cloud saves need a valid HTTPS address in the host configuration.");
    }
    if (url.protocol !== "https:" || url.username || url.password || url.search || url.hash || url.pathname !== "/") {
      throw new CloudError("configuration", "Cloud saves need an HTTPS origin without a path, password or query.");
    }
    if (typeof raw.publishableKey !== "string" || !/^sb_publishable_[A-Za-z0-9_-]{20,}$/.test(raw.publishableKey)) {
      throw new CloudError("configuration", "Cloud saves need a Supabase publishable key. Secret keys and legacy keys are not accepted.");
    }
    const label = typeof raw.label === "string" && raw.label.trim() ? raw.label.trim().slice(0, 60) : "This host\u2019s cloud saves";
    return Object.freeze({ backend: url.origin, publishableKey: raw.publishableKey, label });
  }

  // public/lib/cloud-transport.js
  var UUID2 = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  var PROFILE_FIELDS = "owner_id,id,label";
  var SAVE_FIELDS = "owner_id,profile_id,game_id,curriculum_id,format_version,snapshot,revision,write_id";
  var stale = () => new CloudError("disconnected", "Cloud saves are disconnected. Your device progress stays here.");
  function safeError(error) {
    if (error instanceof CloudError) return error;
    if (error?.code === "otp_expired") return new CloudError("invalid-code", "That code is incorrect or expired. Check it or request a new code.");
    if (Number(error?.status) === 429) return new CloudError("rate-limit", "Too many sign-in attempts. Wait a little before trying again.");
    if ([401, 403].includes(Number(error?.status))) return new CloudError("auth-required", "Sign in again to finish saving. Your device progress is safe.");
    return new CloudError("unavailable", "Cloud saves are unavailable. Your device progress is still saved here; try again later.");
  }
  function createCloudConnection(config, {
    gameId,
    curriculumId,
    normalize: normalize2,
    loadSDK = () => import("../vendor/supabase.js"),
    nativeFetch = globalThis.fetch.bind(globalThis),
    onStatus = () => {
    }
  } = {}) {
    config = parseCloudConfig({ enabled: true, url: config?.backend, publishableKey: config?.publishableKey, label: config?.label });
    let active = true, client = null, subscription = null, ownerId = null, email = null;
    let loginBusy = false, resendAfter = 0, authLost = false;
    const lifetime = new AbortController();
    const assertActive = () => {
      if (!active) throw stale();
    };
    const publishStatus = (status) => {
      if (active) {
        try {
          onStatus(status);
        } catch {
        }
      }
    };
    const dispose = () => {
      subscription?.unsubscribe();
      client?.auth.dispose();
    };
    const disconnect = () => {
      if (!active) return;
      active = false;
      lifetime.abort();
      ownerId = null;
      email = null;
      dispose();
    };
    const guardedFetch = async (input, init2 = {}) => {
      assertActive();
      const target = new URL(typeof input === "string" || input instanceof URL ? input : input.url);
      if (target.origin !== config.backend || !/^\/(auth|rest)\/v1\//.test(target.pathname)) {
        throw new CloudError("configuration", "Cloud request destination was rejected.");
      }
      const signals = [lifetime.signal, init2.signal, typeof input === "object" ? input.signal : null].filter(Boolean);
      const response = await nativeFetch(input, { ...init2, signal: AbortSignal.any(signals), credentials: "omit", redirect: "error" });
      assertActive();
      return response;
    };
    const ready = (async () => {
      try {
        const { createClient } = await loadSDK();
        assertActive();
        client = createClient(config.backend, config.publishableKey, {
          auth: { persistSession: false, detectSessionInUrl: false, autoRefreshToken: false, debug: false, storageKey: `learning-cloud-${crypto.randomUUID()}` },
          db: { retry: false },
          global: { fetch: guardedFetch }
        });
        const result = await client.auth.initialize();
        assertActive();
        if (result.error) throw result.error;
        await client.auth.stopAutoRefresh();
        assertActive();
        subscription = client.auth.onAuthStateChange((_event, session) => {
          if (!active || !ownerId) return;
          if (session && session.user.id !== ownerId) {
            disconnect();
            return;
          }
          if (!session) {
            authLost = true;
            publishStatus("auth-required");
          }
        }).data.subscription;
      } catch (error) {
        if (!active) {
          dispose();
          throw stale();
        }
        disconnect();
        throw safeError(error);
      }
    })();
    ready.catch(() => {
    });
    async function call(operation, requiresOwner = true) {
      try {
        await ready;
        assertActive();
        if (requiresOwner && (!ownerId || authLost)) throw new CloudError("auth-required", "Sign in to use cloud saves.");
        const result = await operation(client);
        assertActive();
        if (result?.error) throw result.error;
        return result?.data;
      } catch (error) {
        if (!active) throw stale();
        throw safeError(error);
      }
    }
    const owned = (binding) => {
      const value = validateBinding(binding);
      assertActive();
      if (value.backend !== config.backend || value.ownerId !== ownerId || authLost) throw new CloudError("auth-required", "Sign in to the original account and cloud destination for this profile.");
      return value;
    };
    const profileValue = (row) => {
      if (!row || row.owner_id !== ownerId || !UUID2.test(row.id) || typeof row.label !== "string" || !row.label.trim() || row.label.length > 60) throw new CloudError("invalid", "The cloud returned an invalid learner profile.");
      return { id: row.id, label: row.label };
    };
    const cleanSnapshot = (snapshot) => {
      let clean;
      try {
        clean = normalize2(structuredClone(snapshot));
      } catch {
        throw new CloudError("invalid", "This cloud progress needs a different app version or a recovery export.");
      }
      if (new TextEncoder().encode(JSON.stringify(clean)).length > 1048576) throw new CloudError("invalid", "Cloud progress is too large to load safely.");
      return clean;
    };
    function remoteValue(row, binding) {
      if (row === null) return null;
      if (!row || !row.snapshot || typeof row.snapshot !== "object" || Array.isArray(row.snapshot) || !Number.isInteger(row.format_version) || row.owner_id !== binding.ownerId || row.profile_id !== binding.profileId || row.game_id !== gameId || row.curriculum_id !== curriculumId || !Number.isSafeInteger(row.revision) || row.revision < 1 || !UUID2.test(row.write_id) || row.format_version !== row.snapshot.formatVersion) throw new CloudError("invalid", "The cloud returned an unexpected learning record.");
      return { snapshot: cleanSnapshot(row.snapshot), revision: row.revision, writeId: row.write_id };
    }
    const filtered = (query, binding) => query.eq("owner_id", binding.ownerId).eq("profile_id", binding.profileId).eq("game_id", gameId).eq("curriculum_id", curriculumId);
    async function read(binding) {
      owned(binding);
      const data = await call((sdk) => filtered(sdk.from("learning_saves").select(SAVE_FIELDS), binding).maybeSingle());
      owned(binding);
      return remoteValue(data, binding);
    }
    function reconcile(remote, inflight) {
      if (remote?.writeId === inflight.writeId) {
        if (remote.revision !== inflight.expectedRemoteRevision + 1 || JSON.stringify(remote.snapshot) !== JSON.stringify(inflight.snapshot)) throw new CloudError("invalid", "The cloud acknowledgement does not match this saved attempt.");
        return { status: "saved", remote };
      }
      if ((remote?.revision ?? 0) !== inflight.expectedRemoteRevision) return { status: "conflict", remote };
      return null;
    }
    return {
      ready,
      disconnect,
      get active() {
        return active;
      },
      get ownerId() {
        return ownerId;
      },
      get backend() {
        return config.backend;
      },
      owns: (binding) => active && !authLost && !!ownerId && binding?.backend === config.backend && binding.ownerId === ownerId,
      async sendCode(address) {
        if (loginBusy) throw new CloudError("busy", "Please wait for the current sign-in request.");
        if (typeof address !== "string" || address.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(address.trim())) throw new CloudError("invalid", "Enter an adult email address.");
        const next = address.trim();
        if (email && email !== next) throw new CloudError("new-connection", "Cancel this sign-in before changing the email address.");
        if (ownerId) throw new CloudError("new-connection", "Disconnect before signing in to another account.");
        if (Date.now() < resendAfter) throw new CloudError("cooldown", "Wait one minute before requesting another code.");
        loginBusy = true;
        email = next;
        try {
          await call((sdk) => sdk.auth.signInWithOtp({ email: next, options: { shouldCreateUser: true } }), false);
          resendAfter = Date.now() + 6e4;
        } finally {
          loginBusy = false;
        }
      },
      async verifyCode(code) {
        if (loginBusy) throw new CloudError("busy", "Please wait for the current sign-in request.");
        if (!email || !/^\d{6,10}$/.test(code)) throw new CloudError("invalid", "Enter the code from your email.");
        loginBusy = true;
        const sentTo = email;
        try {
          const data = await call((sdk) => sdk.auth.verifyOtp({ email: sentTo, token: code, type: "email" }), false);
          if (!data?.session || !UUID2.test(data.user?.id) || data.session.user?.id !== data.user.id) throw new CloudError("invalid", "Sign-in did not return a valid account.");
          ownerId = data.user.id;
          authLost = false;
          email = null;
          return ownerId;
        } finally {
          loginBusy = false;
        }
      },
      async listProfiles() {
        const data = await call((sdk) => sdk.from("learning_profiles").select(PROFILE_FIELDS).eq("owner_id", ownerId).order("created_at"));
        if (!Array.isArray(data)) throw new CloudError("invalid", "The cloud returned an invalid learner list.");
        return data.map(profileValue);
      },
      async createProfile(label) {
        if (typeof label !== "string" || !label.trim() || label.trim().length > 60) throw new CloudError("invalid", "Use a nickname of 1 to 60 characters.");
        const data = await call((sdk) => sdk.from("learning_profiles").insert({ owner_id: ownerId, label: label.trim() }).select(PROFILE_FIELDS).single());
        return profileValue(data);
      },
      read,
      async write(binding, inflight) {
        owned(binding);
        if (!inflight || !UUID2.test(inflight.writeId) || !Number.isSafeInteger(inflight.expectedRemoteRevision) || inflight.expectedRemoteRevision < 0) throw new CloudError("invalid", "Invalid pending cloud save.");
        const snapshot = cleanSnapshot(inflight.snapshot);
        const attempt = { ...inflight, snapshot };
        const existing = await read(binding);
        const recovered = reconcile(existing, attempt);
        if (recovered) return recovered;
        const payload = { snapshot, format_version: snapshot.formatVersion, write_id: attempt.writeId };
        const outcome = await call(async (sdk) => {
          const result2 = attempt.expectedRemoteRevision === 0 ? await sdk.from("learning_saves").insert({ ...payload, owner_id: binding.ownerId, profile_id: binding.profileId, game_id: gameId, curriculum_id: curriculumId }).select(SAVE_FIELDS) : await filtered(sdk.from("learning_saves").update(payload), binding).eq("revision", attempt.expectedRemoteRevision).select(SAVE_FIELDS);
          if (result2.error?.code === "23505") return { data: [] };
          return result2;
        });
        owned(binding);
        if (!Array.isArray(outcome) || outcome.length > 1) throw new CloudError("invalid", "The cloud returned an unexpected save response.");
        const remote = outcome.length === 1 ? remoteValue(outcome[0], binding) : await read(binding);
        const result = reconcile(remote, attempt);
        if (result) return result;
        throw new CloudError("unavailable", "This save was not acknowledged. It stays queued on this device.");
      }
    };
  }
  async function flushOne(store2, profileId, connection) {
    const record2 = await store2.load(profileId);
    if (!record2 || !connection.owns(record2.binding)) return { status: "disconnected" };
    const pending = await store2.beginFlush(profileId, record2.binding);
    if (!pending) return { status: record2.conflict ? "cloud-conflict" : "idle" };
    if (!connection.owns(pending.binding)) return { status: "disconnected" };
    const result = await connection.write(pending.binding, pending.inflight);
    if (!connection.owns(pending.binding)) return { status: "disconnected" };
    if (result.status === "saved") return store2.acknowledge(profileId, pending.binding, pending.inflight.writeId, result.remote.revision);
    return store2.markConflict(profileId, pending.binding, pending.inflight.writeId, result.remote);
  }

  // public/lib/cloud-panel.js
  function createCloudPanel(root, options) {
    const { store: store2, durable: durable2, normalize: normalize2, curriculumId, getProfile, isBusy, onChange, onRestore, onProfilesCleared, onMessage, describe } = options;
    let config = null, connection = null, generation = 0, view = 0, timer = null, failures = 0, running = null;
    const status = document.createElement("p");
    status.setAttribute("role", "status");
    status.className = "cloud-status";
    const content = document.createElement("div");
    root.append(content, status);
    const say = (text) => {
      status.textContent = text;
    };
    const paragraph = (text) => {
      const p = document.createElement("p");
      p.textContent = text;
      content.append(p);
      return p;
    };
    function button(label, action, parent = content) {
      const button2 = document.createElement("button");
      button2.type = "button";
      button2.textContent = label;
      button2.addEventListener("click", async () => {
        if (button2.disabled) return;
        button2.disabled = true;
        try {
          await action();
        } catch (error) {
          if (error.code !== "disconnected") say(error.message || "That action could not be completed. Your progress is still here.");
        } finally {
          button2.disabled = false;
        }
      });
      parent.append(button2);
      return button2;
    }
    function retire() {
      generation++;
      view++;
      clearTimeout(timer);
      timer = null;
      failures = 0;
      running = null;
      connection?.disconnect();
      connection = null;
    }
    const alive = (original, token) => connection === original && generation === token && original.active;
    function localActionsAllowed() {
      if (isBusy()) {
        say("Finish the current answer or export unsaved progress before changing cloud profiles.");
        return false;
      }
      return true;
    }
    async function flush() {
      const selected = getProfile(), original = connection, token = generation;
      if (!selected || !original?.ownerId) return;
      if (running?.token === token) {
        running.again = true;
        return;
      }
      const work = { token };
      running = work;
      try {
        for (let i = 0; i < 8 && alive(original, token); i++) {
          const result = await flushOne(store2, selected.id, original);
          if (!alive(original, token)) return;
          if (result.status !== "saved") break;
        }
        if (!alive(original, token)) return;
        failures = 0;
        await onChange();
        const record2 = await store2.load(selected.id);
        if (!alive(original, token)) return;
        if (record2?.conflict) say("Another device changed this learner. Choose which progress to keep below.");
        else if (record2 && original.owns(record2.binding) && !record2.needsUpload) say("Cloud saved. Your copy also stays on this device.");
        if (root.closest("dialog")?.open) await renderConnected();
        if (record2?.needsUpload && !record2.conflict && original.owns(record2.binding)) queue(1e3);
      } catch (error) {
        if (!alive(original, token)) return;
        say(error.message);
        await onChange();
        if (error.code === "unavailable" && failures < 5) {
          failures++;
          queue(Math.min(6e4, 2e3 * 2 ** failures) + Math.floor(Math.random() * 500));
        }
      } finally {
        if (running === work) {
          running = null;
          if (work.again && alive(original, token)) queue();
        }
      }
    }
    function queue(delay = 0) {
      if (!connection?.ownerId) return;
      clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        void flush();
      }, delay);
    }
    function initial() {
      content.replaceChildren();
      paragraph("Cloud saves are optional. Play and save on this device without an account.");
      if (!durable2) {
        paragraph("Cloud saves need working browser storage. This session can be exported instead.");
        return;
      }
      if (location.protocol === "file:") {
        paragraph("This downloaded copy works offline. To save across devices, use a hosted copy whose owner has set up cloud saves. You can also move progress with Export and Import.");
        return;
      }
      button("Explore cloud saves", async () => {
        const token = ++view;
        say("Checking this host\u2019s cloud configuration\u2026");
        try {
          const response = await fetch(new URL("./cloud-config.local.json", document.baseURI), { credentials: "omit", redirect: "error", cache: "no-store" });
          if (token !== view) return;
          if (!response.ok) {
            say("This host has not enabled cloud saves. Device saves and exports still work.");
            return;
          }
          const text = await response.text();
          if (text.length > 16384) throw new Error("This host\u2019s cloud configuration is too large.");
          config = parseCloudConfig(JSON.parse(text));
          if (token !== view) return;
          if (!config) {
            say("This host has not enabled cloud saves. Device saves and exports still work.");
            return;
          }
          renderLogin();
        } catch (error) {
          say(error.code === "configuration" ? error.message : "This host\u2019s cloud configuration could not be loaded. Device saves still work.");
        }
      });
      const help = document.createElement("a");
      help.href = "https://github.com/jessecmaddox3/color-learning/blob/main/docs/cloud-setup.md";
      help.textContent = "Cloud setup instructions for the host";
      content.append(help);
    }
    function renderLogin() {
      content.replaceChildren();
      view++;
      paragraph(`${config.label}: ${config.backend}`);
      paragraph("An adult can sign in by email code. Continuing creates an account if needed. Only learner nicknames and learning progress you choose are uploaded. Your email goes to this cloud provider for sign-in.");
      const form = document.createElement("form");
      form.className = "settings-form";
      const label = document.createElement("label");
      label.textContent = "Adult email";
      label.htmlFor = "cloud-email";
      const input = document.createElement("input");
      input.id = "cloud-email";
      input.type = "email";
      input.required = true;
      input.maxLength = 254;
      input.autocomplete = "email";
      const submit = document.createElement("button");
      submit.type = "submit";
      submit.textContent = "Email me a code";
      form.append(label, input, submit);
      content.append(form);
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (submit.disabled) return;
        submit.disabled = true;
        retire();
        const token = generation;
        const original = createCloudConnection(config, { gameId: "colors", curriculumId, normalize: normalize2, onStatus: (value) => {
          if (value === "auth-required") say("Sign in again to finish saving.");
        } });
        connection = original;
        const address = input.value.trim();
        try {
          await original.sendCode(address);
          if (alive(original, token)) renderCode(original, token, address);
        } catch (error) {
          if (alive(original, token)) say(error.message);
        } finally {
          submit.disabled = false;
        }
      });
      button("Cancel cloud sign-in", () => {
        retire();
        config = null;
        initial();
        say("Cloud sign-in cancelled. Local progress stays on this device.");
      });
      say("No cloud account is needed to play locally.");
    }
    function renderCode(original, token, address) {
      content.replaceChildren();
      view++;
      paragraph("Check the adult email inbox for a sign-in code. Leave this page open while you check.");
      const form = document.createElement("form");
      form.className = "settings-form";
      const label = document.createElement("label");
      label.textContent = "Email code";
      label.htmlFor = "cloud-code";
      const input = document.createElement("input");
      input.id = "cloud-code";
      input.required = true;
      input.inputMode = "numeric";
      input.autocomplete = "one-time-code";
      input.pattern = "[0-9]{6,10}";
      input.maxLength = 10;
      const submit = document.createElement("button");
      submit.type = "submit";
      submit.textContent = "Sign in";
      form.append(label, input, submit);
      content.append(form);
      form.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (submit.disabled || !alive(original, token)) return;
        submit.disabled = true;
        try {
          await original.verifyCode(input.value.trim());
          if (alive(original, token)) {
            input.value = "";
            await renderConnected();
            queue();
          }
        } catch (error) {
          if (alive(original, token)) say(error.message);
        } finally {
          submit.disabled = false;
        }
      });
      button("Send a new code", async () => {
        await original.sendCode(address);
        if (alive(original, token)) say("A new code was requested. Check your email.");
      });
      button("Cancel or change email", () => {
        retire();
        renderLogin();
      });
      say("Codes may take a moment to arrive. You can request another after one minute.");
      input.focus();
    }
    async function renderConnected() {
      if (!connection?.ownerId) return;
      const original = connection, token = generation, rendering = ++view;
      content.replaceChildren();
      paragraph(`Connected to ${config.label} (${config.backend}).`);
      paragraph("Disconnect ends this browser connection. Downloaded progress stays on this device until you remove it. Sign in again when you want to resume cloud saving.");
      button("Disconnect cloud saves", () => {
        retire();
        initial();
        say("Disconnected. Downloaded progress and waiting saves remain on this device.");
      });
      button("Retry cloud saving", async () => {
        failures = 0;
        queue();
      });
      button("Remove this account\u2019s downloaded learners", async () => {
        if (!localActionsAllowed() || !confirm("Remove this account\u2019s downloaded learners and recovery copies from this device? Cloud copies will remain. Export any backups first.")) return;
        const profiles = await store2.listProfiles();
        for (const profile2 of profiles) {
          const record2 = await store2.load(profile2.id);
          if (!alive(original, token)) return;
          if (original.owns(record2?.binding)) await store2.removeProfile(profile2.id);
        }
        if (!alive(original, token)) return;
        await onProfilesCleared();
        await renderConnected();
        say("Downloaded learners for this account were removed from this device. Cloud copies remain.");
      });
      const selected = getProfile();
      if (selected) {
        const local = await store2.load(selected.id);
        if (!alive(original, token) || rendering !== view) return;
        paragraph(`Current local learner: ${selected.label}. ${describe(local.snapshot)}.`);
        if (local.conflict && original.owns(local.binding)) {
          const remote = local.conflict.remote;
          paragraph(remote ? `Another device saved: ${describe(remote.snapshot)}. No versions have been merged.` : "The cloud copy is missing. Your device copy remains available.");
          for (const choice of remote ? ["device", "cloud"] : ["device"]) {
            button(choice === "device" ? "Keep this device\u2019s progress" : "Use the cloud progress shown above", async () => {
              if (!localActionsAllowed()) return;
              const result = await store2.resolveConflict(selected.id, local.binding, local.localRevision, choice, local.conflict.id);
              if (!alive(original, token)) return;
              await onChange();
              await renderConnected();
              if (result.status === "saved") {
                say("Your choice was saved. A recovery copy keeps the other version.");
                queue();
              } else say("Progress changed while this choice was open. Review the latest versions before choosing again.");
            });
          }
        }
        button(`Save ${selected.label} as a new cloud learner`, async () => {
          if (!localActionsAllowed()) return;
          const current = await store2.load(selected.id);
          if (!alive(original, token)) return;
          const remoteProfile = await original.createProfile(selected.label);
          if (!alive(original, token)) return;
          const result = await store2.attach(selected.id, { backend: config.backend, ownerId: original.ownerId, profileId: remoteProfile.id }, current.localRevision, null, "device");
          if (!alive(original, token)) return;
          await onChange();
          await renderConnected();
          if (result.status === "saved") queue();
          else say("The local learner changed during setup. Select the new cloud learner below to review and attach it.");
        });
      }
      try {
        const profiles = await original.listProfiles();
        if (!alive(original, token) || rendering !== view) return;
        paragraph(profiles.length ? "Choose an existing cloud learner to preview or restore. Matching nicknames do not merge learners." : "This account has no cloud learners yet. Choose a local learner, then save it to cloud.");
        for (const remoteProfile of profiles) button(`Preview ${remoteProfile.label}`, () => preview(original, token, remoteProfile));
      } catch (error) {
        if (alive(original, token)) say(error.message);
      }
    }
    async function preview(original, token, remoteProfile) {
      const rendering = ++view;
      const binding = { backend: config.backend, ownerId: original.ownerId, profileId: remoteProfile.id };
      const remote = await original.read(binding);
      if (!alive(original, token) || rendering !== view) return;
      content.replaceChildren();
      paragraph(`Cloud learner: ${remoteProfile.label}.`);
      paragraph(remote ? `${describe(remote.snapshot)}. Local progress is replaced only if you choose that below.` : "This cloud learner has no saved progress yet.");
      if (remote) button("Restore as a new local learner", async () => {
        if (!localActionsAllowed()) return;
        const learner = await store2.createProfile(remoteProfile.label, remote.snapshot);
        if (!alive(original, token)) {
          await store2.removeProfile(learner.id);
          return;
        }
        await store2.attach(learner.id, binding, 1, remote, "cloud");
        if (!alive(original, token)) return;
        await onRestore(learner);
        say("Cloud progress restored. A copy now lives on this device too.");
      });
      const selected = getProfile();
      if (selected) {
        const local = await store2.load(selected.id);
        if (!alive(original, token) || rendering !== view) return;
        paragraph(`Local learner: ${selected.label}. ${describe(local.snapshot)}.`);
        for (const choice of remote ? ["cloud", "device"] : ["device"]) {
          button(choice === "cloud" ? `Use cloud progress for ${selected.label}` : `Use ${selected.label}\u2019s progress for this cloud learner`, async () => {
            if (!localActionsAllowed()) return;
            const result = await store2.attach(selected.id, binding, local.localRevision, remote, choice);
            if (!alive(original, token)) return;
            await onChange();
            await renderConnected();
            if (result.status === "saved") {
              say("Your choice was saved. The other version is available in a recovery export.");
              queue();
            } else say("The local learner changed. Preview again before choosing a version.");
          });
        }
      }
      button("Back to cloud learners", renderConnected);
      button("Disconnect cloud saves", () => {
        retire();
        initial();
        say("Disconnected. Local copies remain on this device.");
      });
    }
    initial();
    window.addEventListener("online", () => {
      failures = 0;
      queue();
    });
    return { queue, renderConnected, disconnect: retire };
  }

  // public/app.js
  var $ = (id) => document.getElementById(id);
  var byId = Object.fromEntries(colors_default.map((color) => [color.id, color]));
  var { order, assumedKnownCount } = buildLearningOrder(colors_default);
  var hueSorted = sortByHue(colors_default);
  var normalize = (snapshot) => snapshotForState(restoreSnapshot(snapshot, order, assumedKnownCount));
  var initialSnapshot = () => normalize(void 0);
  var store;
  var durable = true;
  var profile = null;
  var record = null;
  var state = null;
  var accepting = false;
  var busy = false;
  var saveFailed = false;
  var epoch = 0;
  var feedbackTimer = null;
  var lastTarget = null;
  var currentTarget = null;
  var cloud = null;
  function message(text = "") {
    for (const id of ["notice", "settings-notice"]) {
      $(id).textContent = text;
      $(id).hidden = !text;
    }
  }
  function updateStatus() {
    $("save-status").textContent = !durable || saveFailed ? "Progress is not being saved on this device. Export a copy before closing." : !profile ? "Progress stays on this device unless you choose cloud saves." : record?.conflict ? "Another device changed this progress. Open Settings to choose a version." : record?.binding && record.needsUpload ? "Saved on this device. Waiting to upload." : record?.binding ? "Saved on this device and last saved to cloud." : "Saved on this device.";
    $("current-learner").textContent = profile?.label ?? "Choose a learner";
    $("switch-profile").hidden = !profile;
    for (const id of ["export-progress", "reset-progress", "remove-profile"]) $(id).disabled = !profile || busy;
    $("reset-progress").disabled = !state || busy;
    $("export-recovery").disabled = !profile;
    $("settings-profile").textContent = profile ? `Settings for ${profile.label}` : "Learners and saving";
  }
  function stopQuestion() {
    epoch++;
    clearTimeout(feedbackTimer);
    accepting = false;
    currentTarget = null;
  }
  function shuffle(values) {
    const shuffled = [...values];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  }
  function renderSpectrum() {
    const canvas = $("spectrum-canvas");
    if (!state) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect(), vertical = rect.height >= rect.width;
    canvas.width = vertical ? 1 : hueSorted.length;
    canvas.height = vertical ? hueSorted.length : 1;
    const mastered = new Set(state.masteredIds), active = new Set(state.activeBatchIds);
    hueSorted.forEach((color, i) => {
      ctx.globalAlpha = mastered.has(color.id) ? 1 : active.has(color.id) ? 0.55 : 0.12;
      ctx.fillStyle = color.hex;
      ctx.fillRect(vertical ? 0 : i, vertical ? i : 0, 1, 1);
    });
  }
  function renderQuestion() {
    if (!profile || !state) return;
    clearTimeout(feedbackTimer);
    currentTarget = selectTarget(state, lastTarget);
    $("choices").replaceChildren();
    $("feedback").hidden = true;
    $("stats").textContent = `${state.masteredIds.length} mastered \xB7 ${state.activeBatchIds.length} in progress`;
    $("complete").hidden = currentTarget !== null;
    $("question").hidden = currentTarget === null;
    accepting = currentTarget !== null;
    if (currentTarget !== null) {
      $("swatch").style.backgroundColor = byId[currentTarget].hex;
      const choices = shuffle([currentTarget, ...selectDistractors(currentTarget, byId, [...state.activeBatchIds, ...state.masteredIds])]);
      for (const id of choices) {
        const button = document.createElement("button");
        button.className = "choice-btn";
        button.type = "button";
        button.dataset.colorId = id;
        button.textContent = byId[id].name;
        button.addEventListener("click", () => onAnswer(id));
        $("choices").append(button);
      }
    }
    renderSpectrum();
  }
  async function refreshProfiles() {
    const profiles = await store.listProfiles();
    $("known-learners").replaceChildren();
    $("known-learners").hidden = profiles.length === 0;
    for (const learner of profiles) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "continue-btn";
      button.textContent = `Continue as ${learner.label}`;
      button.addEventListener("click", () => start(learner));
      $("known-learners").append(button);
    }
    $("create-learner").disabled = profiles.length >= 8;
    $("profile-limit").hidden = profiles.length < 8;
  }
  async function start(learner) {
    if (busy) return;
    busy = true;
    stopQuestion();
    $("recovery-copies").replaceChildren();
    $("recovery-copies").hidden = true;
    const started = epoch;
    try {
      const saved = await store.load(learner.id);
      if (!saved) throw new Error("That learner was removed in another tab. Choose another one.");
      profile = learner;
      record = saved;
      state = null;
      const restored = restoreSnapshot(saved.snapshot, order, assumedKnownCount);
      if (started !== epoch) return;
      profile = learner;
      record = saved;
      state = restored;
      saveFailed = false;
      lastTarget = null;
      $("name-screen").hidden = true;
      $("quiz-screen").hidden = false;
      $("spectrum").hidden = false;
      message();
      renderQuestion();
      cloud?.queue();
    } catch (error) {
      $("name-screen").hidden = false;
      $("quiz-screen").hidden = true;
      $("spectrum").hidden = true;
      message(`${error.message} You can keep a copy with Export progress in Settings.`);
    } finally {
      busy = false;
      updateStatus();
    }
  }
  async function persist(next) {
    const id = profile.id, current = epoch;
    const value = snapshotForState(next, record.snapshot);
    state = next;
    try {
      const result = await store.save(id, value, record.localRevision);
      if (epoch !== current || profile?.id !== id) return false;
      if (result.status === "local-conflict") {
        record = result.record;
        state = restoreSnapshot(record.snapshot, order, assumedKnownCount);
        message("Another tab saved first. Its progress is loaded here. Your other answer was kept in a recovery copy in Settings.");
        saveFailed = false;
        return false;
      }
      record = result.record;
      saveFailed = false;
      cloud?.queue();
      return true;
    } catch {
      saveFailed = true;
      message("Your browser could not save this change. You can keep playing, but export your progress before leaving.");
      return false;
    } finally {
      updateStatus();
    }
  }
  async function onAnswer(choiceId) {
    if (!accepting || busy || !currentTarget) return;
    accepting = false;
    busy = true;
    const answered = epoch, target = currentTarget, correct = choiceId === target;
    for (const button of $("choices").children) {
      button.disabled = true;
      if (button.dataset.colorId === target) button.classList.add("correct");
      else if (button.dataset.colorId === choiceId) button.classList.add("incorrect");
    }
    $("feedback").hidden = false;
    $("feedback").textContent = correct ? "Correct!" : `That was ${byId[target].name}.`;
    const started = performance.now();
    try {
      await persist(recordAnswer(state, target, correct));
    } finally {
      busy = false;
      if (epoch === answered) {
        lastTarget = target;
        feedbackTimer = setTimeout(renderQuestion, Math.max(0, 900 - (performance.now() - started)));
      }
      updateStatus();
    }
  }
  function download(value, filename) {
    const url = URL.createObjectURL(new Blob([JSON.stringify(value, null, 2)], { type: "application/json" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1e3);
  }
  function exportProgress() {
    if (!profile || !record) return;
    download({ app: "color-learning", formatVersion: 1, curriculumId: CURRICULUM_ID, label: profile.label, exportedAt: (/* @__PURE__ */ new Date()).toISOString(), snapshot: state ? snapshotForState(state, record.snapshot) : record.snapshot }, "colors-progress.json");
  }
  async function showProfiles() {
    if (busy) return;
    if (saveFailed && !confirm("Your latest progress is not saved. Export it in Settings first, or choose OK to leave it behind.")) return;
    stopQuestion();
    profile = null;
    record = null;
    state = null;
    saveFailed = false;
    $("recovery-copies").replaceChildren();
    $("recovery-copies").hidden = true;
    $("quiz-screen").hidden = true;
    $("spectrum").hidden = true;
    $("name-screen").hidden = false;
    await refreshProfiles();
    updateStatus();
    cloud?.renderConnected();
    $("name-input").focus();
  }
  async function refreshActive() {
    if (!profile || busy || saveFailed) return;
    const id = profile.id, current = epoch, latest = await store.load(profile.id);
    if (id !== profile?.id || current !== epoch || !latest || busy || saveFailed) return;
    const changed = latest.localRevision !== record.localRevision;
    record = latest;
    if (changed) {
      stopQuestion();
      state = restoreSnapshot(record.snapshot, order, assumedKnownCount);
      renderQuestion();
    }
    updateStatus();
  }
  $("name-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    if (busy) return;
    busy = true;
    try {
      const learner = await store.createProfile($("name-input").value, initialSnapshot());
      busy = false;
      await start(learner);
      $("name-input").value = "";
    } catch (error) {
      message(error.message);
    } finally {
      busy = false;
      updateStatus();
    }
  });
  $("switch-profile").addEventListener("click", () => showProfiles().catch(() => message("Could not load the learner list. Export your current progress before closing.")));
  $("open-settings").addEventListener("click", () => {
    updateStatus();
    $("settings").showModal();
    cloud?.renderConnected();
  });
  $("close-settings").addEventListener("click", () => $("settings").close());
  $("export-progress").addEventListener("click", exportProgress);
  $("export-recovery").addEventListener("click", async () => {
    if (!profile) return;
    try {
      const rows = await store.listRecovery(profile.id);
      if (!rows.length) {
        message("There are no recovery copies for this learner.");
        return;
      }
      const list = $("recovery-copies");
      list.replaceChildren();
      list.hidden = false;
      for (const copy of rows) {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = `Export: ${copy.reason}, ${new Date(copy.createdAt).toLocaleString()}`;
        const label = profile.label;
        button.addEventListener("click", () => download({ app: "color-learning", formatVersion: 1, curriculumId: CURRICULUM_ID, label, exportedAt: copy.createdAt, snapshot: copy.snapshot }, "colors-recovered-progress.json"));
        list.append(button);
      }
      message("Choose a recovery copy to export. Then use Import progress to restore it as a separate learner.");
    } catch {
      message("Recovery copies could not be read. Your current progress can still be exported.");
    }
  });
  $("import-progress").addEventListener("change", async (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file || busy) return;
    if (saveFailed && !confirm("Your current learner has unsaved progress. Export it first, or choose OK to leave it behind and import another learner.")) return;
    busy = true;
    try {
      if (file.size > 1048576) throw new Error("Choose a progress file smaller than 1 MB.");
      const data = JSON.parse(await file.text());
      if (data.app !== "color-learning" || data.formatVersion !== 1 || data.curriculumId !== CURRICULUM_ID || !data.snapshot || typeof data.label !== "string") throw new Error("Choose a Colors progress export from this curriculum.");
      const learner = await store.createProfile(data.label, normalize(data.snapshot));
      busy = false;
      await start(learner);
      $("settings").close();
    } catch (error) {
      message(error instanceof SyntaxError ? "That file is not a readable progress export." : error.message);
    } finally {
      busy = false;
      updateStatus();
    }
  });
  $("reset-progress").addEventListener("click", async () => {
    if (!profile || busy || !confirm(`Start ${profile.label} over with the eleven familiar colors? Export a copy first if you want to keep this progress.`)) return;
    busy = true;
    stopQuestion();
    try {
      await persist(restoreSnapshot(void 0, order, assumedKnownCount));
      renderQuestion();
    } finally {
      busy = false;
      updateStatus();
    }
  });
  $("remove-profile").addEventListener("click", async () => {
    if (!profile || busy || !confirm(`Remove ${profile.label} and their recovery copies from this device? Cloud copies are kept. Export first if you want a backup.`)) return;
    busy = true;
    stopQuestion();
    try {
      await store.removeProfile(profile.id);
      saveFailed = false;
      busy = false;
      $("settings").close();
      await showProfiles();
    } catch {
      message("This learner could not be removed. Their saved progress is still on this device.");
      renderQuestion();
    } finally {
      busy = false;
      updateStatus();
    }
  });
  window.addEventListener("resize", renderSpectrum);
  window.addEventListener("beforeunload", (event) => {
    if (saveFailed || busy) {
      event.preventDefault();
      event.returnValue = "";
    }
  });
  document.addEventListener("keydown", (event) => {
    if ($("settings").open || !accepting || !/^[1-4]$/.test(event.key) || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName)) return;
    $("choices").children[Number(event.key) - 1]?.click();
  });
  async function init() {
    try {
      store = await openProgressStore({ gameId: "colors", curriculumId: CURRICULUM_ID, normalize });
    } catch {
      durable = false;
      store = createMemoryStore(normalize);
    }
    cloud = createCloudPanel($("cloud-panel"), {
      store,
      durable,
      normalize,
      curriculumId: CURRICULUM_ID,
      getProfile: () => profile,
      getRecord: () => record,
      isBusy: () => busy || saveFailed || !!profile && !state,
      onChange: refreshActive,
      onRestore: async (learner) => {
        await start(learner);
        $("settings").close();
      },
      onProfilesCleared: showProfiles,
      onMessage: message,
      describe: (snapshot) => Array.isArray(snapshot?.masteredIds) && Array.isArray(snapshot?.activeBatchIds) ? `${snapshot.masteredIds.length} mastered, ${snapshot.activeBatchIds.length} in progress` : "This saved progress needs a different app version"
    });
    await refreshProfiles();
    updateStatus();
  }
  init().catch(() => {
    message("Saved profiles could not be loaded. Keep this browser\u2019s data until you can recover an export.");
    $("create-learner").disabled = true;
  });
})();
