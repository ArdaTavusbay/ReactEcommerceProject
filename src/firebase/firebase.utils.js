import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBAI9-Ve7Eyr5zxjap-8B9dHxmt5YQ0fpM",
  authDomain: "crown-db-b4e06.firebaseapp.com",
  projectId: "crown-db-b4e06",
  storageBucket: "crown-db-b4e06.appspot.com",
  messagingSenderId: "952046460549",
  appId: "1:952046460549:web:b3b671218f009a9ee753ec",
  measurementId: "G-5S8Y2H3D77",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
