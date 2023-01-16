import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDyqYnMcwCcXl_NvQ-Hd8zwOgxv0Zr5huo",
  authDomain: "chat-76c7b.firebaseapp.com",
  projectId: "chat-76c7b",
  storageBucket: "chat-76c7b.appspot.com",
  messagingSenderId: "60009474330",
  appId: "1:60009474330:web:e1a58a18c47c566150e4a3"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()