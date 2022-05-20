import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCf3QU6IHyIkbpxbcdwi0gEpR1vTB1qnG8",
  authDomain: "jnecommerce-beab3.firebaseapp.com",
  projectId: "jnecommerce-beab3",
  storageBucket: "jnecommerce-beab3.appspot.com",
  messagingSenderId: "741434601583",
  appId: "1:741434601583:web:b8b231c48c4bb1812add9a"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db