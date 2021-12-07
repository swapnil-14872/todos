import firebase from "firebase";

const firebaseapp=firebase.initializeApp
(
    {
        apiKey: "AIzaSyD4L01FNgY1R51cpBN8tsG7-_r9GiTtdXQ",
        authDomain: "todo-app-ag.firebaseapp.com",
        projectId: "todo-app-ag",
        storageBucket: "todo-app-ag.appspot.com",
        messagingSenderId: "68037390295",
        appId: "1:68037390295:web:94216ca539874b3169a592",
        measurementId: "G-X78TD4PZ7V"
      }
);

const db=firebaseapp.firestore();
const auth=firebase.auth();
export default db;