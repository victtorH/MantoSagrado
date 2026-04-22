 document.addEventListener("DOMContentLoaded", () => {
            // 1. Animação de entrada do cabeçalho
            const headerElements = document.querySelectorAll('#header-logo, #header-title, #header-desc');
            headerElements.forEach(el => el.classList.add('reveal-element'));
            
            // Pequeno atraso para dar tempo da página renderizar
            setTimeout(() => {
                headerElements.forEach(el => el.classList.add('visible'));
            }, 50);

            // 2. Animação de scroll suave para as seções do formulário
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15 // Dispara quando 15% do elemento estiver visível na tela
            };

            const revealObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target); // Anima apenas uma vez
                    }
                });
            }, observerOptions);

            // Prepara todas as seções para serem observadas
            const sections = document.querySelectorAll('.js-scroll-reveal');
            sections.forEach(section => {
                section.classList.add('reveal-element');
                revealObserver.observe(section);
            });
        });