// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwBUmOTYOlWGMQWLK9i6OnyW698AhFaCQ",
  authDomain: "auth-app-38de0.firebaseapp.com",
  projectId: "auth-app-38de0",
  storageBucket: "auth-app-38de0.appspot.com",
  messagingSenderId: "457689816739",
  appId: "1:457689816739:web:d2b909a1578849c3cda916",
  measurementId: "G-MQ41WF6R3Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
