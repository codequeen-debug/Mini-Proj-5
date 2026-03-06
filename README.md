
# 🎓 ProfSwipe
A Tinder-style professor rating SPA — swipe right to approve, swipe left to skip. Built with React, Firebase, and a smooth DaisyUI interface.

## Team Members
Rich-Ann Campbell
Makayla Hardware
Sara-Lee Brown 

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
├── vite.config.js   ← Tailwind v4 uses a vite plugin (no postcss.config needed)
└── package.json

```

## 📄 Pages
Home / Landing Page
The default landing page. Guests are shown a limited preview of professor cards and a prompt to sign up for full access. Authenticated users are redirected to the Dashboard.

Signup Page
New users can create an account via:
Username & Password (with validation)
Google OAuth (via Firebase)

Login Page
Returning users log in with email/password or Google.

Dashboard 
Full access for authenticated users only. Features:

Full professor card swipe stack
Filter and sort by department, rating, etc.
Like / Dislike interactions
Save professors to a watchlist
Access to the Saved Drawer and Reviewed List

Error Pages
404 – Not FoundUser navigates to an invalid URL (e.g. /logging instead of /login)
401 – UnauthorizedGuest user attempts to access a protected route (e.g. /dashboard)


## 🔒 Guest vs. Authenticated Users

| Feature | Guest | Authenticated User |
|---|---|---|
| View limited professor cards | ✅ | ✅ |
| View all professors | ❌ | ✅ |
| Like / Dislike | ❌ | ✅ |
| Save to Watchlist | ❌ | ✅ |
| Filter & Sort | ❌ | ✅ |
| Access Dashboard | ❌ | ✅ |
| Download / Export | ❌ | ✅ |
