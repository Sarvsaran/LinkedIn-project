// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "linkedin-ffc09.firebaseapp.com",
  projectId: "linkedin-ffc09",
  storageBucket: "linkedin-ffc09.appspot.com",
  messagingSenderId: "714312811034",
  appId: "1:714312811034:web:b9e84e354870880e9c07a3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
