// Script to load the top menu from the header-main-topmenu.html file
fetch('assets/partials/header-main-topmenu.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-main-topmenu').innerHTML = data;
    })
    .catch(error => {
        console.error("Error loading the menu:", error);
    });
//