import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeJ_bVwdOm1HvdpDyqrmXz9eDuFnoh8D4",
  authDomain: "reactecommerce-f01c9.firebaseapp.com",
  projectId: "reactecommerce-f01c9",
  storageBucket: "reactecommerce-f01c9.appspot.com",
  messagingSenderId: "283714578861",
  appId: "1:283714578861:web:f5c4c00463ded75dd3d924",
  measurementId: "G-BS29NZRZ5K",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, "users", `$${userAuth.uid}`);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userRef,{
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }
  return userRef;
};


const provider = new GoogleAuthProvider();
provider.setCustomParameters({ promp: "select_account" });
export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);
