let inputType = document.querySelector('input');
let show = document.getElementById('showPass');
let hide = document.getElementById('hidePass');

show.addEventListener('click', () => {
  inputType.setAttribute('type', 'text');
  show.classList.add("d-none");
  hide.classList.remove("d-none");
});

hide.addEventListener('click', () => {
  inputType.setAttribute('type', 'password');
  show.classList.remove("d-none");
  hide.classList.add("d-none");
});
