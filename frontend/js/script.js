function showDeployment() {

alert(
`Deployment Successful

Repository : GitHub
Pipeline   : Jenkins
Server     : AWS EC2
Web Server : Nginx

Build Version : v3.0.0

CI/CD Status : SUCCESS`
);

}

const themeBtn = document.getElementById("themeToggle");

themeBtn.addEventListener("click", () => {

document.body.classList.toggle("light");

});

function updateClock(){

const now = new Date();

document.getElementById("clock").innerHTML =
now.toLocaleString();

}

setInterval(updateClock,1000);

updateClock();
