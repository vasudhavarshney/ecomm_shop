// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBtJsfw_0y-tPmsbwIZ5ipyUIxrfmLSd8w",
  authDomain: "eccomshop-98fc5.firebaseapp.com",
  projectId: "eccomshop-98fc5",
  storageBucket: "eccomshop-98fc5.appspot.com",
  messagingSenderId: "261722946999",
  appId: "1:261722946999:web:b9a79705465f68438d3c32",
  measurementId: "G-3KRQYWNY1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
exports.auth =getAuth(app)
exports.analytics = getAnalytics(app);