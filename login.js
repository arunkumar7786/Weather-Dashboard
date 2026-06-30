async function login() {

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    const response = await fetch("data/users.json");

    const users = await response.json();

    const user = users.find(u =>
        u.username === username &&
        u.password === password
    );

    if(user){

        localStorage.setItem("username", username);

        window.location.href="dashboard.html";

    }else{

        alert("Invalid Username or Password");

    }

}