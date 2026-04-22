        document.addEventListener('DOMContentLoaded', () => {
            
            /* 1. Animação de Scroll Reveal (Intersection Observer) */
            // Seleciona todas as secções
            const sections = document.querySelectorAll('.section');
            
            // Configura o observador
            const observerOptions = {
                root: null, // Usa a janela de visualização do browser
                rootMargin: '0px',
                threshold: 0.15 // Dispara quando 15% do elemento é visível
            };

            const sectionObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    // Se a secção entrou no ecrã
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        // Deixa de observar após animar uma vez para melhorar o desempenho
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            // Inicia a observação de cada secção
            sections.forEach(section => {
                sectionObserver.observe(section);
            });


            /* 2. Barra de Progresso do Formulário */
            const inputs = document.querySelectorAll('.input-track');
            const progressBar = document.getElementById('progressBar');
            const totalInputs = inputs.length;

            function updateProgress() {
                let filledInputs = 0;

                inputs.forEach(input => {
                    // Verifica se o campo tem texto (removendo espaços em branco extras)
                    if (input.value.trim() !== '') {
                        filledInputs++;
                        input.classList.add('has-value'); // Adiciona classe visual
                    } else {
                        input.classList.remove('has-value'); // Remove classe visual se apagado
                    }
                });

                // Calcula a percentagem e atualiza a barra
                const percentage = (filledInputs / totalInputs) * 100;
                progressBar.style.width = percentage + '%';
                
                // Muda a cor para verde se estiver 100% preenchido
                if (percentage === 100) {
                    progressBar.style.backgroundColor = '#10b981'; // Verde sucesso
                } else {
                    progressBar.style.backgroundColor = 'var(--primary)'; // Azul padrão
                }
            }

            // Adiciona o evento de input a todos os campos para atualizar em tempo real
            inputs.forEach(input => {
                input.addEventListener('input', updateProgress);
            });

        });