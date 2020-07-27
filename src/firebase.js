import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAgTAXqkWGa15czS97QgcnZ7w1T_RcWRrc",
  authDomain: "clone-461ef.firebaseapp.com",
  databaseURL: "https://clone-461ef.firebaseio.com",
  projectId: "clone-461ef",
  storageBucket: "clone-461ef.appspot.com",
  messagingSenderId: "1088311045170",
  appId: "1:1088311045170:web:5e237b4cb77c05d68e202b",
  measurementId: "G-YEV1FXW9YT"
});

const auth = firebase.auth();

export { auth };