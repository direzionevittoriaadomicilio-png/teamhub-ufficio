# 🚀 Deploy TeamHub su GitHub Pages

## STRUTTURA FILE DA CARICARE
```
teamhub-ufficio/
├── .github/
│   └── workflows/
│       └── deploy.yml
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── manifest.json
│   ├── sw.js
│   ├── icon-192.png
│   ├── icon-512.png
│   └── favicon.ico
└── src/
    ├── main.jsx
    └── App.jsx
```

---

## PASSO 1 — Crea il repository su GitHub
1. Vai su **github.com** → login
2. Clicca **+** → **New repository**
3. Nome: `teamhub-ufficio`
4. Lascia **Public**, NON spuntare "Add README"
5. Clicca **Create repository**

---

## PASSO 2 — Carica tutti i file (con GitHub Desktop)
1. Scarica **GitHub Desktop** da desktop.github.com
2. File → Clone repository → seleziona `teamhub-ufficio`
3. Scegli una cartella sul computer → Clone
4. Copia tutti i file nella cartella clonata (rispettando la struttura con src/ e public/)
5. GitHub Desktop mostrerà tutti i file modificati
6. Scrivi un messaggio es. "Prima versione" → **Commit to main** → **Push origin**

---

## PASSO 3 — Attiva GitHub Pages
1. Nel repository su github.com → **Settings**
2. Menu sinistra → **Pages**
3. In **Source** seleziona **GitHub Actions**
4. Salva

---

## PASSO 4 — Aspetta il deploy
1. Vai su **Actions** nel repository
2. Vedrai il build in corso (giallo 🟡) → verde ✅ in 1-2 minuti
3. Il link sarà: **https://TUO-USERNAME.github.io/teamhub-ufficio/**

---

## PASSO 5 — Installa sul cellulare

**iPhone (Safari):** Apri il link → Condividi ↑ → Aggiungi alla schermata Home

**Android (Chrome):** Apri il link → tre puntini → Installa app

---

## AGGIORNAMENTI FUTURI
Modifica un file su GitHub (matita ✏️) → GitHub ricompila e pubblica automaticamente in 2 minuti.

## ⚠️ ATTENZIONE
Se usi un nome repository diverso da `teamhub-ufficio`, aggiorna questa riga in `vite.config.js`:
`base: '/teamhub-ufficio/'` → metti il nome esatto del tuo repo.
