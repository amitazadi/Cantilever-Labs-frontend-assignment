import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBxv6af5EyuMgn_TFDIgqeRKDNEFMVU2sE",
    authDomain: "assignment-1-cc7e1.firebaseapp.com",
    projectId: "assignment-1-cc7e1",
    storageBucket: "assignment-1-cc7e1.appspot.com",
    messagingSenderId: "865508578943",
    appId: "1:865508578943:web:64ffac2e64c7c68926d14a",
    measurementId: "G-2GMYWQB7MT"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
export {auth,provider};