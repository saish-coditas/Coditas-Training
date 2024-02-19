// Objects
const employees = {
    name: "Saish",
    employeeID: 11051,
    tech: ['ReactJS',"NodeJS"],
    address: {
        city:"Vadodara",
        country:"India"
    }
}
// const {name, ...employeeInfo} = employees;
// const employee2 = {...employees};
// employee2.name='Arjun';
// employee2.tech[0]='Java';
// console.log(employees.name);
// console.log(employee2.name);
// console.log(employee2.tech);
const employee3 = JSON.parse(JSON.stringify(employees));
employee3.tech[0]='Java';
console.log(employees.tech);
console.log(employee3.tech);
// const employee2 = {
//     name: "Arjun",
//     employeeID: 12088
// }


//Accessing an element of an array
console.log(employees.name);
console.log(employees["name"]);

const numbers = [1,2,3,[4,5]];
//2 ways of iterating a loop
for(let index=0; index<numbers.length; index++)
{
    console.log(numbers[index]);
}
for(const number of numbers)
{
    console.log(number);
}
console.log(numbers.slice());
let numbersArray = numbers.slice();
numbersArray[3][0]=5;
numbersArray[3][1]=6;
numbers[3][0]=5;
numbers[3][1]=6;
console.log(numbers);
console.log(numbersArray); //both are changing

// const sampleArray = {1,2,3,5};
console.log(const {address:{city,country}} = employees);
console.log(cityName);
