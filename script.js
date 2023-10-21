var FormHandler = /** @class */ (function () {
    function FormHandler() {
        var _this = this;
        this.form = document.querySelector("#form");
        this.email = document.querySelector("#input-email");
        this.errorSpan = document.querySelector("#span-error");
        this.signUp = document.querySelector("#sign-up-div");
        this.successfull = document.querySelector("#successfull-div");
        this.emailSpan = document.querySelector("#email-address-span");
        this.dismissButton = document.querySelector("#dismiss-button");
        if (this.form &&
            this.email &&
            this.errorSpan &&
            this.signUp &&
            this.successfull &&
            this.emailSpan &&
            this.dismissButton) {
            this.form.addEventListener("submit", function (e) {
                e.preventDefault();
                var emailValue = _this.email.value.trim();
                if (emailValue === "") {
                    _this.errorFunc("Email required");
                }
                else if (!_this.validateEmail(emailValue)) {
                    _this.errorFunc("Valid email required");
                }
                else {
                    _this.successFunc(_this.email);
                }
            });
            this.dismissButton.addEventListener("click", function (e) {
                e.preventDefault();
                if (_this.signUp && _this.successfull) {
                    _this.signUp.style.display = "flex";
                    _this.successfull.style.display = "none";
                }
            });
            this.email.addEventListener("input", function () {
                _this.typing();
            });
        }
    }
    FormHandler.prototype.errorFunc = function (message) {
        if (this.errorSpan && this.email) {
            this.errorSpan.style.display = "block";
            this.errorSpan.innerText = message;
            this.email.classList.add("error");
            this.email.style.border = "solid 1px hsl(4, 100%, 67%)";
        }
    };
    FormHandler.prototype.typing = function () {
        if (this.errorSpan && this.email) {
            var emailValue = this.email.value.trim();
            if (this.validateEmail(emailValue)) {
                this.errorSpan.style.display = "none";
                this.email.style.border = "solid 1px hsl(231, 7%, 60%)";
                if (this.email.classList.contains("error")) {
                    this.email.classList.remove("error");
                }
            }
        }
    };
    FormHandler.prototype.successFunc = function (email) {
        var emailValue = email.value.trim();
        if (this.emailSpan && this.signUp && this.successfull) {
            this.emailSpan.innerText = emailValue;
            this.signUp.style.display = "none";
            this.successfull.style.display = "block";
        }
    };
    FormHandler.prototype.validateEmail = function (email) {
        return /\S+@\S+\.\S+/.test(email);
    };
    return FormHandler;
}());
var formHandler = new FormHandler();
