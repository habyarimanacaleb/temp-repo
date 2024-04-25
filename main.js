const contactUs = document.getElementById("h");
const contactInform = document.getElementById("inform");
const closebtn = document.getElementById("close");
const toggleButton = document.getElementById("toggle-button");
const navLink = document.getElementById("navigation-menu");
const closeButon = document.getElementById("close-btn");

// sign up variable

const signinBtn = document.getElementById('signin-btn');
const signupBtn = document.getElementById('signup-btn');
const signupTitlte = document.getElementById('signup-title');
const namefield = document.getElementById('nameField');

 // Fetch input values from form validation

 const username = document.getElementById("username").value.trim();
 const email = document.getElementById("email").value.trim();
//  const password = document.getElementById("password").value.trim();


contactUs.onclick = () => {
  contactInform.style.display = "block";
};

closebtn.onclick = () => {
  contactInform.style.display = "none";
};
closeButon.onclick = () => {
 
  navLink.style.display = "none";
}

document.getElementById("back").onclick = () => {
    window.location.href = '/html/index.html';
};

// navigation menu responsiveness by toggle button

// toggleButton.addEventListener("click", () => {
//   navLinks.classList.toggle("active-menu");
//   document.getElementById("home").classList.toggle("home");
// });

toggleButton.addEventListener('click',function(){
  if (navLink.style.display === 'flex')
   {
    navLink.style.display = 'none';

  }
  else {
    navLink.style.display = 'block';
    navLink.classList.toggle("active-menu");
  }
}
);
// sign up men

  // signinBtn.onclick = (e)=>{
  //   e.preventDefault();

  //   signinBtn.style.display = 'block';
  //   signupTitlte.innerHTML = 'sign in';
  //   namefield.style.display = 'none'; 
     
  // }
  // signupBtn.onclick = (e)=>{
  //   e.preventDefault();

  //   signinBtn.style.display = 'block';
  //   signupTitlte.innerHTML = 'sign up';
  //   namefield.style.display = 'flex'; 
     
  // }


  // form validation

  document.getElementById("contact-us").addEventListener("submit", function(event) {
     event.preventDefault(); // Prevent form submission

    // Validate inputs
    const errors = [];
    if (username === "") {
        errors.push("Please enter a username.");
    }
    if (!isValidEmail(email)) {
        errors.push("Please enter a valid email address.");
    }
    // if (password.length < 8) {
    //     errors.push("Password must be at least 8 characters long.");
    // }

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
// function isPhoneValid(phone) {
//   // Regular expression for basic email validation
//   const phoneReg = /^[+]+[0-9][13]/;
//   return emailRegex.test(phone);
// }





