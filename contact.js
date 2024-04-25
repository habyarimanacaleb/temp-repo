// navigation 

const toggleButton = document.getElementById("toggle-button");
const navLink = document.getElementById("navigation-menu");
const closeButon = document.getElementById("close-btn");
 


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

closeButon.onclick = () => {

navLink.style.display = "none";
}

// form validation
//
const form = document.getElementById("contact-us");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let name = String(document.getElementById("username").value);
  let email = document.getElementById("email").value;
  let message = document.getElementById("textarea").value;

  let phone = Number(document.getElementById("phone").value);

  if (name && email && message) {
    // Form is valid, do something here (e.g. send form data to a server)
    alert("Form is sucessfully submitted");
    alert('Thank your for informing us!!');
  } else {
    // Form is invalid, display an error message
    document.getElementById("emailError").innerHTML ="Please enter your email";
    document.getElementById("nameError").innerHTML ="Please enter your name";
    document.getElementById("phoneError").innerHTML ="Please enter your phone number";
  }
  let formData = [name,email,phone,message];

  // var formData = new FormData(event.target);
  // to use this line below it will display only one message so it is recommanded to use  above array
  // let formData = new FormData(event.target);
  let formObject = {};

  formData.forEach((value, key) =>{
    formObject[key] = value;
  });

  localStorage.setItem("formData", JSON.stringify(formObject));
   // Reset the form automatically
  event.target.reset();
});