
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
// import firebase from 'firebase/app';
// import 'firebase/firestore';
// import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCH1q3sclzSQmlbauFlop89lBwGjffROLs",
  authDomain: "react-curso-app-d879a.firebaseapp.com",
  projectId: "react-curso-app-d879a",
  storageBucket: "react-curso-app-d879a.appspot.com",
  messagingSenderId: "791483147989",
  appId: "1:791483147989:web:f48df1ceb908ca0a35245c"
};

// firebase.initializeApp(firebaseConfig);

// const db= firebase.firestore();
// const googleAuthProvider= new firebase.auth.GoogleAuthProvider();



const app= initializeApp(firebaseConfig);
const auth= getAuth(app);
const db= getFirestore();

export{
  auth,
  db
}


