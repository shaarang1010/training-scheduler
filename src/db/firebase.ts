// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "training-logger-597b5.firebaseapp.com",
  projectId: "training-logger-597b5",
  storageBucket: "training-logger-597b5.appspot.com",
  messagingSenderId: "597356315762",
  appId: "1:597356315762:web:626ef61546422618342eeb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);