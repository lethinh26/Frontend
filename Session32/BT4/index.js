let btn = document.getElementById("submit");
let emailInput = document.getElementById("email");
let feedback = document.getElementById("feedback");

btn.addEventListener("click", function(e) {
  e.preventDefault();
  let value = emailInput.value;

  emailInput.classList.remove("is-valid", "is-invalid");
  feedback.className = "";
  feedback.innerText = "";

  if ((value.endsWith(".com") || value.endsWith(".vn")) && value.includes("@")) {
    emailInput.classList.add("is-valid");
    feedback.classList.add("valid-feedback");
    feedback.innerText = "Email hợp lệ";
  } else {
    emailInput.classList.add("is-invalid");
    feedback.classList.add("invalid-feedback");
    feedback.innerText = "Email không hợp lệ";
  }


});
