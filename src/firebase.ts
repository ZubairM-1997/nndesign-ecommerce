import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

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
const db = getFirestore()
const auth = getAuth()
const analytics = getAnalytics(app);

export {
  db, 
  auth
}