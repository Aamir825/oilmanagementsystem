// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw1CdAgEp6C-sf-emZPcCVniE_1YpU_q4",
  authDomain: "oilmanagementsystem.firebaseapp.com",
  projectId: "oilmanagementsystem",
  storageBucket: "oilmanagementsystem.firebasestorage.app",
  messagingSenderId: "112635891288",
  appId: "1:112635891288:web:1ba8d7b5a779d13fac042d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const fireDb = getFirestore(app);

export { db, fireDb }