// Menu burger
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.main-nav ul');

    if (burger && nav) {
        burger.addEventListener('click', function () {
            nav.classList.toggle('active');
            burger.classList.toggle('active');
        });
    }

    // Fermer le menu quand un lien est cliqué
    document.querySelectorAll('.main-nav a').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            burger.classList.remove('active');
        });
    });

    // Animation au scroll
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.fade-in');

        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (elementPosition < screenPosition) {
                element.classList.add('animated');
            }
        });
    };

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Appel initial

    // Gestion du formulaire de contact
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Récupération des valeurs
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Ici vous pourriez ajouter un appel AJAX pour envoyer le formulaire
            console.log('Formulaire soumis:', { name, email, message });

            // Affichage d'un message de succès
            alert('Merci pour votre message ! Je vous répondrai dès que possible.');
            contactForm.reset();
        });
    }
});