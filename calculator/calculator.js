'use strict';
var x = prompt("첫번째 숫자 입력하세요.");
var y = prompt("두번째 숫자 입력하세요.");
x = parseInt(x);
y = parseInt(y);
function obj(x,y) {
  this.x = x;
  this.y = y;
}

obj.prototype.plus = function() {
  return this.x + this.y;
}
obj.prototype.minus = function() {
  return this.x - this.y;
}
obj.prototype.product = function() {
  return this.x * this.y;
}
obj.prototype.divide = function() {
  return this.x / this.y;
}
let a = new obj(x,y);
var labelPlus = document.getElementById('labelPlus');
var labelMinus = document.getElementById('labelMinus');
var labelProduct = document.getElementById('labelProduct');
var labelDivide = document.getElementById('labelDivide');

btnPlus.onclick = function() {
  labelPlus.innerHTML = x + '+' + y + "는" + a.plus() + "입니다.";
};
btnMinus.onclick = function() {
  labelMinus.innerHTML = x + '-' + y + "는" + a.minus() + "입니다.";
};
btnProduct.onclick = function() {
  labelProduct.innerHTML = x + '*' + y + "는" + a.product() + "입니다.";
};
btnDivide.onclick = function() {
  labelDivide.innerHTML = x + '/' + y + "는" + a.divide() + "입니다.";
};

// btnPlus.onclick = function() {
//   alert(x + '+' + y + "는" + a.plus() + "입니다.");
// };
// btnMinus.onclick = function() {
//   alert(x + '-' + y + "는" + a.minus() + "입니다.");
// };
// btnProduct.onclick = function() {
//   alert(x + '*' + y + "는" + a.product() + "입니다.");
// };
// btnDivide.onclick = function() {
//   alert(x + '/' + y + "는" + a.divide() + "입니다.");
// };
console.log(a.minus());
console.log(a.plus());
console.log(a.divide());
console.log(a.product());
