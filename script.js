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

document.addEventListener("DOMContentLoaded", () => {
    const carousels = document.querySelectorAll(".carousel");

    carousels.forEach(carousel => {
        // 1. Crear un "envoltorio" dinámicamente para no tocar tu HTML
        const wrapper = document.createElement("div");
        wrapper.className = "carousel-wrapper";
        
        // Insertar el envoltorio y meter el carrusel dentro
        carousel.parentNode.insertBefore(wrapper, carousel);
        wrapper.appendChild(carousel);

        // 2. Lógica para animar la opacidad suavemente
        const updateGradients = () => {
            const scrollLeft = Math.round(carousel.scrollLeft);
            const maxScrollLeft = Math.round(carousel.scrollWidth - carousel.clientWidth);

            // Si no hay scroll (ej. pantalla grande), quitamos todo
            if (maxScrollLeft <= 0) {
                wrapper.classList.add("no-mask");
                return;
            } else {
                wrapper.classList.remove("no-mask");
            }

            // Al inicio
            if (scrollLeft <= 5) {
                wrapper.classList.remove("is-scrolled", "is-end");
            } 
            // Al final
            else if (scrollLeft >= maxScrollLeft - 5) {
                wrapper.classList.add("is-scrolled", "is-end");
            } 
            // En el medio
            else {
                wrapper.classList.add("is-scrolled");
                wrapper.classList.remove("is-end");
            }
        };

        // Escuchar eventos
        carousel.addEventListener("scroll", updateGradients);
        
        // Ejecutar los cálculos
        updateGradients();
        window.addEventListener("load", updateGradients);
        window.addEventListener("resize", updateGradients);
    });
});