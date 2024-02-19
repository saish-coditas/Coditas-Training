const number1 = '123.7';  
const number2 = 'aebdhfb';

console.log(Number(number1));
console.log(parseInt(number1));
console.log(isNaN(number1));
console.log(Number.isNaN(number1));

console.log(Number(number2));
console.log(parseInt(number2));
console.log(isNaN(number2));
console.log(Number.isNaN(number2));

//Check for isFinite
console.log(isFinite(12331));
console.log(isFinite(Number.MAX_VALUE));

//Check for isInteger
console.log(Number.isInteger(124));
console.log(Number.isInteger(124.5));

//Convert integer to string
const num1=123;
const num2=123.4568;
console.log(num1.toFixed());
console.log(num2.toFixed(2));

//Convert integer to String using String class
const num3=123;
console.log(typeof num3);
console.log(typeof String(num3));
 
//Arithmatic Operations
const num4=15;
const num5=5;
console.log(typeof (num4+num5));
console.log(typeof (num4-num5));
console.log(typeof (num4*num5));
console.log(typeof (num4/num5));
console.log(typeof (num4%num5));

//Math class
console.log(Math);
console.log(Math.abs(-14));
console.log(Math.ceil(3.466));
console.log(Math.floor(2.898));

function generateNumber()
{
    const randomNum = Math.random()*10;
    return randomNum;
}
const uksyafciysfcv = generateNumber()
console.log(uksyafciysfcv);

//Weird Arithmetic Results
console.log(10+'abcd');
console.log(true+true);
console.log(0/0);
console.log(1/0);
console.log(true+'abcd');
//console.log(5-A); //Not defined
console.log(5-'A');
console.log(Math.max());
console.log(Math.min());