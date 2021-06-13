import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDs9tpqIuffvDcvl37YtGzs_xu3grlvmmE",
  authDomain: "auth-development-5a9f6.firebaseapp.com",
  projectId: "auth-development-5a9f6",
  storageBucket: "auth-development-5a9f6.appspot.com",
  messagingSenderId: "607586386103",
  appId: "1:607586386103:web:f4fe2549166dcba6144d32",
});

const firestore = app.firestore();
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: (doc) => {
    return { id: doc.id, ...doc.data() };
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
};
export const storage = app.storage();
export const auth = app.auth();
export default app;
