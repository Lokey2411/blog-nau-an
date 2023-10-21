// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCoHY2klxucWPaFMmXLOsB_2IK_KTfZGaM",
	authDomain: "blog-nau-an.firebaseapp.com",
	projectId: "blog-nau-an",
	storageBucket: "blog-nau-an.appspot.com",
	messagingSenderId: "539416428616",
	appId: "1:539416428616:web:b20dbff8dd86014f42d87d",
	measurementId: "G-RDK6T9M1BF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
