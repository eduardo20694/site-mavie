document.addEventListener('DOMContentLoaded', () => {
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.section');
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            if (sectionTop < window.innerHeight * 0.8) {
                section.style.transform = 'translateY(0)';
                section.style.opacity = 1;
            }
        });
    });
});

