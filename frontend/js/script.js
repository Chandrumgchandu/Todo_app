function deployAlert() {
    alert(
        "Deployment Successful!\n\n" +
        "Source: GitHub\n" +
        "Build Tool: Jenkins\n" +
        "Web Server: Nginx\n" +
        "Environment: AWS EC2\n" +
        "Version: v2.0"
    );
}

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){
        themeBtn.innerHTML = "☀️ Light Mode";
    } else {
        themeBtn.innerHTML = "🌙 Dark Mode";
    }

});
