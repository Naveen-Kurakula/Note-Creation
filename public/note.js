
import { fetchData, getCurrentUser, setCurrentUser, setCurrentNote } from "./main.js";
let detailNote = document.getElementById("note-page");
if(detailNote) detailNote.addEventListener('submit', fannote);


  function fannote(e){
    e.preventDefault();
    let notes=document.getElementById('note').value;

    let note = new Note(notes);
    let user = getCurrentUser();
    note.userID = user.userID;

    fetchData("/notes/create", note, "POST")
    .then((data) => {
    //setCurrentNote(data);
    setCurrentNote(data);
    window.location.href = "note.html";
    })
    .catch((err) =>{
    let p = document.querySelector('.error');
    p.innerHTML = err.message;
    })

    const Note1 = new Note(notes);
    console.log(Note1);
    window.location.href = "note.html";
    document.getElementById("note-page").reset();
}

class Note {
    constructor(note) {
      this.note = note;
      
    }
  
    getNote() {
      return this.note;
    }
  }

  let user = getCurrentUser();
  if(user && detailNote) getNotes();



// 
function getNotes(){
  
  let user = getCurrentUser();
   fetchData("/notes/", user,"post")
   .then((data)=>{
       let ul=document.getElementById("totalNotes");

       data.forEach((note)=>{
           let li=document.createElement('li');
           let text=document.createTextNode(note.note);
           li.appendChild(text);
           ul.appendChild(li);

       })
   })
   .catch((err)=>console.log(`Error! ${err}`));

   //window.location.href="note.html";
}

/*
function setCurrentUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}
// getting current user function
// FIX this next class
function getCurrentUser() {
  return JSON.parse(localStorage.getItem('user'));
}

// logout function for current user
function removeCurrentUser() {
  localStorage.removeItem('user')
}

 function setCurrentNote(note) {
  localStorage.setItem('note', JSON.stringify(note));
}

// getting current note function
function getCurrentNote() {
  return JSON.parse(localStorage.getItem('note'));
}
*/