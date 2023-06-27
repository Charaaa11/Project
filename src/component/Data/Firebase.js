import React, { useState, useEffect } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmL1n3DOFaxDlt32Cvqovoqb0fO7siXWU",
  authDomain: "gurmanius-f39a1.firebaseapp.com",
  projectId: "gurmanius-f39a1",
  storageBucket: "gurmanius-f39a1.appspot.com",
  messagingSenderId: "288844575714",
  appId: "1:288844575714:web:9e45883bd8499dfa5dffbb",
  measurementId: "G-BPNHHS9ET4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export default getFirestore();

export function logout() {
  signOut(auth);
}
//custom hook

export function useAuth() {
  const [currentUser, setcurrentUser] = useState();
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => setcurrentUser(user));
    return unsub;
  }, []);
  return currentUser;
}
