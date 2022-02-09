// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD2VxBzEREuJq6NfNxvgbIMknFt2ZfzkEg",
    authDomain: "proyecto-js-1dec1.firebaseapp.com",
    projectId: "proyecto-js-1dec1",
    storageBucket: "proyecto-js-1dec1.appspot.com",
    messagingSenderId: "273043167316",
    appId: "1:273043167316:web:34e1c48771c6f25280b5c1"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const autentificacion = getAuth(app);

export {app, autentificacion};