import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider
} from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyDryOKgMTHAReSGj7te-Gw4R4ACzV40Cso",
  authDomain: "haberdb-8da62.firebaseapp.com",
  projectId: "haberdb-8da62",
  storageBucket: "haberdb-8da62.appspot.com",
  messagingSenderId: "326489242108",
  appId: "1:326489242108:web:79930ab3afc7fb0f359a79",
  measurementId: "G-2RP7VD0WLG"
};



const firebaseApp = initializeApp(firebaseConfig);


const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

