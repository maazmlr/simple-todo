import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {getFirestore} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"; 

const firebaseConfig = {
    apiKey: "AIzaSyAy7AqHvT0r_Bu64mAWV2MGnk2uVMUzVIo",
    authDomain: "quiz-app-97.firebaseapp.com",
    projectId: "quiz-app-97",
    storageBucket: "quiz-app-97.appspot.com",
    messagingSenderId: "911294033681",
    appId: "1:911294033681:web:58c135bd54fa767fd826b0"
  };
  
  const app = initializeApp(firebaseConfig); 
  const db=getFirestore(app)


export {app,db}