document.addEventListener('DOMContentLoaded', function() {
    // Highlight current page link
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (currentPage === linkPage) {
            link.classList.add('active');
        }

        // Optional: Add click handler for smooth scrolling
        link.addEventListener('click', function(e) {
            if (linkPage === currentPage) {
                e.preventDefault();
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Optional: Mobile menu toggle for responsive design
    const mobileMenuToggle = document.createElement('button');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '☰';
    document.querySelector('.header').prepend(mobileMenuToggle);

    mobileMenuToggle.addEventListener('click', function() {
        document.querySelector('nav').classList.toggle('show');
    });
});