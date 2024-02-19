import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCjUWG6maIjioaIyVPuQpXg7CyY7fetxQY",
    authDomain: "greivance-system.firebaseapp.com",
    projectId: "greivance-system",
    storageBucket: "greivance-system.appspot.com",
    messagingSenderId: "488522958532",
    appId: "1:488522958532:web:7efeffd2eae20b1b262b91",
    measurementId: "G-Y9T2B4TPFE"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };
