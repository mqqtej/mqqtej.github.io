document.addEventListener('DOMContentLoaded', function() {
    const pizzaFly = document.querySelector('.pizza-fly');
    const sections = document.querySelectorAll('section');
    const sideContents = document.querySelectorAll('.side-content');

    pizzaFly.style.animation = 'fly-in-out 4s ease-in-out';

    pizzaFly.addEventListener('animationstart', () => {
        sideContents.forEach(sideContent => {
            sideContent.style.opacity = 0;
        });
    });

    pizzaFly.addEventListener('animationend', () => {
        pizzaFly.style.display = 'none';
        sections.forEach(section => {
            section.style.opacity = 1;
        });
        sideContents.forEach(sideContent => {
            sideContent.style.opacity = 1;
        });
        document.body.style.overflowY = 'auto'; // Re-enable vertical scroll
    });
});
