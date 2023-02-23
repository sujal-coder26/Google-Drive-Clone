import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyA3fAZaDbrVuNo6WyK6tfekPRUzOnTsy7g",
  authDomain: "doc-clone-2eb71.firebaseapp.com",
  projectId: "doc-clone-2eb71",
  storageBucket: "doc-clone-2eb71.appspot.com",
  messagingSenderId: "1033033558424",
  appId: "1:1033033558424:web:c79702083d14fe880ce3ed",
  measurementId: "G-K3H13NET65",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
const db = firebaseApp.firestore();

export { auth, provider, storage, db };
