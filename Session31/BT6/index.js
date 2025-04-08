document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;

  if (username === "huanrose@gmail.com" && password === "123456") {
    console.log("Đăng nhập thành công");
  } else {
    console.log("Đăng nhập thất bại");
  }
});
