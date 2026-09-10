import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, set, onValue, update, push, remove } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyAO05fwjsreiun_lSEo2SxO3TGwQNmdXmE",
  authDomain: "doorprize-app-eee26.firebaseapp.com",
  databaseURL: "https://doorprize-app-eee26-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "doorprize-app-eee26",
  storageBucket: "doorprize-app-eee26.firebasestorage.app",
  messagingSenderId: "751643663",
  appId: "1:751643663:web:38e68a4de95c561ae8c77a",
  measurementId: "G-H9RHPX3J7J"
};

const app = initializeApp(firebaseConfig);

// SANGAT PENTING: Masukkan databaseURL ke dalam getDatabase agar mengarah ke asia-southeast1
export const db = getDatabase(app, firebaseConfig.databaseURL);

export { ref, set, onValue, update, push, remove };
