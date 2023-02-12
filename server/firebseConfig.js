import * as firebase from 'firebase';
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
import { getAuth } from 'firebase/auth';

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

const auth = getAuth(app);

async function signUpNewUser(userInfo) {
    const { name, contact, email, password } = userInfo
    const userCredential = await createUserWithEmailAndPassword(auth, name, contact, email, password)
    await addUserToDB(userInfo, userCredential.user.uid)
}



export {
    signUpNewUser
};