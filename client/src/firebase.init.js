import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export const firebaseConfig = {
  apiKey: "AIzaSyBWQxkUetoNhN3RnrjB1jnrwhDDsl6Jh0U",
  authDomain: "doctors-portal-fsn.firebaseapp.com",
  projectId: "doctors-portal-fsn",
  storageBucket: "doctors-portal-fsn.appspot.com",
  messagingSenderId: "1090515905253",
  appId: "1:1090515905253:web:e76b5e508a7c49245f420c",
  measurementId: "G-9KB5LW2YEZ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
