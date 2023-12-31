import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
  addDoc,
} from "firebase/firestore";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import debounce from "debounce";
import {
  getStorage,
  ref as storageRef,
  getDownloadURL,
  uploadBytes,
} from "firebase/storage";
const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
};
const firebaseApp = initializeApp(config, "firebase-starter");
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
const onUserlogin = debounce(onAuthStateChanged, 200);

const storage = getStorage(firebaseApp);

const logIn = signInWithEmailAndPassword;
export {
  auth,
  onUserlogin,
  logIn,
  doc,
  getDoc,
  db,
  setDoc,
  getDocs,
  collection,
  query,
  where,
  deleteDoc,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  addDoc,
  storage,
  storageRef,
  getDownloadURL,
  uploadBytes,
};
