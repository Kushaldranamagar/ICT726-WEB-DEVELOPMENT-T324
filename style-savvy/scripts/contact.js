document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form fields
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Error messages
    let errors = [];

    // Validation
    if (!firstName || /\d/.test(firstName)) {
        errors.push("First Name must not be empty or contain numbers.");
    }

    if (!lastName || /\d/.test(lastName)) {
        errors.push("Last Name must not be empty or contain numbers.");
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        errors.push("Enter a valid email address.");
    }

    if (!message) {
        errors.push("Message cannot be empty.");
    } else if (message.length > 250) {
        errors.push("Message cannot exceed 250 characters.");
    }

    // If errors exist, show a popup
    if (errors.length > 0) {
        alert("Please fix the following errors:\n\n" + errors.join("\n"));
    } else {
        alert("Message sent successfully! Thank you for contacting Ava.");
        // Optionally, reset the form
        document.getElementById('contactForm').reset();
    }
});
