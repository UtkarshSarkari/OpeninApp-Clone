import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyC9ltbdiLsoAcicuTNGcEGUgBDd2F_aIE0",
  authDomain: "openinapp-60ff2.firebaseapp.com",
  projectId: "openinapp-60ff2",
  storageBucket: "openinapp-60ff2.appspot.com",
  messagingSenderId: "211970835326",
  appId: "1:211970835326:web:18b62e77b7d7143cffa92f"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);
export const provider1 = new GoogleAuthProvider();
export const provider2 = new GithubAuthProvider();