// Function to scroll to a specific screen
function scrollToScreen(screenId) {
    const targetScreen = document.getElementById(screenId);
    window.scrollTo({
        top: targetScreen.offsetTop,
        behavior: "smooth"
    });
}
