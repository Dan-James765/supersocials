import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBRsrTgj0bTNxQA-x0vC6yZ8K0m1yvKr5M",
    authDomain: "supersocials-b0522.firebaseapp.com",
    projectId: "supersocials-b0522",
    storageBucket: "supersocials-b0522.appspot.com",
    messagingSenderId: "514210348208",
    appId: "1:514210348208:web:b238f5dd8bee94e9418f75"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


