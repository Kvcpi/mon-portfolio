// Sélectionne les éléments nécessaires
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.navbar ul');

// Fonction pour basculer l'état du menu
function toggleMenu() {
    menu.classList.toggle('active');
    menuToggle.classList.toggle('active'); // Ajoute ou enlève la classe active sur le hamburger
}

// Ouvre/ferme le menu au clic sur le bouton hamburger
menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // Empêche le clic de se propager et de fermer le menu
    toggleMenu();
});

// Ferme le menu si l'utilisateur clique en dehors du menu ou du bouton hamburger
document.body.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        menu.classList.remove('active');
        menuToggle.classList.remove('active');
    }
});
