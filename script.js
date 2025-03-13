document.querySelector(".arrow-icon").addEventListener("click", function() {
    const projectsSection = document.getElementById("projects");
    const offset = 50; // Espacio desde la parte superior
    const targetPosition = projectsSection.offsetTop - offset;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    const duration = 1000; // Duración en milisegundos (2s para una animación más lenta)
    let startTime = null;

    // Función de interpolación ease-in-out
    function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
    }

    function smoothScroll(currentTime) {
        if (!startTime) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const easeProgress = easeInOutQuad(progress);

        window.scrollTo(0, startPosition + distance * easeProgress);

        if (timeElapsed < duration) {
            requestAnimationFrame(smoothScroll);
        }
    }

    requestAnimationFrame(smoothScroll);
});
