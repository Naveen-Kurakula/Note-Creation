const con=require("./db_connect");  
               // we need this file because we need connection

async function createTable(){
    let sql=`CREATE TABLE if not exists notes(
        noteID INT NOT NULL AUTO_INCREMENT,
        note VARCHAR(100) NOT NULL UNIQUE,
        userID INT,
        CONSTRAINT notePK PRIMARY KEY(noteID),
        CONSTRAINT FOREIGN KEY (userID) REFERENCES users(userID)

    );`
    await con.query(sql);                            // we need await when used async
}

createTable();

// grabbing all notes in database
async function getAllNotes() {
  const sql = `SELECT * FROM notes;`;
  let notes = await con.query(sql);
  console.log(notes)
}
async function createNote(note){

  let cNote=await getNote(note);

  const sql=`INSERT INTO notes(note,userID) VALUES ("${note.note}",${note.userID});`
  //const sql=`INSERT INTO notes(note) VALUES ("${note.note}");`

  await con.query(sql);
  return cNote[0];
  
}

// Read Note
async function Read(note) { // {userName: "sda", password: "gsdhjsga"}
  let cNote = await getNote(note); //[{userName: "cathy123", password: "icecream"}]
  
  //if(!cNote[0]) throw Error("NoteID not found");
  

  return cNote[0];
}

// Update Note function
async function editNotes(note) {
  let sql = `UPDATE notes 
    SET note = "${note.note}"
    WHERE noteID = ${note.noteID}
  `;

  await con.query(sql);
  let updatedNote = await getNote(note);
  return updatedNote[0];
}

// Delete Note function
async function deleteNote(note) {
  let sql = `DELETE FROM notes
    WHERE noteID = ${note.noteID}
  `
  await con.query(sql);
}

// Useful Functions
async function getNote(note) {
  let sql;

  if(note.userID) {
    sql = `
      SELECT * FROM notes
       WHERE userID = ${note.userID}
    `
  } else {
    sql = `
    SELECT * FROM notes 
      WHERE noteID = "${note.noteID}"
  `;
  }
  return await con.query(sql);  
}

module.exports = { getNote, Read, editNotes, deleteNote,createNote};