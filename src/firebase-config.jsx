// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBnsWuNeU7MGNmMhfrcX3KTPFp2F8a5Uhk",
  authDomain: "dashboard-4b4dc.firebaseapp.com",
  projectId: "dashboard-4b4dc",
  storageBucket: "dashboard-4b4dc.appspot.com",
  messagingSenderId: "220845435906",
  appId: "1:220845435906:web:ab64df279a12d4087c8b1b",
  measurementId: "G-2LPSGNC8FS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const db = getFirestore(app);