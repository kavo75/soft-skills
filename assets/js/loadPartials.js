function loadPartial(partialId, partialFile) {
    const container = document.getElementById(partialId);

    fetch(partialFile)
        .then(response => response.text())
        .then(data => {
            container.innerHTML = data;
        })
        .catch(error => console.error("Error loading the partial:", error));
}

document.addEventListener("DOMContentLoaded", function() {
    loadPartial("header-main-topmenu", "assets/partials/header-main-topmenu.html");
    // Voeg hier meer partials toe die je wilt inladen
    // loadPartial("footer", "assets/partials/footer.html");
});
