
import { fetchData, getCurrentUser, setCurrentUser} from "./fetch.js";
// user class
class User {
  constructor(username, password, firstname, lastname) {
    this.username = username;
    this.password = password;
    this.firstname = firstname;
    this.lastname = lastname;
  }

  getUsername() {
    return this.username;
  }
}

// login functionality
let loginForm = document.getElementById("login-page");
if(loginForm) loginForm.addEventListener('submit', login);

function login(e) {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let user = new User(username, password);

  fetchData("/users/login", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "note.html";
  })
  .catch((err) => {
    console.log(`Error!!! ${err.message}`)
  }) 
}
 
// register functionality
let regForm = document.getElementById("register-page");
if(regForm) regForm.addEventListener('submit', register);

function register(e) {
  e.preventDefault();
  
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let user = new User(username, password, firstname,lastname);
  console.log(user);
  fetchData("/users/register", user, "POST")
  .then((data) => {
    setCurrentUser(data);
    window.location.href = "note.html";
  })
  .catch((err) =>{
    console.log(err);
  })
}







