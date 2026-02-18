import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  deleteDoc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID
};

export const useFirebase = () => useContext(FirebaseContext);

export const firebaseApp = initializeApp(firebaseConfig);
export const app = firebaseApp;
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const googleProvider = new GoogleAuthProvider();


export function useAuth() {
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const unsub = onAuthStateChanged(firebaseAuth, user => setCurrentUser(user));
    return unsub;
  }, [])

  return currentUser;
}

export async function upload(file, currentUser, setLoading) {
  console.log(currentUser);
  const fileRef = ref(storage, currentUser.uid + '.png');

  setLoading(true);
  
  const snapshot = await uploadBytes(fileRef, file);
  const photoURL = await getDownloadURL(fileRef);

  updateProfile(currentUser, {photoURL});
  
  setLoading(false);
  alert("Uploaded file!");
  window.location.reload();
}

export const handleNewThing = async (bookTitle, bookAuthor, bookImage, bookFile, bookDesc) => {
  const imageRef = ref(storage, `uploads/images/${Date.now()}-${bookTitle}`);

  const uploadResultImg = await uploadBytes(imageRef, bookImage);

  const fileRef = ref(storage, `uploads/files/${Date.now()}-${bookTitle}`);
  const uploadResultPdf = await uploadBytes(fileRef, bookFile);

  const today = new Date();

  const added = await addDoc(collection(firestore, 'books'), {"title" : bookTitle, "author" : bookAuthor, "cover" : uploadResultImg.ref.fullPath, "file" : uploadResultPdf.ref.fullPath, "time" : today.toDateString(), "desc": bookDesc});
}


export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) setUser(user);
      else setUser(null);
    });
  }, []);

  const signupUserWithEmailAndPassword = (email, password) =>
    createUserWithEmailAndPassword(firebaseAuth, email, password);

  const singinUserWithEmailAndPass = (email, password) =>
    signInWithEmailAndPassword(firebaseAuth, email, password);

  const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

  const handleCreateNewListing = async (bookTitle, bookAuthor, bookImage, bookFile, bookDesc, genre) => {
    const imageRef = ref(storage, `uploads/images/${Date.now()}-${bookTitle}`);
    const uploadResultImg = await uploadBytes(imageRef, bookImage);
    let uploadImg = uploadResultImg.ref.fullPath;

    if (bookImage === null || bookImage === undefined || bookImage === "") {
        uploadImg = "default/sungjinwoo.jpg";
    }

    if (genre === '') {
        genre = "Not Specified";
    }

    const fileRef = ref(storage, `uploads/files/${Date.now()}-${bookTitle}`);
    const uploadResultPdf = await uploadBytes(fileRef, bookFile);

    const today = new Date();

    return await addDoc(collection(firestore, 'books'), {"title" : bookTitle, "author" : bookAuthor, "cover" : uploadImg, "file" : uploadResultPdf.ref.fullPath, "time" : today.toDateString(), "timestamp" : Date.now(), "info" : bookDesc, "genre" : genre, "user" : user.uid});
    
  };

  const listAllBooks = () => {
    return getDocs(collection(firestore, "books"));
  };

  const getBookById = async (id) => {
    const docRef = doc(firestore, "books", id);
    const result = await getDoc(docRef);
    return result;
  };

  const getImageURL = async (path) => {
    const result =  await getDownloadURL(ref(storage, path));
    return result;
  };

  const getBookDocByUrl = async (url) => {
    const result =  await getDownloadURL(ref(storage, url));
    return result;
  }

  const listAllUserBooks = async (currentUserId) => {
    const docs = collection(firestore, "books");
    const userBooksQuery = query(docs, where("user", '==', currentUserId));
    const userBooks = await getDocs(userBooksQuery);
    const res = userBooks.docs.map((doc) => doc.data());
    return userBooks;
  }

  const deleteBook = async (id) => {
    const docs = collection(firestore, "books");
    const docRef = doc(docs, id);
    const message = await deleteDoc(docRef);
    return docRef;
  }

  const isLoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signinWithGoogle,
        signupUserWithEmailAndPassword,
        singinUserWithEmailAndPass,
        handleCreateNewListing,
        listAllBooks,
        listAllUserBooks,
        deleteBook,
        getImageURL,
        getBookDocByUrl,
        getBookById,
        isLoggedIn,
        user,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
