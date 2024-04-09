// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOFYjL3ktu-KXQsCYFKj_uqLeYCR7u4Vo",
  authDomain: "shop-3fc69.firebaseapp.com",
  projectId: "shop-3fc69",
  storageBucket: "shop-3fc69.appspot.com",
  messagingSenderId: "955389866099",
  appId: "1:955389866099:web:4cb3702e31a3eac8023a06"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)