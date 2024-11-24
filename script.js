// Wait for the DOM content to load before executing
document.addEventListener("DOMContentLoaded", function () {
  const nextButtons = document.querySelectorAll(".next-btn");
  const prevButtons = document.querySelectorAll(".prev-btn");

  // Add event listeners to Next buttons
  nextButtons.forEach(button => {
    button.addEventListener("click", function () {
      const nextPageId = this.getAttribute("data-next"); // Get the next page's id
      scrollToPage(nextPageId);
    });
  });

  // Add event listeners to Previous buttons
  prevButtons.forEach(button => {
    button.addEventListener("click", function () {
      const prevPageId = this.getAttribute("data-prev"); // Get the previous page's id
      scrollToPage(prevPageId);
    });
  });

  // Function to scroll to the specific page
  function scrollToPage(pageId) {
    const page = document.getElementById(pageId);
    if (page) {
      window.scrollTo({
        top: page.offsetTop,
        behavior: 'smooth',
      });
    }
  }
});
