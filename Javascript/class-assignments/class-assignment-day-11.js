//Loops
const persons = [
    { name: 'Akhil'},
    { name: 'Arjun'},
    { name: 'Saish'},
    { name: 'Shreya'},
    { name: 'Shubham'},
    { name: 'Yashraj'},
    { name: 'Tanuja'},
    { name: 'Khan'}
]

for(const {name} of persons)
{
    console.log(`My Name is ${name}`);
}
console.log(Object.entries(persons));
for(const [{name},value] of Object.entries(persons))
{
    console.log(`My ${name} is ${value}`);
}

//map function
const numbers = [1,2,3,4,5];
const squareNumbers = numbers.map((number) => {return Math.pow(number,2)});
console.log(squareNumbers);

// filter function
const evenNumbers = numbers.filter((number) => {return number%2==0});
console.log(evenNumbers);

// reduce function
const sumOfNumbers = numbers.reduce((sum,currValue) => {sum+=currValue; return sum;},0);
console.log(sumOfNumbers);

const maxNum = numbers.reduce((maxVal, currentValue) => {
    console.log(maxVal);
    console.log(currentValue);
    if(currentValue>maxVal)
    {
        maxVal = currentValue;
    }
    return maxVal;
});
console.log(maxNum);

//for-each function

//for-every function
