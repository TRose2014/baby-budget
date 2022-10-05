import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "budget-babies.firebaseapp.com",
  projectId: "budget-babies",
  storageBucket: "budget-babies.appspot.com",
  messagingSenderId: "595977450170",
  appId: process.env.APP_ID,
  measurementId: "G-8WEGT9ZGTW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db }