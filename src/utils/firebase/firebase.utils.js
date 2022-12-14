import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4ad7JJBwtp2Max7ozL5XqkghgIZ6Mhw4",
  authDomain: "clothingstore-ed18f.firebaseapp.com",
  projectId: "clothingstore-ed18f",
  storageBucket: "clothingstore-ed18f.appspot.com",
  messagingSenderId: "19673420116",
  appId: "1:19673420116:web:05316a3cb18a7aba1078c1",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export default firebaseApp;
