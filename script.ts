const form = document.querySelector<HTMLFormElement>("#form");
const email = document.querySelector<HTMLInputElement>("#input-email");
const errorSpan = document.querySelector<HTMLSpanElement>("#span-error");
const signUp = document.querySelector<HTMLDivElement>("#sign-up-div");
const successfull = document.querySelector<HTMLDivElement>("#successfull-div");
const emailSpan = document.querySelector<HTMLSpanElement>("#email-address-span");

// 
const dismissButton =
  document.querySelector<HTMLButtonElement>("#dismiss-button");

if (
  form && email && errorSpan && signUp && successfull && emailSpan && dismissButton) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let emailValue: string = email.value.trim();

    if (emailValue === "") {
      errorFunc("Email required");
    } else if (!validateEmail(emailValue)) {
      errorFunc("Valid email required");
    } else {
      successFunc(email);
    }
  });

  dismissButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (signUp && successfull) {
      signUp.style.display = "flex";
      successfull.style.display = "none";
    }
  });

  function errorFunc(message: string) {
    if (errorSpan && email) {
      errorSpan.style.display = "block";
      errorSpan.innerText = message;
      email.classList.add("error");
      email.style.border = "solid 1px hsl(4, 100%, 67%)";
    }
  }

  function typing() {
    if (errorSpan && email) {
      errorSpan.style.display = "none";
      email.style.border = "solid 1px hsl(231, 7%, 60%)";
      if (email.classList.contains("error")) {
        email.classList.remove("error");
      }
    }
  }

  function successFunc(email: HTMLInputElement) {
    let emailValue: string = email.value.trim();
    if (emailSpan && signUp && successfull) {
      emailSpan.innerText = emailValue;
      signUp.style.display = "none";
      successfull.style.display = "block";
    }
  }

  function validateEmail(email: string): boolean {
    return /\S+@\S+\.\S+/.test(email);
  }
}
