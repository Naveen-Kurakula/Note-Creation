const login = document.getElementById("login-page");
const register = document.getElementById("register-page");
const note = document.getElementById("note-page")

if(login) login.addEventListener('submit',loginpageFunction)
if(register) register.addEventListener('submit',registerpageFunction)
if(note) note.addEventListener('submit',notepageFunction)

function loginpageFunction(e)
{
    e.preventDefault();
    let username=document.getElementById('UserName').value;
    let password=document.getElementById('Pwd').value;


    class User{
        constructor(username,password)
        {
            this.username=username;
            this.password=password;
        }
    
    
    
    getusername(){
        return this.username;
    }
    setusername(newusername){
        this.username = username;
    }
    getpassword(){
        return this.password;
    }
    setpassword(newpassword){
        this.password = password
    }

    }

    const Userl=new User(username,password);
    console.log(Userl);
    login.reset();

}


function registerpageFunction(e)
{
    e.preventDefault()
    let firstname=document.getElementById('firstname').value;
    let lastname=document.getElementById('lastname').value;
    let username=document.getElementById('username').value;
    let password=document.getElementById('Pwd').value;

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

    const user1=new User(firstname,lastname,username,password);
    console.log(user1);
    register.reset();
}


function notepageFunction(e)
{
    e.preventDefault();
    var note=document.getElementById('note').value;

    class User{
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

    const Userl=new User(note);
    console.log(Userl);
    

}