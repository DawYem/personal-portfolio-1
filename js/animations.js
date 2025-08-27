document.addEventListener('DOMContentLoaded', () => {
    const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const animateOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(animateOnScroll, options);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });

    const hoverElements = document.querySelectorAll('.hover-animate');

    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.classList.add('scale-up');
        });

        element.addEventListener('mouseleave', () => {
            element.classList.remove('scale-up');
        });
    });
});