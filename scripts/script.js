class User{
    constructor(firstname,lastname,username,password)
    {
        this.firstname=firstname;
        this.lastname=lastname;
        this.username=username;
        this.password=password;
    }
    getusername(){
        return this.username;
    }
    setusername(newusername){
        this.username = newusername;
    }
    getpassword(){
        return this.password;
    }
    setpassword(newpassword){
        this.password=newpassword
    }
    getfirstname(){
        return this.firstname;
    }
    setfirstname(newfirstname){
        this.firstname = newfirstname;
    }
    getlastname(){
        return this.lastname;
    }
    setlastname(newlastname){
        this.lastname=newlastname;
    }
}

let login = document.getElementById("login-page");
let register = document.getElementById("register-page");


if(login) login.addEventListener('submit',loginpageFunction)
if(register) register.addEventListener('submit',registerpageFunction)




function loginpageFunction(e)
{
    e.preventDefault();
    let username=document.getElementById('UserName').value;
    let password=document.getElementById('Pwd').value;


    const user1=new User(null,null,username,password);
    console.log(user1);
    

}


function registerpageFunction(e)
{
    e.preventDefault()
    let firstname=document.getElementById('firstname').value;
    let lastname=document.getElementById('lastname').value;
    let username=document.getElementById('username').value;
    let password=document.getElementById('Pwd').value;

   
    const user1=new User(firstname,lastname,username,password);
    console.log(user1);
   
}


class Note{
    constructor(note)
    {
        this.note=note;
    }


getnote(){
    return this.note;
}
setnote(newnote){
    this.note = note;
}


}


let note = document.getElementById("note-page")

if(note) note.addEventListener('submit',notepageFunction)





function notepageFunction(e)
{
    e.preventDefault();
    var note=document.getElementById('note').value;

    const note1=new Note(note);
    console.log(note1);
}

const printusers= document.getElementById("print");
document.getElementById("users-btn").addEventListener('click', getUsers);

function getUsers()
{
    fetch("http://localhost:3000/users")
    .then((res)=>res.json())
    .then((data) => {
        
        data.forEach((user) => {
            let section = `
            <div class="printusersSection">
                <h3>${user.userName}</h3>
                <h3>${user.password}</h3>
                <br>
            </div>
            `
            printusers.innerHTML+=section;
        })
    })
    .catch((err)=>console.log(`Error! ${err}`));
}


const printnotes= document.getElementById("printN");
document.getElementById("notes-btn").addEventListener('click', getNotes);

function getNotes()
{
    fetch("http://localhost:3000/notes")
    .then((res)=>res.json())
    .then((data) => {
        
        data.forEach((note) => {
            let section = `
            <div class="printnotes">
                <h1>${note.note}</h1>
                
                
            </div>
            `
            printnotes.innerHTML+=section;
        })
    })
    .catch((err)=>console.log(`Error! ${err}`));
}