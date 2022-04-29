// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlLeU0qmFFsE3a4fb8P_XT9i7yK0UccdM",
  authDomain: "the-share-board.firebaseapp.com",
  projectId: "the-share-board",
  storageBucket: "the-share-board.appspot.com",
  messagingSenderId: "504228984749",
  appId: "1:504228984749:web:334098995e944178259324",
  measurementId: "G-6DKT0TW1XK",
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default firebase;