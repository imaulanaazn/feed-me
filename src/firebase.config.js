import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBLrH3TtS2iuYyV-8Ooz7A3utVMzIX5Z-w",
  authDomain: "fooddelivery-e562c.firebaseapp.com",
  databaseURL: "https://fooddelivery-e562c-default-rtdb.firebaseio.com",
  projectId: "fooddelivery-e562c",
  storageBucket: "fooddelivery-e562c.appspot.com",
  messagingSenderId: "1088702427335",
  appId: "1:1088702427335:web:bcc708b40a3b724e73cee2"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };