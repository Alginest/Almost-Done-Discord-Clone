import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyB6yf8Qyy_vmiw_SCoiEkau0GQ9yIhQuCM",
  authDomain: "discord-clone-6e59c.firebaseapp.com",
  projectId: "discord-clone-6e59c",
  storageBucket: "discord-clone-6e59c.appspot.com",
  messagingSenderId: "68978376258",
  appId: "1:68978376258:web:b1ed671eeb1728a95fb7db",
  measurementId: "G-5DQ78PH7XC",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
