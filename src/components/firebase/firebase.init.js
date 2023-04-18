// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCDuqexHPAtkFmAUno5LvpKj9qwuAJr5xM",
    authDomain: "b-7-m-10-m-5-dragon.firebaseapp.com",
    projectId: "b-7-m-10-m-5-dragon",
    storageBucket: "b-7-m-10-m-5-dragon.appspot.com",
    messagingSenderId: "61401728693",
    appId: "1:61401728693:web:9a28f16fa462e53cec20fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;