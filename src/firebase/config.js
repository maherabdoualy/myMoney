import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBamfHNsUB4UBq5pTdGoHsmkmthF6mfbF0",
  authDomain: "mymoney-7c0d8.firebaseapp.com",
  projectId: "mymoney-7c0d8",
  storageBucket: "mymoney-7c0d8.appspot.com",
  messagingSenderId: "444752487859",
  appId: "1:444752487859:web:1a3110621d288255c9d7c6",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

// timestamp
const timestamp = firebase.firestore.Timestamp;

export { projectFirestore, projectAuth, timestamp };
