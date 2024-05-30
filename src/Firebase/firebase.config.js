// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBdAR36r7Ck51J8ayHLhbMoiAXES3OTNlE",
  authDomain: "fluxion-a965f.firebaseapp.com",
  projectId: "fluxion-a965f",
  storageBucket: "fluxion-a965f.appspot.com",
  messagingSenderId: "739275722805",
  appId: "1:739275722805:web:c84b0a813bf36f0f36617c",
  measurementId: "G-QZXBT7M2V0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;