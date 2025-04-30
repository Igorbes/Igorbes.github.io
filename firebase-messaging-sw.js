// // import { initializeApp } from "firebase/app";
// // import { getMessaging, onBackgroundMessage } from "firebase/messaging/sw";
//
// importScripts("https://www.gstatic.com/firebasejs/11.6.1/firebase-app-compat.js")
// importScripts("https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-compat.js")
//
//
// firebase.initializeApp({
//     apiKey: "AIzaSyCPonBWx1ACs0If9h8ZMmxhEGwa5Folccc",
//     authDomain: "trusteesecurity-demo.firebaseapp.com",
//     projectId: "trusteesecurity-demo",
//     storageBucket: "trusteesecurity-demo.firebasestorage.app",
//     messagingSenderId: "573985387120",
//     appId: "1:573985387120:web:738af0b8666787b64efab5",
//     measurementId: "G-KCM5K35T6V"
// });
//
// const messaging = firebase.messaging();
// messaging.onMessage((payload) => {
//     console.log('[firebase-messaging-sw.js] Received background message ', payload);
//     // Customize notification here
//     const notificationTitle = 'Background Message Title';
//     const notificationOptions = {
//         body: 'Background Message body.',
//         icon: '/firebase-logo.png'
//     };
//
//     self.registration.showNotification(notificationTitle,
//         notificationOptions);
// });