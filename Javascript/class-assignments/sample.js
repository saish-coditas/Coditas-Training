// Write a function delayedSum that takes two numbers as parameters, num1 and num2. This function should calculate the sum of the two numbers after a delay of 5 seconds and log the result to the console.

// function delayedSum(num1,num2)
// {
//     console.log(num1+num2);
// }
// setTimeout(delayedSum(5,10),5000);

// const add = (num1, num2) =>
// {
//     return num1+num2;
// }
// console.log(add(2,5));

// const minus = function subtract (num1, num2)
// {
//     console.log("Inside subtract function");
//     return num1-num2;
// }

// console.log(subtract);
// console.log(subtract(5,7));
// console.log(minus);
// console.log(minus(5,7));

function counter() {
    let count = 0;

    return function() {
        return ++count;
    };
}

// const incrementCounter = counter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
