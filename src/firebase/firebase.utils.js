import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD_8k921mY390rSQWmlwpr_13bUWN8R1hk",
  authDomain: "crwn-db-ed715.firebaseapp.com",
  projectId: "crwn-db-ed715",
  storageBucket: "crwn-db-ed715.appspot.com",
  messagingSenderId: "724412542823",
  appId: "1:724412542823:web:4a9fee7d7ae6069e1689c2"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;