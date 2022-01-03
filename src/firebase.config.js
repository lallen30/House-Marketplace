import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBV8Zks8S2d6FTRttsqw9I6f7ytDv4Ia-U",
  authDomain: "house-marketplace-app-66d57.firebaseapp.com",
  projectId: "house-marketplace-app-66d57",
  storageBucket: "house-marketplace-app-66d57.appspot.com",
  messagingSenderId: "173025425959",
  appId: "1:173025425959:web:034ba28023cdb3de8dac02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore()