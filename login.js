const loginForm = document.getElementById("loginForm");
const error = document.getElementById("error");

loginForm.addEventListener("submit", async function (e) {

    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    error.textContent = "";

    try {

        const response = await fetch("users.json");

        const users = await response.json();

        const user = users.find(u =>
            u.username === username &&
            u.password === password
        );

        if (user) {

            // Save logged-in user
            localStorage.setItem("loggedInUser", username);

            // Redirect
            window.location.href = "dashboard.html";

        } else {

            error.textContent = "Invalid username or password";

        }

    } catch (err) {

        error.textContent = "Unable to load users.json";

        console.error(err);

    }

});