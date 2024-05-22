import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDzA5E2T3IzJZdL_SobWwd_xunCFTLbFdg",
  authDomain: "realtime-chatapp-65bff.firebaseapp.com",
  projectId: "realtime-chatapp-65bff",
  storageBucket: "realtime-chatapp-65bff.appspot.com",
  messagingSenderId: "497009964844",
  appId: "1:497009964844:web:11fe2c6ecd8da06334de89",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();
