import { initializeApp } from "firebase/app";

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA4ad7JJBwtp2Max7ozL5XqkghgIZ6Mhw4",
  authDomain: "clothingstore-ed18f.firebaseapp.com",
  projectId: "clothingstore-ed18f",
  storageBucket: "clothingstore-ed18f.appspot.com",
  messagingSenderId: "19673420116",
  appId: "1:19673420116:web:05316a3cb18a7aba1078c1",
};

const firebaseApp = initializeApp(firebaseConfig);

const Googleprovider = new GoogleAuthProvider();
Googleprovider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, Googleprovider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, Googleprovider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }
  return userDocRef;

  //check if user data exists
  //return userDocRef

  //if user data does not exist:
  //create/set the document with the data from userAuth in my collection
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export default firebaseApp;
