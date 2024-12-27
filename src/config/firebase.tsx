// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getDatabase } from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBFT3zzqBPbrkB220dPAz0eFFP6o_riThk",
  authDomain: "chat-app-6653f.firebaseapp.com",
  projectId: "chat-app-6653f",
  databaseURL:
    "https://chat-app-6653f-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "chat-app-6653f.firebasestorage.app",
  messagingSenderId: "861225590851",
  appId: "1:861225590851:web:d37603133d7d55b87cf4f6",
  measurementId: "G-5H741Z3D50",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

const db = getFirestore(app);
const database = getDatabase(app);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export { db, auth, provider, database };
