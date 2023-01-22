// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPNWwpJ5fa1mEAmsNlgXYks6EpIEnH9Fs",
  authDomain: "nn-design.firebaseapp.com",
  projectId: "nn-design",
  storageBucket: "nn-design.appspot.com",
  messagingSenderId: "232898015650",
  appId: "1:232898015650:web:422812c472076ed1edc2fb",
  measurementId: "G-E3GPH3JEB4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);