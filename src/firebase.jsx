// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import {getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDClzQmYlnp5jKsOT9p8lHoj6r0aojMQbc",
  authDomain: "twitter-clone-b0dbb.firebaseapp.com",
  projectId: "twitter-clone-b0dbb",
  storageBucket: "twitter-clone-b0dbb.appspot.com",
  messagingSenderId: "135596609937",
  appId: "1:135596609937:web:b9542c332dd3646546ca30",
  measurementId: "G-JT9GCVRWYB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app)
export const db=getFirestore(app)
export const storage =getStorage(app) 

// "posts" nomli collectiondagi barcha dokumentlarni olish
