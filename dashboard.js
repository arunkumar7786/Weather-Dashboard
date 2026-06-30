const welcome = document.getElementById("welcome");

const logoutBtn = document.getElementById("logoutBtn");

const user = localStorage.getItem("loggedInUser");

if(!user){

    window.location.href="index.html";

}

welcome.innerText = "Welcome, " + user;

logoutBtn.addEventListener("click",()=>{

    localStorage.removeItem("loggedInUser");

    window.location.href="index.html";

});