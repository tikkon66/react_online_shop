// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getFirestore, collection, onSnapshot } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA0uNcbeBemp1LXEz-JiRajLJ4bWRKivC4",
    authDomain: "shop-begin.firebaseapp.com",
    projectId: "shop-begin",
    storageBucket: "shop-begin.firebasestorage.app",
    messagingSenderId: "666783680083",
    appId: "1:666783680083:web:dae7a182681d36cc02a8a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

function subscribeToProducts(callback) {
    const unsub = onSnapshot(collection(db, "products"), (snapshot) => {
    const docs = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    }))

    callback(docs)
    });
    return unsub
}


export { subscribeToProducts }