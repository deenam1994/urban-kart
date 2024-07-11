
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyByWO2SJ8BzNG7jhHydArOmYAfN6bQGhzM",
  authDomain: "urban-kart-db.firebaseapp.com",
  projectId: "urban-kart-db",
  storageBucket: "urban-kart-db.appspot.com",
  messagingSenderId: "547691063948",
  appId: "1:547691063948:web:7524e392a9dbd16119e9a9"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const CreateUserDocumentFromAuth = async (userAuthObj, additionalInfo = {}) => {
  const docRef = doc(db, 'users', userAuthObj.uid);
  const userSnapshot = await getDoc(docRef);
  if (!userSnapshot.exists()){
    const {displayName, email} = userAuthObj;
    const createdAt = new Date();
    try {
      await setDoc(docRef, {
        displayName,
        email,
        createdAt,
        ...additionalInfo
      }); 
    } catch (error) {
      console.error('Error occured: ', error.message);
    }
  }

  return docRef;
}

export const createAuthUserFromEmailAndPwd = async (email, password) => {

  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
}