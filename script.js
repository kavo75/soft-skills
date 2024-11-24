// Function to scroll to a specific page
function scrollToPage(pageNumber) {
  const page = document.getElementById(`page${pageNumber}`);
  window.scrollTo({
    top: page.offsetTop,
    behavior: 'smooth'
  });
}

// Show the appropriate page based on navigation
window.addEventListener('load', () => {
  const hash = window.location.hash;
  if (hash) {
    const pageNumber = hash.replace('#page', '');
    scrollToPage(pageNumber);
  } else {
    // If no hash is present, default to page 1
    scrollToPage(1);
  }
});
