import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5SHVrAlzbQwZ_r2JPW_-iGU0jLiOAOjo",
  authDomain: "guardias-edu-2.firebaseapp.com",
  projectId: "guardias-edu-2",
  storageBucket: "guardias-edu-2.appspot.com",
  messagingSenderId: "515624800249",
  appId: "1:515624800249:web:8587f993b42c9db6227728",
  measurementId: "G-P1YKXTX7WC"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app)
const analytics = getAnalytics(app);

export { db }