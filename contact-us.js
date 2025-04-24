document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Form validation
        const firstName = document.getElementById('firstName').value.trim();
        const lastName = document.getElementById('lastName').value.trim();
        const email = document.getElementById('email').value.trim();
        const query = document.getElementById('query').value.trim();

        if (!firstName || !lastName || !email || !query) {
            alert('Please fill in all required fields');
            return;
        }

        // Email validation
        if (!validateEmail(email)) {
            alert('Please enter a valid email address');
            return;
        }

        // Form data object
        const formData = {
            firstName,
            lastName,
            email,
            phone: document.getElementById('phone').value.trim(),
            query
        };

        console.log('Form submitted:', formData);
        alert('Thank you for your message! We will contact you soon.');
        contactForm.reset();
    });

    // Email validation helper
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Add any additional interactive behaviors here
});