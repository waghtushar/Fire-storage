
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNSpT-rA6uxRUtTvnYc9XrdinE2hrQNsw",
  authDomain: "fire-storage-a87d4.firebaseapp.com",
  projectId: "fire-storage-a87d4",
  storageBucket: "fire-storage-a87d4.firebasestorage.app",
  messagingSenderId: "221956044515",
  appId: "1:221956044515:web:f42719254d52a5f8c5f7d6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);





