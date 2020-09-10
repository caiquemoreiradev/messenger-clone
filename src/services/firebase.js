import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAneerVhQM0RyOrT-9ENAf_TyUBR6zFJig",
    authDomain: "messenger-clone-55a8b.firebaseapp.com",
    databaseURL: "https://messenger-clone-55a8b.firebaseio.com",
    projectId: "messenger-clone-55a8b",
    storageBucket: "messenger-clone-55a8b.appspot.com",
    messagingSenderId: "100540799645",
    appId: "1:100540799645:web:6fe8168554fd58f308d274",
    measurementId: "G-DEHZ24XSPY"
});

const db = firebaseApp.firestore();

export { db };