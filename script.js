document.addEventListener("DOMContentLoaded", function() {
  const glideButton = document.getElementById("glideButton");
  if (glideButton) {
    glideButton.addEventListener("click", function() {
      document.querySelector("#section2").scrollIntoView({ behavior: "smooth" });
    });
  }
});
