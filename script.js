// JavaScript om het glijden tussen de pagina's mogelijk te maken
document.querySelectorAll('.next-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const nextPage = document.getElementById(e.target.dataset.next);
        window.scrollTo({
            top: nextPage.offsetTop,
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('.prev-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const prevPage = document.getElementById(e.target.dataset.prev);
        window.scrollTo({
            top: prevPage.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Smooth scroll voor het menu
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});
