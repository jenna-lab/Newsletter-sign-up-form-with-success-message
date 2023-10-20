var form = document.querySelector("#form");
var email = document.querySelector("#input-email");
var errorSpan = document.querySelector("#span-error");
var signUp = document.querySelector("#sign-up-div");
var successfull = document.querySelector("#successfull-div");
var emailSpan = document.querySelector("#email-address-span");
var dismissButton = document.querySelector("#dismiss-button");
if (form && email && errorSpan && signUp && successfull && emailSpan && dismissButton) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        var emailValue = email.value.trim();
        if (emailValue === "") {
            errorFunc("Email required");
        }
        else if (!validateEmail(emailValue)) {
            errorFunc("Valid email required");
        }
        else {
            successFunc(email);
        }
    });
    dismissButton.addEventListener("click", function (e) {
        e.preventDefault();
        if (signUp && successfull) {
            signUp.style.display = "flex";
            successfull.style.display = "none";
        }
    });
    function errorFunc(message) {
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
    function successFunc(email) {
        var emailValue = email.value.trim();
        if (emailSpan && signUp && successfull) {
            emailSpan.innerText = emailValue;
            signUp.style.display = "none";
            successfull.style.display = "block";
        }
    }
    function validateEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
}
