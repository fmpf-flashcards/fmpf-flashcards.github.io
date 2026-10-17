// ============================================================================
//  FMPF Flashcards — configuration Firebase (projet dédié)
//  Projet : fmpf-flashcards | Compte : anzajewls@gmail.com
//  Créé le 2026-10-17. Auth Email/Password + Google activés, Firestore europe-west1.
// ============================================================================
export const firebaseConfig = {
  apiKey: "AIzaSyAOFlzGPTiWnkYeY8-sr7kMTWF7NZe-ao0",
  authDomain: "fmpf-flashcards.firebaseapp.com",
  projectId: "fmpf-flashcards",
  storageBucket: "fmpf-flashcards.firebasestorage.app",
  messagingSenderId: "712757382054",
  appId: "1:712757382054:web:8416054165c060e8755d67"
};

// Email de l'administrateur — seul cet email peut générer des codes.
// DOIT correspondre à la valeur isAdmin() dans firestore.rules
export const ADMIN_EMAIL = "anzajewls@gmail.com";
