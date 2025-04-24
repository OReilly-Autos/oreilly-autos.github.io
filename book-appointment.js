document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('appointmentForm');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Validate required fields
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.style.borderColor = 'red';
                isValid = false;
            } else {
                field.style.borderColor = '#ddd';
            }
        });

        if (!isValid) {
            alert('Please fill in all required fields');
            return;
        }

        // Collect form data
        const formData = {
            customer: {
                firstName: form.elements.firstName.value,
                lastName: form.elements.lastName.value,
                email: form.elements.email.value,
                phone: form.elements.phoneNumber.value
            },
            vehicle: {
                make: form.elements.make.value,
                model: form.elements.model.value,
                year: form.elements.year.value,
                licensePlate: form.elements.licensePlate.value
            },
            appointment: {
                date: form.elements.date.value,
                time: form.elements.time.value,
                notes: form.elements.notes.value
            }
        };

        // Here you would typically send the data to your backend
        console.log('Appointment data:', formData);

        // Show success message
        alert('Appointment booked successfully!');
        form.reset();

        // In a real app, you would redirect or show a confirmation page
        // window.location.href = '/confirmation';
    });

    // Add input validation
    form.querySelectorAll('input, textarea').forEach(input => {
        input.addEventListener('input', function() {
            if (this.hasAttribute('required') && !this.value.trim()) {
                this.style.borderColor = 'red';
            } else {
                this.style.borderColor = '#ddd';
            }
        });
    });
});