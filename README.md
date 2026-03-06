
# 🎓 ProfSwipe
A Tinder-style professor rating SPA — swipe right to approve, swipe left to skip. Built with React, Firebase, and a smooth DaisyUI interface.


## Live Link
(https://professorswipe.netlify.app/)

## About the App
ProfSwipe is a single-page application (SPA) that lets students swipe through professor cards in a Tinder-style interface. Guests can browse a limited preview of professors, while authenticated users unlock full access to filter, sort, like/dislike, and save professors to a watchlist.


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


