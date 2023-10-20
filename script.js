//selecting elements
const form = document.querySelector("#form");
const email = document.querySelector("#input-email");
const errorSpan = document.querySelector("#span-error");
const signUp = document.querySelector("#sign-up-div");
const successfull = document.querySelector("#successfull-div");
const emailSpan = document.querySelector("#email-address-span");
const dismissButton = document.querySelector("#dismiss-button");

//prevent default form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //trim,check if email input is empty,call errorFUNC,validate,calls successFunc
  let emailValue = email.value.trim();

  if (emailValue === "") {
    errorFunc("Email required");
  } else if (!validateEmail(emailValue)) {
    errorFunc("Valid email required");
  } else {
    successFunc();
  }
});


//event listener hide successfull div
dismissButton.addEventListener("click", (e) => {
  e.preventDefault();
  signUp.style.display = "flex";
  successfull.style.display = "none";
});


//handle error message
function errorFunc(message) {
  errorSpan.style.display = "block";
  errorSpan.innerText = message;
  email.classList.add("error");
  email.style.border = "solid 1px hsl(4, 100%, 67%)";
}

//handle style to typing
function typing() {
  errorSpan.style.display = "none";
  email.style.border = "solid 1px hsl(231, 7%, 60%)";
  if (email.classList.contains("error")) {
    email.classList.remove("error");
  }
}

//handle successful submission
function successFunc() {
  let emailValue = email.value.trim();
  emailSpan.innerText = emailValue;
  signUp.style.display = "none";
  successfull.style.display = "block";
}


//validates email format
function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
