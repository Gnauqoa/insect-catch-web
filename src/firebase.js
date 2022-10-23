import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyCD_NKtiLEWzWXY69hweo5LR5e7bYdfxUQ",
  authDomain: "insect-catch-electric.firebaseapp.com",
  projectId: "insect-catch-electric",
  storageBucket: "insect-catch-electric.appspot.com",
  messagingSenderId: "193856506025",
  appId: "1:193856506025:web:5520a1d7b12b81383901b8",
  measurementId: "G-4LR8DR497H",
  databaseURL:
    "https://insect-catch-electric-default-rtdb.asia-southeast1.firebasedatabase.app",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
