const name = document.getElementById("name")
const email = document.getElementById("email")
const form = document.getElementById("form")


form.addEventListener("submit", (e) => {
    let message =[]

    if(name.value.length > 1 && email.value.length > 1){
        message.push("Form Submitted")

        
    }
  e.preventDefault();
  getvalues();
});