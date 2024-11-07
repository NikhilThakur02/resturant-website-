// Wait for the DOM to fully load before running the scripts
document.addEventListener('DOMContentLoaded', () => {

    // Select the form element
    const reservationForm = document.querySelector('.reservation-form');

    // Listen for form submission
    reservationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form from submitting normally

        // Validate form inputs
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;
        const guests = document.getElementById('guests').value;
        const requests = document.getElementById('requests').value.trim();

        // Simple validation
        if (!name || !email || !phone || !date || !time || !guests) {
            alert('Please fill in all the required fields.');
            return;
        }

        // Email validation pattern
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Phone validation (basic pattern for demo, adjust as needed)
        const phonePattern = /^[0-9]{10,14}$/;
        if (!phonePattern.test(phone)) {
            alert('Please enter a valid phone number.');
            return;
        }

        // Simulate sending the reservation data (This part should normally send to a server)
        alert('Reservation successful! We look forward to serving you.');
        
        // Reset form after submission
        reservationForm.reset();
    });

    // Real-time form validation and updates
    const inputs = document.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('input', (event) => {
            const target = event.target;
            if (target.validity.valid) {
                target.style.borderColor = 'green'; // Input is valid
            } else {
                target.style.borderColor = 'red'; // Input is invalid
            }
        });
    });

    // Show confirmation message in real-time after successful form validation
    const submitButton = document.querySelector('.reserve-btn');
    submitButton.addEventListener('click', () => {
        const name = document.getElementById('name').value;
        const confirmationMessage = document.createElement('p');
        // confirmationMessage.textContent = `Thank you, ${name}! Your table has been reserved for ${document.getElementById('date').value} at ${document.getElementById('time').value}.`;
        confirmationMessage.classList.add('confirmation-message');
        document.querySelector('.reservation').appendChild(confirmationMessage);
    });

});
