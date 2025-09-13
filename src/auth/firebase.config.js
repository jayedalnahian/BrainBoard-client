// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDtYvV3Uc6TwDNmBfn3NGZPXVWjlQx4XN8",
  authDomain: "brainboard-5a253.firebaseapp.com",
  projectId: "brainboard-5a253",
  storageBucket: "brainboard-5a253.firebasestorage.app",
  messagingSenderId: "921284524774",
  appId: "1:921284524774:web:8b421d0d05990e3ecf9927"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export default auth