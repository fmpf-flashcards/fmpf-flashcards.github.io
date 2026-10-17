# FMPF Flashcards — Guide de mise en ligne

Site statique (GitHub Pages) + **Firebase** (Auth + Firestore).
Flashcards uniquement (pas de QCM). Une seule formule Pro : 100 DH, à vie.

```
fmpf-full/
├── *.html / styles.css / js/          → l'application
├── firebase-config.js                 → config du projet fmpf-flashcards ⚠️ PLACEHOLDER (à remplir)
├── index.json + disc-0..4.json + topics-index.json + plan.json → données
├── icon-192.png / icon-512.png / manifest.json / sw.js → PWA + offline
└── firestore.rules                    → règles de sécurité (à publier dans Firebase)
```

## Étape 1 — Créer le projet Firebase

1. **console.firebase.google.com** → *Add project* → nomme-le `fmpf-flashcards`
   (désactive Google Analytics, inutile ici).
2. **Build → Authentication → Get started** → *Sign-in method* → active
   **Email/Password** (inscription email + mot de passe).
3. **Project Overview → Add app → Web** (icône `</>`) → nomme-la `fmpf-web` →
   copie l'objet `firebaseConfig` dans `firebase-config.js` (remplacer les TODO).
4. **Build → Firestore Database → Create database** → *Start in production mode*,
   région `eur3` (comme FMPR/FMPA/FMPT).
5. Onglet **Rules** → colle le contenu de **`firestore.rules`** → **Publish**.
6. **Authentication → Settings → Authorized domains → Add domain** →
   ajoute `fmpf-flashcards.github.io` (sinon la connexion échoue).

## Étape 2 — Déployer sur GitHub Pages

1. Crée le repo GitHub `fmpf-flashcards/fmpf-flashcards.github.io`.
2. Push le contenu de `fmpf-full/` (**sauf** `firestore.rules` et `_source/`).
3. Le site est en ligne sur https://fmpf-flashcards.github.io/.

⚠️ Ne pas déployer `_source/` (PDFs sources + scripts de génération).
⚠️ Ne pas déployer le générateur de codes privé (il contient le secret maître).

## Étape 3 — Checklist de test

- [ ] Créer un compte (email + mot de passe) → arrive sur l'accueil
- [ ] Mode démo : 5 cartes/sujet, classement/plan verrouillés
- [ ] Code d'activation → Profil → Pro activé ✅ (formule `full`, 100 DH)
- [ ] Rejouer un code déjà utilisé → refusé ✅
- [ ] Étudier des cartes → XP → apparaître dans le classement
- [ ] Cocher une tâche du plan → recharger → toujours cochée

## Notes

- **Coût : 0.** Firebase Spark (gratuit) + GitHub Pages (gratuit).
- **Offline** : le service worker met en cache le site + les données après la
  1re visite ; Firestore garde la progression en local et synchronise au retour
  du réseau. La 1re ouverture nécessite internet.
- **Contenu** : 625 sujets (programme Fès 2022), 18 750 cartes (30/sujet),
  générées à partir des PDFs de cours (cf. `_source/`, non déployé).
