// src/firebase.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Configurazione Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDDhuShHe-T0OzMwR--uHEmrh2fcJvBcz0",
  authDomain: "my--todo-app-463aa.firebaseapp.com",
  projectId: "my--todo-app-463aa",
  storageBucket: "my--todo-app-463aa.firebasestorage.app",
  messagingSenderId: "102402937962",
  appId: "1:102402937962:web:1553c42ba88bf59872e613",
  measurementId: "G-2GJDP7W00L"
};

// Inizializza Firebase
const app = initializeApp(firebaseConfig);

// Esporta i servizi che userai
export const auth = getAuth(app);
export const db = getFirestore(app);