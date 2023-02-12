import * as firebase from 'firebase';
import { initializeApp } from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBO6Tcx93lhtAcd34i9U7svkxi-a3chfic",
    authDomain: "saylani-discount-store-7fe48.firebaseapp.com",
    projectId: "saylani-discount-store-7fe48",
    storageBucket: "saylani-discount-store-7fe48.appspot.com",
    messagingSenderId: "605837573530",
    appId: "1:605837573530:web:b1ca5069d866629cf7ce23"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;