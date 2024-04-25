    // Fetch input values
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Validate inputs
    const errors = [];
    if (username === "") {
        errors.push("Please enter a username.");
    }
    if (!isValidEmail(email)) {
        errors.push("Please enter a valid email address.");
    }
    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }
    // Display error messages or submit form
    if (errors.length > 0) {
        document.getElementById("errorMessages").innerHTML = errors.join("<br>");
    } else {
        // Form is valid, you can submit it here or perform other actions
        alert("Form submitted successfully!");
        // Uncomment the line below to submit the form programmatically
        // document.getElementById("signupForm").submit();
    }
});
// Function to validate email format
function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
