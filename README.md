# ProfSwipe Revamped 🎓

A Tinder-style Rate My Professor React app built with Vite + Tailwind v4 + DaisyUI v5.

## ⚡ Quick Start

```bash
# 1. Delete node_modules if you have them from before
rmdir /s /q node_modules

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev

# 4. Open in browser → http://localhost:5173
```

## 📁 Project Structure

```
profswipe/
├── public/
│   └── professors.json
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Header.jsx
│   │   ├── FilterBar.jsx
│   │   ├── SwipeStack.jsx
│   │   ├── ProfCard.jsx
│   │   ├── SavedDrawer.jsx
│   │   ├── ReviewedList.jsx
│   │   ├── Loader.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js   ← Tailwind v4 uses vite plugin (no postcss.config needed)
└── package.json
```


