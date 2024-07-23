import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyD5LGUKsDGmjJVlo7JjG2RwKUS0dqgyVdg",
  authDomain: "netflixgpt-d0c90.firebaseapp.com",
  projectId: "netflixgpt-d0c90",
  storageBucket: "netflixgpt-d0c90.appspot.com",
  messagingSenderId: "237177855172",
  appId: "1:237177855172:web:853faaab65afe3b5f07d91",
  measurementId: "G-5ZDKZS5C5C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();