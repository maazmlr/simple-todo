import {app,db} from "./firebase.js"
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { collection, addDoc,onSnapshot,doc,deleteDoc} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-firestore.js"; 

// const firebaseConfig = {
//   apiKey: "AIzaSyAy7AqHvT0r_Bu64mAWV2MGnk2uVMUzVIo",
//   authDomain: "quiz-app-97.firebaseapp.com",
//   projectId: "quiz-app-97",
//   storageBucket: "quiz-app-97.appspot.com",
//   messagingSenderId: "911294033681",
//   appId: "1:911294033681:web:58c135bd54fa767fd826b0"
// };

// const app = initializeApp(firebaseConfig); 
// const db=getFirestore(app)
let ul=document.querySelector('ul');
let input=document.querySelector('#text')
let btn_todo=document.querySelector('#addTodo')
const date = new Date().toLocaleString()


const getTodoData = ()=>{
  onSnapshot(collection(db, "todo-application"), (data) => {
    data.docChanges().forEach((change) => {
      if (change.type=="removed"){
        let dtodo=document.getElementById(change.doc.id)
        dtodo.remove()

      }
      else{
      console.log("data..........",change.doc.data().value)
      ul.innerHTML+= `<li id=${change.doc.id}> <input type="text" name="" id="abc" value='${change.doc.data().value}'disabled>  <span>${change.doc.data().time}</span>  <button id="delete">delete</button>
    <button id="edit">edit</button></li>`
      }
    let dels=document.querySelectorAll('#delete') 
    dels.forEach((del)=>{ del.addEventListener('click',async()=>{
          console.log(change.doc.id)
      await deleteDoc(doc(db, "todo-application",change.doc.id));
    })
    
    })
  
     let edits=document.querySelectorAll('#edit')
     edits.forEach((edit)=>{ 
     edit.addEventListener('click',()=>{
      let inp=document.querySelector('#abc')
      console.log(inp)
      inp.disabled=!inp.disabled
      inp.focus()
  
      // edits.textContent=input.disabled ? "edit" : "update";
     
     })
  })
  })

  });
}
getTodoData()

btn_todo.addEventListener('click',async()=>{
  try{
  const docRef = await addDoc(collection(db, "todo-application"), {
    value: input.value,
    time: date
  });
  console.log("Document written with ID: ", docRef.id);
  }
  catch(err){
    console.log(err)
  }
    
  let out=document.querySelector('li')
  
  input.value=''
  
 
    })


