// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlCjVjIoy_VvIdZnb-tq-P9t9_kvswp6A",
  authDomain: "firbase9-f2585.firebaseapp.com",
  projectId: "firbase9-f2585",
  storageBucket: "firbase9-f2585.appspot.com",
  messagingSenderId: "744545554038",
  appId: "1:744545554038:web:09d2a862e841cf240e5957",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

export { storage };
