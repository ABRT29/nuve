# 📋 Guide de configuration Google Sheets pour le Café Nuvé

Ce guide permet à la propriétaire du café de gérer la carte et les prix directement depuis son smartphone ou son ordinateur sur **Google Sheets**, avec une mise à jour **en direct** sur le site (sans toucher au code ni redéployer).

---

## 1. Créer le Google Sheet (en 1 minute)

1. Ouvrez [Google Sheets](https://sheets.new) et créez une nouvelle feuille de calcul intitulée **"Menu Café Nuvé"**.
2. Dans la première ligne, créez les 7 colonnes suivantes (exactement ces noms) :

| categoria | nombre | precio | descripcion | etiqueta | favorito | especialidad |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| caliente | Americano | $35 | Expreso con granos 100% de especialidad. | Clásico | no | no |
| caliente | Latte | $48 | Expreso doble con leche vaporizada. | | si | no |
| fria | Latte Caramelo Frío | $55 | Con jarabe de caramelo artesanal. | Top Seller | si | si |
| frappe | Frappé de Mazapán | $65 | Con auténtico dulce de cacahuate. | Insignia Nuvé | si | si |
| comer | Torta de Elote Casera | $45 | Bien suave y húmeda hecha con amor. | Receta de Hogar | si | si |

*(Un fichier exemple prêt à copier-coller est disponible dans votre projet sous `public/template_menu_nuve.csv`).*

---

## 2. Publier la feuille en CSV (en 3 clics)

1. Dans Google Sheets, cliquez en haut à gauche sur **Fichier** ➡️ **Partager** ➡️ **Publier sur le Web**.
2. Dans la boîte de dialogue :
   - Choisissez **Lien**
   - Au lieu de "Page Web", sélectionnez **Valeurs séparées par des virgules (.csv)**
3. Cliquez sur **Publier**.
4. Copiez le lien généré (il ressemble à `https://docs.google.com/spreadsheets/d/e/2PACX-.../pub?output=csv`).

---

## 3. Lier l'URL au site

Deux options très simples :

### Option A (recommandée sur Vercel) :
Ajoutez une variable d'environnement sur Vercel :
- Allez sur votre tableau de bord **Vercel** ➡️ Projet **nuve** ➡️ **Settings** ➡️ **Environment Variables**.
- Nom : `VITE_GOOGLE_SHEET_CSV_URL`
- Valeur : *collez votre lien Google Sheet CSV*

### Option B (directement dans le code) :
Dans `src/data/menuData.ts`, collez directement le lien à la ligne 4 :
```ts
export const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/e/.../pub?output=csv';
```

---

## ✨ Comment ça fonctionne pour la propriétaire ?
- Elle ouvre l'application Google Sheets sur son téléphone.
- Elle change un prix, modifie une description, ou tape `si` dans la colonne `especialidad` pour afficher un dessert du jour dans les *Especialidades del Momento*.
- Dès qu'un client ouvre ou recharge le site, les nouveautés apparaissent immédiatement !
- Si le Google Sheet est inaccessible ou vide, le site affiche automatiquement les valeurs par défaut sans jamais planter.
