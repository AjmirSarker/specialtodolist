import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
  // apiKey: "AIzaSyDndLtwOkQtoFUxyBamu_f5Te6h0XQdMj8",
  // authDomain: "to-do-list-d91fa.firebaseapp.com",
  // projectId: "to-do-list-d91fa",
  // storageBucket: "to-do-list-d91fa.appspot.com",
  // messagingSenderId: "442345956796",
  // appId: "1:442345956796:web:0fff17d9dfbd51ce6777b9"
 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;