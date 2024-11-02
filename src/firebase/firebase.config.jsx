
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAQhc5a7-nbKEU7DO4bAJ0aJwbHgiTxBio",
    authDomain: "my-portfolio-d3b4b.firebaseapp.com",
    projectId: "my-portfolio-d3b4b",
    storageBucket: "my-portfolio-d3b4b.appspot.com",
    messagingSenderId: "535554703124",
    appId: "1:535554703124:web:dbccdcdd68e1a87f440c01",
    measurementId: "G-CYCFG75HGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth
export const auth = getAuth(app);