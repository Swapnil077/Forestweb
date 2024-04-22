// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import { getFirestore } from '@firebase/firestore';
import { getStorage } from "@firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFy0ucMFn8gt_GjviATNr00cWP9WA652U",
  authDomain: "forestweb-985c4.firebaseapp.com",
  projectId: "forestweb-985c4",
  storageBucket: "forestweb-985c4.appspot.com",
  messagingSenderId: "960049744176",
  appId: "1:960049744176:web:07dfc4ba0d494deed420f5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
export const db = getFirestore();



