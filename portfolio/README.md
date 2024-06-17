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

# deploiement Git Hub

Commandes dans le dossier FRONTEND :
npm install gh-pages --> FRONTEND
npm run deploy --> FRONTEND

Script à ajouter dans package.json dans le front end  :
"deploy": "npm run build && gh-pages -d dist",

vite.config.js :
import process from 'process'
base: process.env.NODE_ENV === "production" ? "/p12_portfolio" : "/",

App.jsx :
const basename = import.meta.env.MODE === "production" ? "/p12_portfolio" : "";
basename={basename}
