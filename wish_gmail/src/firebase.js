import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDzawC7y0GIQXkjbXNWk54CGCnXqGsegxY",
    authDomain: "wish--clone.firebaseapp.com",
    projectId: "wish--clone",
    storageBucket: "wish--clone.appspot.com",
    messagingSenderId: "626836841674",
    appId: "1:626836841674:web:41c328026cbc2f66b00033"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth } 