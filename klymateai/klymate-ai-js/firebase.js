import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";

// Firebase configuration - Replace these with your actual Firebase project details
const firebaseConfig = {
  // TODO: Replace with your Firebase project details from Firebase Console
  // 1. Go to https://console.firebase.google.com/
  // 2. Create a new project or select existing one
  // 3. Go to Project Settings > General > Your apps
  // 4. Add a web app and copy the config values below
  
  apiKey: "your-api-key-here", // Replace with VITE_FIREBASE_API_KEY
  authDomain: "your-project-id.firebaseapp.com", // Replace with your project ID
  projectId: "your-project-id", // Replace with VITE_FIREBASE_PROJECT_ID  
  storageBucket: "your-project-id.firebasestorage.app", // Replace with your project ID
  messagingSenderId: "123456789", // Replace with your sender ID
  appId: "your-app-id-here" // Replace with VITE_FIREBASE_APP_ID
};

// Uncomment the lines below once you have your Firebase config ready
/*
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: `${import.meta.env.VITE_FIREBASE_PROJECT_ID}.firebasestorage.app`,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};
*/

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Google Auth Provider
export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// Auth functions
export const signInWithGoogle = () => {
  // Uncomment when ready to use Firebase auth
  // return signInWithRedirect(auth, googleProvider);
  console.log("Firebase auth not configured yet - please set up your Firebase project");
};

export const logOut = () => {
  // Uncomment when ready to use Firebase auth
  // return signOut(auth);
  console.log("Firebase auth not configured yet - please set up your Firebase project");
};

export const onAuthStateChange = (callback) => {
  // Uncomment when ready to use Firebase auth
  // return onAuthStateChanged(auth, callback);
  console.log("Firebase auth not configured yet - please set up your Firebase project");
};

export default app;