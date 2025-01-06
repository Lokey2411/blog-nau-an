// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByuVprkemrWqBkDQCZvwIf6lYetwzrzc0",
  authDomain: "foodblog-b6edb.firebaseapp.com",
  projectId: "foodblog-b6edb",
  storageBucket: "foodblog-b6edb.firebasestorage.app",
  messagingSenderId: "917020041122",
  appId: "1:917020041122:web:21c2cd636b32b893651cfb",
  measurementId: "G-NV49MQFMSY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firestore = getFirestore(app);
