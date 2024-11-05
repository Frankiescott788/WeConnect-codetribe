"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storage = void 0;
// Import the functions you need from the SDKs you need
const app_1 = require("firebase/app");
const storage_1 = require("firebase/storage");
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
const app = (0, app_1.initializeApp)(firebaseConfig);
const storage = (0, storage_1.getStorage)(app);
exports.storage = storage;
