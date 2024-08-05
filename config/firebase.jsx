// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXdXru0ZLmYuwGoaaOvHZped5JS-Zwp_0",
  authDomain: "chat-app-6c411.firebaseapp.com",
  projectId: "chat-app-6c411",
  storageBucket: "chat-app-6c411.appspot.com",
  messagingSenderId: "134984838654",
  appId: "1:134984838654:web:6ac0bd3279a67177f3e4af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
















