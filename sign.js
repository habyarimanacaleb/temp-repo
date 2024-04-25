const pssdError = document.getElementById("pssd-error");
const emailError = document.getElementById("email-error");
const pssd = document.getElementById("password").value.trim();
const email = document.getElementById("email").value.trim();
document
  .getElementById("signForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Validate inputs
    // let emailError = "";
    // let pssdError = "";
    if (!isValidEmail(email)) {
      emailError.innerText = "Please enter a valid email address.";
      // console.log(emailError)
    } else if (pssd.length < 8) {
      pssdError.innerHTML = " Your Password must be at least 8 characters long.";
      //    console.log(pssdError)
    } else {
      // Form is valid, you can submit it here or perform other actions
      alert("Form submitted successfully!");
      // Uncomment the line below to submit the form programmatically
      //    document.getElementById("signForm").submit();
    }
  });

// Function to validate email format
function isValidEmail(email) {
  // Regular expression for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/g;
  return emailRegex.test(email);
}
