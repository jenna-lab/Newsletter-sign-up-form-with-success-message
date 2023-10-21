class FormHandler {
  constructor() {
    this.form = document.querySelector("#form");
    this.email = document.querySelector("#input-email");
    this.errorSpan = document.querySelector("#span-error");
    this.signUp = document.querySelector("#sign-up-div");
    this.successfull = document.querySelector("#successfull-div");
    this.emailSpan = document.querySelector("#email-address-span");
    this.dismissButton = document.querySelector("#dismiss-button");

    if (
      this.form &&
      this.email &&
      this.errorSpan &&
      this.signUp &&
      this.successfull &&
      this.emailSpan &&
      this.dismissButton
    ) {
      this.form.addEventListener("submit", (e) => {
        e.preventDefault();
        let emailValue = this.email.value.trim();
        if (emailValue === "") {
          this.errorFunc("Email required");
        } else if (!this.validateEmail(emailValue)) {
          this.errorFunc("Valid email required");
        } else {
          this.successFunc(this.email);
        }
      });

      this.dismissButton.addEventListener("click", (e) => {
        e.preventDefault();
        if (this.signUp && this.successfull) {
          this.signUp.style.display = "flex";
          this.successfull.style.display = "none";
        }
      });

      this.email.addEventListener("input", () => {
        this.typing();
      });
    }
  }

  errorFunc(message) {
    if (this.errorSpan && this.email) {
      this.errorSpan.style.display = "block";
      this.errorSpan.innerText = message;
      this.email.classList.add("error");
      this.email.style.border = "solid 1px hsl(4, 100%, 67%)";
    }
  }

  typing() {
    if (this.errorSpan && this.email) {
      let emailValue = this.email.value.trim();
      if (this.validateEmail(emailValue)) {
        this.errorSpan.style.display = "none";
        this.email.style.border = "solid 1px hsl(231, 7%, 60%)";
        if (this.email.classList.contains("error")) {
          this.email.classList.remove("error");
        }
      }
    }
  }

  successFunc(email) {
    let emailValue = email.value.trim();
    if (this.emailSpan && this.signUp && this.successfull) {
      this.emailSpan.innerText = emailValue;
      this.signUp.style.display = "none";
      this.successfull.style.display = "block";
    }
  }

  validateEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }
}

const formHandler = new FormHandler();
