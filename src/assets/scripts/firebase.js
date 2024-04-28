// Import the functions you need from the SDKs you need
import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyDREvCGZZ54u4m_bWHl8b9T_hsz8V2S0zo",

  authDomain: "knowthyshelf-41c1b.firebaseapp.com",

  projectId: "knowthyshelf-41c1b",

  storageBucket: "knowthyshelf-41c1b.appspot.com",

  messagingSenderId: "3336586441",

  appId: "1:3336586441:web:ef09a204ae5be815e5b918"

};


// Initialize Firebase

 export const app = initializeApp(firebaseConfig);
const auth = getAuth();
const storage = getStorage();


export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}

// Storage
export async function upload(file, currentUser, setLoading) {
  const fileRef = ref(storage, currentUser.uid + '.png');

  setLoading(true);
  
  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, {photoURL});
  
  setLoading(false);
  alert("Uploaded file!");
  
}