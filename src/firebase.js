import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAGyHPLqbj5_h6I-TZIPqiwFnUwvilHxUY",
    authDomain: "tesla-web-app.firebaseapp.com",
    projectId: "tesla-web-app",
    storageBucket: "tesla-web-app.appspot.com",
    messagingSenderId: "153992892114",
    appId: "1:153992892114:web:d766e0aa8a36cd63f2e70b",
    measurementId: "G-B3GKLKQ63J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebaseApp.auth();

export { auth };