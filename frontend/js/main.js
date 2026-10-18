// Funciones principales de la aplicación
document.addEventListener('DOMContentLoaded', function() {
    // Inicialización del menú móvil
    const menuBtn = document.querySelector('.menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', function() {
            const nav = document.querySelector('nav');
            if (nav) {
                nav.classList.toggle('active');
            }
        });
    }
    
    // Formulario de contacto
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.textContent = 'Enviando...';
                submitBtn.disabled = true;
            }
        });
    });
    
    // Scroll reveal efecto
    const reveals = document.querySelectorAll('.reveal');
    reveals.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s, transform 0.6s';
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        });
        
        observer.observe(element);
    });
});