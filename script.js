const name = document.getElementById("name");
const email = document.getElementById("email");
const form = document.getElementById("form");
const Submittedprompt = document.getElementById("submitted");

// form.addEventListener("submit", (e) => {
//   let message = [];

//   if (name.value.length > 1 && email.value.length > 1) {
//     message.push("Form Submitted");
//   }
//   if (message.length > 0) {
//     e.preventDefault();

//     Submittedprompt.innerText = message.join(", ");
//   }
// });
form.addEventListener("submit", (e) => {
    e.preventDefault()

}) 


