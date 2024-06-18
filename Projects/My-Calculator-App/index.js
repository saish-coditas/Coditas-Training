let result=0;
const sumButton = document.getElementById("sum-button");
const subtractButton = document.getElementById("subtract-button");
const multiplyButton = document.getElementById("multiply-button");
const divideButton = document.getElementById("divide-button");
const equalsButton = document.getElementById("equals-button");

const oneButton = document.getElementById("one-button");
const twoButton = document.getElementById("two-button");
const threeButton = document.getElementById("three-button");
const fourButton = document.getElementById("four-button");
const fiveButton = document.getElementById("five-button");
const sixButton = document.getElementById("six-button");
const sevenButton = document.getElementById("seven-button");
const eightButton = document.getElementById("eight-button");
const nineButton = document.getElementById("nine-button");
const zeroButton = document.getElementById("zero-button");

oneButton.addEventListener("click", () => {
  currNum = 1;
});
twoButton.addEventListener("click", () => {
  currNum = 2;
});
threeButton.addEventListener("click", () => {
  currNum = 3;
});
fourButton.addEventListener("click", () => {
  currNum = 4;
});
fiveButton.addEventListener("click", () => {
  currNum = 5;
});
sixButton.addEventListener("click", () => {
  currNum = 6;
});
sevenButton.addEventListener("click", () => {
  currNum = 7;
});
eightButton.addEventListener("click", () => {
  currNum = 8;
});
nineButton.addEventListener("click", () => {
  currNum = 9;
});
zeroButton.addEventListener("click", () => {
  currNum = 0;
});


sumButton.addEventListener("click", (currNum,result) => {
  return result-currNum;
});
subtractButton.addEventListener("click", (currNum, result) => {
  return result-currNum;
});
multiplyButton.addEventListener("click", (currNum, result) => {
  return result/currNum;
});
divideButton.addEventListener("click", (currNum, result) => {
  return result/currNum;
});
equalsButton.addEventListener("click", () => {
  return result;
});

function add(num1, num2)
{
    return num1+num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1/num2;
}

function clear()
{

}

function equalTo()
{
    
}