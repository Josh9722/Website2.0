// Typing animation for the homepage
const typingText = "My name is ";
const nameText = "Josh Wells"; // Text to be styled in red
let index = 0;
let nameIndex = 0;

function typeAnimation() {
    if (index < typingText.length) {
        document.getElementById("typing").innerHTML += typingText.charAt(index);
        index++;
        setTimeout(typeAnimation, 100); // Adjust typing speed as needed
    } else if (nameIndex < nameText.length) {
        document.getElementById("typing").innerHTML += `<span style="color: rgb(218, 52, 93);">${nameText.charAt(nameIndex)}</span>`;
        nameIndex++;
        setTimeout(typeAnimation, 100); // Continue typing with styled text
    }
    // No else part needed, typing is complete
}

document.addEventListener("DOMContentLoaded", function () {
    // Initiate typing animation
    typeAnimation();

    // Pre-loader functionality
    document.getElementById('preloader').style.display = 'none';

    // Header show/hide functionality
    var aboutMeSection = document.getElementById("about-me");
    var header = document.querySelector("header");

    window.addEventListener("scroll", function () {
        var homeSection = document.getElementById("home"); // Target the "Home" section
        var sectionTop = homeSection.offsetTop; // Get the position of the "Home" section
        var sectionHeight = homeSection.offsetHeight; // Height of the "Home" section

        // Check if the page is scrolled beyond the "Home" section
        if (window.scrollY > sectionTop + sectionHeight) {
            header.classList.add("visible"); // Show the header
        } else {
            header.classList.remove("visible"); // Hide the header
        }
    });

});
