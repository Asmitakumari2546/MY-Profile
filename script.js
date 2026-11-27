
let followers = 0;

function follow() {
    followers++;

    document.getElementById("count").innerHTML =
    "Followers: " + followers;
}

function darkMode() {
    document.body.classList.toggle("dark");
}

function changeStatus() {
    document.getElementById("status").innerHTML =
    "Status: Learning JavaScript";
}
