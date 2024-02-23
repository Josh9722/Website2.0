// Typing animation for the homepage
const typingText = "My name is Josh Wells";
let index = 0;

function typeAnimation() {
    if (index < typingText.length) {
        document.getElementById("typing").textContent += typingText.charAt(index);
        index++;
        setTimeout(typeAnimation, 100); // Adjust typing speed as needed
    } else {
        // After typing is complete, optionally initiate slide down or another action
    }
}

// Pre-loader functionality
window.addEventListener('load', function () {
    document.getElementById('preloader').style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function () {
    typeAnimation();
});
