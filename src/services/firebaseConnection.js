import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCOnZFypIm9rEpfcX8--v-Jl83LvpqIbxs",
  authDomain: "financas-e6ea0.firebaseapp.com",
  projectId: "financas-e6ea0",
  storageBucket: "financas-e6ea0.appspot.com",
  messagingSenderId: "65772396551",
  appId: "1:65772396551:web:2223ee3e92ed70ad3c4aa2",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
