// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAOj9DlExyKCeamyqPeaJO2-HQjJ63ICls",
    authDomain: "linkedin-clone-ae2dc.firebaseapp.com",
    projectId: "linkedin-clone-ae2dc",
    storageBucket: "linkedin-clone-ae2dc.appspot.com",
    messagingSenderId: "749041073563",
    appId: "1:749041073563:web:c441dec7c7721e41dc753e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage();

export default app;
export { db, auth, storage }