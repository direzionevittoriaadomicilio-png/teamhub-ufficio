# 📱 Come installare TeamHub sul cellulare

## Struttura cartella da scaricare
```
teamhub/
├── index.html
├── package.json
├── vite.config.js
├── public/
│   ├── manifest.json
│   ├── sw.js
│   └── icon.svg
└── src/
    ├── main.jsx
    └── App.jsx
```

---

## PASSO 1 — Pubblica l'app online (una volta sola)

### Opzione A: Vercel (consigliata, gratuita)

1. Vai su **github.com** → crea account gratuito se non l'hai
2. Clicca **"New repository"** → dai un nome (es. `teamhub`) → crea
3. Carica tutti i file della cartella nel repository
4. Vai su **vercel.com** → "Continue with GitHub"
5. Clicca **"New Project"** → seleziona il repository `teamhub`
6. Clicca **"Deploy"** — Vercel fa tutto da solo
7. Ricevi un link tipo: `https://teamhub-xxxx.vercel.app`

### Opzione B: Netlify (alternativa, ugualmente gratuita)

1. Vai su **netlify.com** → crea account
2. Dal terminale nella cartella del progetto:
   ```
   npm install
   npm run build
   ```
3. Vai su **app.netlify.com/drop**
4. Trascina la cartella `dist` generata dal build
5. Ricevi un link tipo: `https://teamhub-xxxx.netlify.app`

---

## PASSO 2 — Installa sul cellulare come app

### iPhone (Safari)
1. Apri Safari e vai sul link dell'app
2. Tocca il pulsante **Condividi** (il quadrato con la freccia in su ↑)
3. Scorri e tocca **"Aggiungi alla schermata Home"**
4. Dai il nome "TeamHub" → tocca **Aggiungi**
5. L'icona appare sulla schermata Home come una vera app ✅

### Android (Chrome)
1. Apri Chrome e vai sul link dell'app
2. Tocca i **tre puntini** in alto a destra
3. Tocca **"Aggiungi a schermata Home"** o **"Installa app"**
4. Conferma → l'icona appare sulla schermata Home ✅

---

## Note
- L'app funziona **offline** per la navigazione base (i dati richiedono internet)
- Tutti i dati sono salvati su Supabase — condivisi tra tutti i dispositivi
- Ogni membro del team può installarla sul proprio cellulare con lo stesso link

---

## Aggiornare l'app

Se modifichi il codice (App.jsx), basta:
- Su **Vercel**: aggiorna il file su GitHub → Vercel ri-deploya automaticamente
- Su **Netlify**: ripeti il build e trascina la nuova cartella `dist`
