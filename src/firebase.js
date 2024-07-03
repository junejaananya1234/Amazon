import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCDPCSq9H8HeUx0ArkFCSq47AaoiLzjHvw",
  authDomain: "clone-6bd50.firebaseapp.com",
  projectId: "clone-6bd50",
  storageBucket: "clone-6bd50.appspot.com",
  messagingSenderId: "124275383922",
  appId: "1:124275383922:web:9bc3568d410ad15e402ceb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };