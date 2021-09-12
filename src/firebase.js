import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDK1ROsPqbHCaWfnIF13DrMD1VVswj5EhM",
  authDomain: "disneyplus-clone-20f64.firebaseapp.com",
  projectId: "disneyplus-clone-20f64",
  storageBucket: "disneyplus-clone-20f64.appspot.com",
  messagingSenderId: "845898967225",
  appId: "1:845898967225:web:40be4ebcdac2a586239368",
  measurementId: "G-7VJ8JRPL4J"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
