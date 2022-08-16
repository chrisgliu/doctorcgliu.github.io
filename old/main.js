
 function tbm() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var images = document.body.getElementsByTagName("g");
    for (var image of images) {
        image.classList.toggle("dark-img");
    }
    var circles = document.body.getElementsByTagName("circle");
    for (var circle of circles) {
        circle.classList.toggle("dark-img");
    }
    var table = document.body.getElementsByTagName("td");
    for (var entry of table) {
        entry.classList.toggle("dark-img");
    }
}

document.addEventListener("DOMContentLoaded", function(){
    const navIcon = document.querySelector(".nav-icon");
    const nav = document.querySelector("nav");

    navIcon.onclick = function () {
        nav.classList.toggle('show');
    }
});