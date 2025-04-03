const cart = [
  { name: "Mèn mén", price: 30000, quantity: 2 },
  { name: "Mì tôm", price: 5000, quantity: 1 },
  { name: "Bánh bao", price: 15000, quantity: 3 }
];

let res = 0;
cart.forEach(cart => res += cart.price*cart.quantity);
console.log(res);