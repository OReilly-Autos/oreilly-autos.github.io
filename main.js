document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        if (button.getAttribute('href') === currentPage) {
            button.classList.add('active');
            button.style.backgroundColor = '#333';
        }
    });
});