import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbJHOaFuwRl46RaImecNUobCthhOogKsc",
  authDomain: "react-notes-test-app.firebaseapp.com",
  projectId: "react-notes-test-app",
  storageBucket: "react-notes-test-app.appspot.com",
  messagingSenderId: "232408355544",
  appId: "1:232408355544:web:c926082890bc3cc6ba3dad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export const notesCollection = collection(db, "notes")