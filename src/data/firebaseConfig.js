// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR3jVtdi-pcN1SzdmtVSKoqB8bRChYAUQ",
  authDomain: "examen-88a3b.firebaseapp.com",
  projectId: "examen-88a3b",
  storageBucket: "examen-88a3b.appspot.com",
  messagingSenderId: "182915583718",
  appId: "1:182915583718:web:6df677b89ddc5266f5b527"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { app, db, auth };