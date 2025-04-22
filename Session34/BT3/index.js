let fbEmail = document.getElementById("fbEmail");
let fbPass = document.getElementById("fbPass");
let fbConPass = document.getElementById("fbConPass");

let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("passConfirm");

let form = document.getElementById("form");

let key = ["email", "password", "confirmPassword"];
let keyEl = [email, password, confirmPassword];
let keyFb = [fbEmail, fbPass, fbConPass];

function checkLocalStorage() {
  key.forEach((value) => {
    if (!localStorage.getItem(value)) {
      localStorage.setItem(value, "[]");
    }
  })
}

function updateValid(input, inputFb, type, message, value) {
  inputFb.classList.remove("valid-feedback", "invalid-feedback");
  input.classList.remove("is-valid", "is-invalid");
  inputFb.innerText = "";

  const setInvalid = () => {
    inputFb.classList.add("invalid-feedback");
    input.classList.add("is-invalid");
  }

  const setValid = () => {
    inputFb.classList.add("valid-feedback");
    input.classList.add("is-valid");
  }

  if (type === "update") {
    if (value) {
      setValid();
      inputFb.innerText = `${message} is valid`;
    } else {
      setInvalid();
      inputFb.innerText = `${message} is invalid`;
    }
  }

  if (type === "&&password") {
    if (value && confirmPassword.value === password.value) {
      setValid();
      inputFb.innerText = `${message} match`;
    } else {
      setInvalid();
      inputFb.innerText = `${message} does not match`;
    }
  }

  if (type === "existEmail") {
    if (value) {
      let emailValue = JSON.stringify(localStorage.getItem("email"));
      if (emailValue.includes(email.value)) {
        setInvalid()
        inputFb.innerText = `${message} already exists`;
      } else {
        setValid()
        inputFb.innerText = `${message} is valid`;
      }
    } else {
      setInvalid();
    }
    inputFb.innerText = `${message} is invalid`;
  }
}


function reg() {
  updateValid(email, fbEmail, "existEmail", "Email", email.value.includes("@" && "."));
  updateValid(password, fbPass, "update", "Password", password.value.length >= 6);
  updateValid(confirmPassword, fbConPass, "&&password", "Password", password.value.length >= 6);

  let listInput = document.querySelectorAll("input");
  if (!Array.from(listInput).every((el) => el.classList.contains("is-valid"))) {
    return;
  }
  checkLocalStorage();

  key.forEach((value, index) => {
    let data = JSON.parse(localStorage.getItem(value));
    data.push(keyEl[index].value);
    localStorage.setItem(value, JSON.stringify(data));
    updateValid(keyEl[index], keyFb[index], "remove");
  })

  alert("Register successfully");
  form.reset();
}

document.getElementById("passConfirm").addEventListener("input", () => {
  updateValid(confirmPassword, fbConPass, "&&password", "Password", password.value.length >= 6);
});

