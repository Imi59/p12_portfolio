# p12_portfolio

# Création du projet

npm create vite@latest

# Installation dépendances + lancer le projet

    cd portfolio
    npm install
    npm run dev

# Local:

    http://localhost:5174/

# installation du Rooter

npm install react-router-dom

# installation des dépendances de SASS

npm install -D sass

# deploiement GH

Commandes dans le dossier FRONTEND :
npm install gh-pages
npm run deploy

Script à ajouter dans package.json :
"deploy": "npm run build && gh-pages -d dist",

vite.config.js :
import process from 'process'
base: process.env.NODE_ENV === "production" ? "/entrainementP8" : "/",

App.jsx :
const basename = import.meta.env.MODE === "production" ? "/entrainementP8" : "";
basename={basename}
