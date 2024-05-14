import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDmIYIugstLNCQ-hC2lGo3EbuCkeAFLR44",
  authDomain: "reactchat-366eb.firebaseapp.com",
  projectId: "reactchat-366eb",
  storageBucket: "reactchat-366eb.appspot.com",
  messagingSenderId: "1003597763002",
  appId: "1:1003597763002:web:ec70f4fe260a08fced0d83",
  databaseURL: "https://reactchat-366eb-default-rtdb.firebaseio.com",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export const storage = getStorage();
