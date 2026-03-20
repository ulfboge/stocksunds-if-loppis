// ============================================================
// STOCKSUNDS IF – LOPPIS – ARTIKELDATA
// ============================================================
// Redigera den här filen för att lägga till/ta bort artiklar.
//
// KATEGORIER:
//   "klader"    → Kläder (grupperas automatiskt efter "subtyp")
//   "utrustning" → Utrustning (bollar, väskor, etc.)
//
// SUBTYPES FÖR KLÄDER (examples): "shorts", "troejor", "strumpor",
//   "jackor", "byxor", "overall", "handskar"
//
// STORLEK: Ange exakt storlek som visas, t.ex. "S", "M", "L", "XL",
//   "128", "140", "152", "164", "176", "XS", "XXL"
//   Lämna "" om ej relevant (t.ex. bollar)
//
// BILD: Lägg bilden i mappen /images/ och ange filnamnet här.
//   Lämna "" för att använda generisk platshållarbild.
//
// STATUS: "ledig" = tillgänglig | "reserverad" | "borttagen"
// ============================================================

const SWISH_NUMBER = "123 456 78 90"; // ← BYT TILL FÖRENINGENS SWISH-NUMMER

const ITEMS = [
  // ── KLÄDER – TRÖJOR ─────────────────────────────────────
  {
    id: 1,
    kategori: "klader",
    subtyp: "troejor",
    namn: "Matchdräkt tröja",
    storlek: "S",
    beskrivning: "Blå matchdräkt tröja, gott skick.",
    bild: "",
    status: "ledig"
  },
  {
    id: 2,
    kategori: "klader",
    subtyp: "troejor",
    namn: "Matchdräkt tröja",
    storlek: "M",
    beskrivning: "Blå matchdräkt tröja, gott skick.",
    bild: "",
    status: "ledig"
  },
  {
    id: 3,
    kategori: "klader",
    subtyp: "troejor",
    namn: "Matchdräkt tröja",
    storlek: "L",
    beskrivning: "Blå matchdräkt tröja, något blekt men funktionell.",
    bild: "",
    status: "ledig"
  },
  {
    id: 4,
    kategori: "klader",
    subtyp: "troejor",
    namn: "Träningströja",
    storlek: "140",
    beskrivning: "Gul träningströja, barnstorlek.",
    bild: "",
    status: "ledig"
  },
  {
    id: 5,
    kategori: "klader",
    subtyp: "troejor",
    namn: "Träningströja",
    storlek: "152",
    beskrivning: "Gul träningströja, barnstorlek.",
    bild: "",
    status: "ledig"
  },

  // ── KLÄDER – SHORTS ──────────────────────────────────────
  {
    id: 6,
    kategori: "klader",
    subtyp: "shorts",
    namn: "Matchshorts",
    storlek: "S",
    beskrivning: "Svarta matchshorts.",
    bild: "",
    status: "ledig"
  },
  {
    id: 7,
    kategori: "klader",
    subtyp: "shorts",
    namn: "Matchshorts",
    storlek: "M",
    beskrivning: "Svarta matchshorts.",
    bild: "",
    status: "ledig"
  },
  {
    id: 8,
    kategori: "klader",
    subtyp: "shorts",
    namn: "Matchshorts",
    storlek: "L",
    beskrivning: "Svarta matchshorts.",
    bild: "",
    status: "ledig"
  },
  {
    id: 9,
    kategori: "klader",
    subtyp: "shorts",
    namn: "Träningsshorts",
    storlek: "128",
    beskrivning: "Shorts för barn.",
    bild: "",
    status: "ledig"
  },
  {
    id: 10,
    kategori: "klader",
    subtyp: "shorts",
    namn: "Träningsshorts",
    storlek: "140",
    beskrivning: "Shorts för barn.",
    bild: "",
    status: "ledig"
  },

  // ── KLÄDER – STRUMPOR ────────────────────────────────────
  {
    id: 11,
    kategori: "klader",
    subtyp: "strumpor",
    namn: "Fotbollsstrumpor",
    storlek: "35-38",
    beskrivning: "Blå/gula matchstrumpor.",
    bild: "",
    status: "ledig"
  },
  {
    id: 12,
    kategori: "klader",
    subtyp: "strumpor",
    namn: "Fotbollsstrumpor",
    storlek: "39-42",
    beskrivning: "Blå/gula matchstrumpor.",
    bild: "",
    status: "ledig"
  },
  {
    id: 13,
    kategori: "klader",
    subtyp: "strumpor",
    namn: "Fotbollsstrumpor",
    storlek: "43-46",
    beskrivning: "Blå/gula matchstrumpor.",
    bild: "",
    status: "ledig"
  },

  // ── KLÄDER – JACKOR ──────────────────────────────────────
  {
    id: 14,
    kategori: "klader",
    subtyp: "jackor",
    namn: "Träningsjacka",
    storlek: "M",
    beskrivning: "Vindtät träningsjacka.",
    bild: "",
    status: "ledig"
  },
  {
    id: 15,
    kategori: "klader",
    subtyp: "jackor",
    namn: "Träningsjacka",
    storlek: "L",
    beskrivning: "Vindtät träningsjacka.",
    bild: "",
    status: "ledig"
  },

  // ── UTRUSTNING ───────────────────────────────────────────
  {
    id: 16,
    kategori: "utrustning",
    subtyp: "bollar",
    namn: "Fotboll strl 4",
    storlek: "4",
    beskrivning: "Träningsboll, lite sliten men fungerar bra.",
    bild: "",
    status: "ledig"
  },
  {
    id: 17,
    kategori: "utrustning",
    subtyp: "bollar",
    namn: "Fotboll strl 5",
    storlek: "5",
    beskrivning: "Träningsboll i gott skick.",
    bild: "",
    status: "ledig"
  },
  {
    id: 18,
    kategori: "utrustning",
    subtyp: "bollar",
    namn: "Fotboll strl 5",
    storlek: "5",
    beskrivning: "Träningsboll, behöver pumpas.",
    bild: "",
    status: "ledig"
  },
  {
    id: 19,
    kategori: "utrustning",
    subtyp: "vaeska",
    namn: "Träningsväska",
    storlek: "",
    beskrivning: "Stor träningsväska med klubblogo, lite sliten.",
    bild: "",
    status: "ledig"
  }
];

// Storleksordning för sortering
const SIZE_ORDER = [
  // Barnstorlekar numeriska
  "86","92","98","104","110","116","122","128","134","140","146","152","158","164","170","176",
  // Vuxen bokstavsstorlek
  "XS","S","M","L","XL","XXL","XXXL",
  // Skonummer / strumpor
  "25-27","28-30","31-34","35-38","39-42","43-46","47-50",
  // Bollstorlekar
  "1","2","3","4","5",
  // Övrigt
  ""
];

// Etikett för subtyp
const SUBTYP_LABELS = {
  troejor:   "Tröjor",
  shorts:    "Shorts",
  strumpor:  "Strumpor",
  jackor:    "Jackor",
  byxor:     "Byxor / Tights",
  handskar:  "Handskar / Målvaktshandskar",
  overall:   "Overall / Regnjacka",
  bollar:    "Bollar",
  vaeska:    "Väskor",
  ovrigt:    "Övrigt"
};
