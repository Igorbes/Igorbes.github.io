import {initializeApp} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import {getMessaging, onBackgroundMessage} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-sw.js";

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
const firebaseApp = initializeApp({
    apiKey: "AIzaSyCPonBWx1ACs0If9h8ZMmxhEGwa5Folccc",
    authDomain: "trusteesecurity-demo.firebaseapp.com",
    projectId: "trusteesecurity-demo",
    storageBucket: "trusteesecurity-demo.firebasestorage.app",
    messagingSenderId: "573985387120",
    appId: "1:573985387120:web:738af0b8666787b64efab5",
    measurementId: "G-KCM5K35T6V"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = getMessaging(firebaseApp);
onBackgroundMessage(messaging, (payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    const notificationTitle = 'Background Message Title';
    const notificationOptions = {
        body: 'Background Message body.',
        icon: '/firebase-logo.png'
    };

    self.registration.showNotification(notificationTitle,
        notificationOptions);
});