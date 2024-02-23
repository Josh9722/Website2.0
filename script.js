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

// Pre-loader functionality
window.addEventListener('load', function () {
    document.getElementById('preloader').style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function () {
    typeAnimation();
});
