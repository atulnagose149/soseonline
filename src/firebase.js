// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArhW0wAKwLDfkcOEO_LLyJRlGUEgUuMVY",
  authDomain: "soseo-12b3a.firebaseapp.com",
  projectId: "soseo-12b3a",
  storageBucket: "soseo-12b3a.appspot.com",
  messagingSenderId: "381308622989",
  appId: "1:381308622989:web:d769d6a4253f4274bb2ac4",
  measurementId: "G-S8KVFLNQR5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
