import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBJo86z8BViGVsgQU2U_Cv8hVo8Jg-2V08",
  authDomain: "amz-clone-bc788.firebaseapp.com",
  projectId: "amz-clone-bc788",
  storageBucket: "amz-clone-bc788.appspot.com",
  messagingSenderId: "87413694050",
  appId: "1:87413694050:web:0c844da959107f72c17b3b",
  measurementId: "G-6L0VZ70Q14",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
