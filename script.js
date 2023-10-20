const form = document.querySelector("#form");
const email = document.querySelector("#input-email");
const errorSpan = document.querySelector("#span-error");
const signUp = document.querySelector("#sign-up-div");
const successfull = document.querySelector("#successfull-div");
const emailSpan = document.querySelector("#email-address-span");
const dismissButton = document.querySelector("#dismiss-button");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let emailValue = email.value.trim();

  if (emailValue === "") {
    errorFunc("Email required");
  } else if (!validateEmail(emailValue)) {
    errorFunc("Valid email required");
  } else {
    successFunc();
  }
});

dismissButton.addEventListener("click", (e) => {
  e.preventDefault();
  signUp.style.display = "flex";
  successfull.style.display = "none";
});

function errorFunc(message) {
  errorSpan.style.display = "block";
  errorSpan.innerText = message;
  email.classList.add("error");
  email.style.border = "solid 1px hsl(4, 100%, 67%)";
}

function typing() {
  errorSpan.style.display = "none";
  email.style.border = "solid 1px hsl(231, 7%, 60%)";
  if (email.classList.contains("error")) {
    email.classList.remove("error");
  }
}

function successFunc() {
  let emailValue = email.value.trim();
  emailSpan.innerText = emailValue;
  signUp.style.display = "none";
  successfull.style.display = "block";
}

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}
