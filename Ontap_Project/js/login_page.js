let user = JSON.parse(localStorage.getItem("user")) || [];
let toast = document.getElementById("loadToast");
let toastBody = document.querySelector(".toast-body");
let innerToast = toastBody.innerHTML


function loginPage() {
  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  let check = user.some(value => value.email === email && value.password === password);

  toast.classList.remove("bg-success", "bg-danger");
  toastBody.innerHTML = innerToast

  if (check) {
    toast.classList.add("bg-success");
    toastBody.innerHTML += `
     <img src="../assets/img/success.png" alt="" style="height: 25px">
      Đăng nhập thành công`;
  }else {
    toast.classList.add("bg-danger");
    toastBody.innerHTML += `
     <img src="../assets/img/error.png" alt="" style="height: 25px">
      Email hoặc mật khẩu không chính xác`;
  }

  let toastBoostrap = bootstrap.Toast.getOrCreateInstance(toast);
  toastBoostrap.show();

}
