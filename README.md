# Stocksunds IF – Begagnat & Bortskänkt

Statisk webbsida för att visa och dela ut kvarglömd utrustning och kläder från Stocksunds IF. Allt är gratis, med möjlighet att donera via Swish.

---

## 🚀 Publicera på GitHub Pages

1. Skapa ett nytt repository på GitHub (t.ex. `stocksunds-if-loppsmarknad`)
2. Ladda upp alla filer i den här mappen till repositoryt
3. Gå till **Settings → Pages** i repositoryt
4. Under **Source**, välj `main` (eller `master`) och mappen `/ (root)`
5. Klicka **Save** – sidan är live på `https://[ditt-användarnamn].github.io/stocksunds-if-loppsmarknad/`

---

## ✏️ Uppdatera innehållet

All data finns i **`data.js`**. Öppna den filen i en textredigerare (t.ex. Notepad, VS Code).

### Byt Swish-nummer
Längst upp i `data.js`:
```js
const SWISH_NUMBER = "123 456 78 90"; // ← BYT TILL RÄTT NUMMER
```

### Lägga till en artikel
Kopiera ett block och fyll i:
```js
{
  id: 20,                    // Unikt nummer (välj nästa lediga)
  kategori: "klader",        // "klader" eller "utrustning"
  subtyp: "troejor",         // Se lista nedan
  namn: "Träningströja",     // Namn som syns på sidan
  storlek: "M",              // Storlek (se storlekslista nedan)
  beskrivning: "Gult plagg", // Kort beskrivning
  bild: "troeja_m.jpg",      // Filnamn i /images/ – lämna "" för platshållare
  status: "ledig"            // "ledig", "reserverad" eller "borttagen"
},
```

### Subtypes (subtyp)
| Nyckel | Visas som |
|---|---|
| `troejor` | Tröjor |
| `shorts` | Shorts |
| `strumpor` | Strumpor |
| `jackor` | Jackor |
| `byxor` | Byxor / Tights |
| `handskar` | Handskar / Målvaktshandskar |
| `bollar` | Bollar |
| `vaeska` | Väskor |
| `ovrigt` | Övrigt |

### Storleksordning
Storlekar sorteras automatiskt i denna ordning:
`86 → 176` (barnstorlekar), sedan `XS S M L XL XXL`, sedan skostorlekar, sedan bollstorlekar.

### Lägga till bilder
1. Spara bildfilen (JPG eller PNG) i mappen `/images/`
2. Ange filnamnet i artikelns `bild`-fält, t.ex. `"bild": "shorts_svart_m.jpg"`

### Markera som reserverad / borttagen
```js
status: "reserverad"   // Visas som reserverad med tonad effekt
status: "borttagen"    // Syns inte alls på sidan
```

---

## 📁 Filstruktur
```
stocksunds-if-loppsmarknad/
├── index.html       ← Själva webbsidan (redigera inte om du inte kan HTML/JS)
├── data.js          ← All artikeldata – redigera den här!
├── images/          ← Lägg in artikelbilder här
└── README.md        ← Den här filen
```
