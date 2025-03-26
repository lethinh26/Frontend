for (let i = 0; i < 10; i++) {
  let random = Math.floor(Math.random() * 10);
  let mau = null;
  if (random === 0) {
    mau = "red"
  }
  if (random === 1) {
    mau = "blue"
  }
  if (random === 2) {
    mau = "green"
  }
  if (random === 3) {
    mau = "purple"
  }
  if (random === 4) {
    mau = "pink"
  }
  if (random === 5) {
    mau = "white"
  }
  if (random === 6) {
    mau = "black"
  }
  if (random === 7) {
    mau = "aqua"
  }
  if (random === 8) {
    mau = "gray"
  }
  if (random === 9) {
    mau = "ocean"
  }
  if (random === 10) {
    mau = "brown"
  }
  console.log("%cMàu đã được thay đổi", `color: ${mau}`);
}
