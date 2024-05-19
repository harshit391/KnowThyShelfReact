import { createContext, useContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
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
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const FirebaseContext = createContext(null);

const firebaseConfig = {
    apiKey: "AIzaSyDREvCGZZ54u4m_bWHl8b9T_hsz8V2S0zo",

    authDomain: "knowthyshelf-41c1b.firebaseapp.com",
  
    projectId: "knowthyshelf-41c1b",
  
    storageBucket: "knowthyshelf-41c1b.appspot.com",
  
    messagingSenderId: "3336586441",
  
    appId: "1:3336586441:web:ef09a204ae5be815e5b918"
};

export const useFirebase = () => useContext(FirebaseContext);

export const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

const googleProvider = new GoogleAuthProvider();

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
    console.log(result);
    return result;
  };

  const getBookDocByUrl = async (url) => {
    const result =  await getDownloadURL(ref(storage, url));
    return result;
  }

  const listAllUserBooks = async (currentUserId) => {
    console.log("List All Books");
    console.log("User Id :-", currentUserId);
    const docs = collection(firestore, "books");

    console.log("Docs :- ", docs);
    const userBooksQuery = query(docs, where("user", '==', currentUserId));
    console.log("UserBooks:-" ,userBooksQuery);

    const userBooks = await getDocs(userBooksQuery);

    console.log("UserBooks Actuall :- ", userBooks);
    const res = userBooks.docs.map((doc) => doc.data());
    console.log("Res:-", res);
    return userBooks;
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
