document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Regular Expressions
    const nameRegex = /^[a-zA-Z\s]+$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nicRegex = /^\d{5}-\d{7}-\d{1}$/; // Format: 12345-1234567-1

    // Form Fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const nic = document.getElementById('nic').value;

    // Error Elements
    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const nicError = document.getElementById('nicError');

    // Validation Flags
    let isValid = true;

    // Name Validation
    if (!nameRegex.test(name)) {
        nameError.textContent = 'Invalid name. Only letters and spaces are allowed.';
        isValid = false;
    } else {
        nameError.textContent = '';
    }

    // Email Validation
    if (!emailRegex.test(email)) {
        emailError.textContent = 'Invalid email address.';
        isValid = false;
    } else {
        emailError.textContent = '';
    }

    // NIC Validation
    if (!nicRegex.test(nic)) {
        nicError.textContent = 'Invalid NIC format. Use 12345-1234567-1 format.';
        isValid = false;
    } else {
        nicError.textContent = '';
    }

    // Form Submission
    if (isValid) {
        alert('Form submitted successfully!');
        document.getElementById('userForm').reset();
    }
});
