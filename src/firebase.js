import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDXejR3JkEXqKspqy87eIQoprg-LU7W4c0",
  authDomain: "photos-ssr.firebaseapp.com",
  projectId: "photos-ssr",
  storageBucket: "photos-ssr.appspot.com",
  messagingSenderId: "551206898105",
  appId: "1:551206898105:web:1edd828c0a8ebfb6fb4e68",
  measurementId: "G-TPZYQBG26M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);