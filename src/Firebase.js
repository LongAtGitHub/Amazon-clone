import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};

// const firebaseConfig = {
//   apiKey: "AIzaSyCwp9V5aNBu5E0SsLH1y4qJrLL8QWUKGhM",
//   authDomain: "clone-6abe8.firebaseapp.com",
//   projectId: "clone-6abe8",
//   storageBucket: "clone-6abe8.appspot.com",
//   messagingSenderId: "752575321294",
//   appId: "1:752575321294:web:061c2c5c5aeed11253ec9f"
// };
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
