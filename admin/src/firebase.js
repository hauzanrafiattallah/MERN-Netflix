// firebase.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBfmGMHJlVSNd_c3k8xYVrl4sFsieLz2HY",
  authDomain: "netflix-090205.firebaseapp.com",
  projectId: "netflix-090205",
  storageBucket: "netflix-090205.appspot.com",
  messagingSenderId: "838041834556",
  appId: "1:838041834556:web:405ade18c61c286ceb1f39",
  measurementId: "G-FCQEZWNDNS"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
