/*let number1=5;
let number2=10;
// const result1 = (number1) =>
// {
//     number1+=1;
//     return number1;
// }
// const result2 = (number2) =>
// {
//     number2+=1;
//     return number2;
// }

function increment(number)
{
    result1 = (number1) =>
    {

    }
    result2 = (number2) =>
    {

    }
}

console.log(result1());
console.log(result2());
console.log(result2());
console.log(result1());
console.log(result2());

const increment = (inNumber) => {

}

*/

//Loan Calculator
const principal = 50000;
const installments = 12;
const loanCalculator = (rate) =>
{
    let emi=principal*rate*installments/100;
    return emi;
}
homeLoan = loanCalculator(10);
carLoan = loanCalculator(20);
educationLoan = loanCalculator(30);

console.log(homeLoan);
console.log(carLoan);
console.log(educationLoan);