document.addEventListener('DOMContentLoaded', function() {
    const arrow = document.getElementById('scroll-arrow');
    
    arrow.addEventListener('click', function() {
        if (window.scrollY === 0) {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        } else {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });

    window.addEventListener('scroll', function() {
        if (window.scrollY === 0) {
            arrow.textContent = '↓';
        } else {
            arrow.textContent = '↑';
        }
    });
});
