let text = document.getElementById("text");
let countWord = document.getElementById("countText");

text.addEventListener("input", e => {
  countWord.innerText = `Số kí tự: ${text.value.length}`;
})
