import {initializeApp} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import * as messaging from "https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCPonBWx1ACs0If9h8ZMmxhEGwa5Folccc",
    authDomain: "trusteesecurity-demo.firebaseapp.com",
    projectId: "trusteesecurity-demo",
    storageBucket: "trusteesecurity-demo.firebasestorage.app",
    messagingSenderId: "573985387120",
    appId: "1:573985387120:web:738af0b8666787b64efab5",
    measurementId: "G-KCM5K35T6V"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const msg = messaging.getMessaging(firebase);
messaging.onMessage(msg, (payload) => {
    console.log('Message received. ', payload);
    // ...
});