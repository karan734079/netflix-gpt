// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIbxWQbzUWvkHjoguSbd2Vj6gk2wFp8M8",
  authDomain: "netflixgpt-d54f4.firebaseapp.com",
  projectId: "netflixgpt-d54f4",
  storageBucket: "netflixgpt-d54f4.appspot.com",
  messagingSenderId: "154573335267",
  appId: "1:154573335267:web:78e4074bec94abbe3d33d6",
  measurementId: "G-EZZ7Y7072W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, analytics,auth, googleProvider, signInWithPopup};