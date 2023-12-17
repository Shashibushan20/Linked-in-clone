import firebase from 'firebase/compat/app';  // Use 'compat' to support older versions
import 'firebase/compat/firestore'; 
import 'firebase/compat/auth';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCK_3KXhNCFLzyzq90NAmTJmVQn5qVZR0Y",
  authDomain: "linthree-a6c02.firebaseapp.com",
  projectId: "linthree-a6c02",
  storageBucket: "linthree-a6c02.appspot.com",
  messagingSenderId: "87037546913",
  appId: "1:87037546913:web:00bb2f57cf531884bbbbe0",
  measurementId: "G-14BQPHRYES"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();
  

  export { db, auth };