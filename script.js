var database = [{
    user: 'William',
    password: 'Derbi2009'
}];

let user = document.getElementById("userinput");
let userpass = document.getElementById("userpass");

function signIn(ev) {
    ev.preventDefault();
    if (user.value === database[0].user && userpass.value === database[0].password) {
        window.location.replace("ag1.html")
    } else {
        alert("Wrong username");
    }
}

document.getElementById("signInBtn").addEventListener("click", signIn);