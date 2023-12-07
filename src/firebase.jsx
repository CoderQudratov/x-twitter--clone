// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import {getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtMv3wuAvy5WzULHpiqEkYTtpmxEImpP0",
  authDomain: "twitte-clone-eee7a.firebaseapp.com",
  projectId: "twitte-clone-eee7a",
  storageBucket: "twitte-clone-eee7a.appspot.com",
  messagingSenderId: "783577853669",
  appId: "1:783577853669:web:7067475593d1fe3ec6ae0c",
  measurementId: "G-8LX2ENSDH7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db=getFirestore(app)
export const storage =getStorage(app) 
export const database =getDatabase(app)

// "posts" nomli collectiondagi barcha dokumentlarni olish
