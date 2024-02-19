/*
const fullname="Saish Kothawade"; // Value has to be defined during declaration
console.log(fullname); 
let age;
age=18; // Value can be defined later
console.log(age);
/* 
    const gender; //Will throw error
    gender='M';

function sample()
{
    var age1 = 18;
}
console.log(age1); //Can't be accessed outside scope 
*/


console.log(fullName); //Hoisting, will print undefined
var fullName = 'Saish Kothawade';
let firstName = 'Saish';
let age = 18;
function testScope()
{
    console.log(firstName); //Will get printed, as firstName is global scoped
    var city = 'Vadodara';
}
//console.log(age); //Won't get printed as var can't be accessed outside function
if(true)
{
    let votingAge=18;
}
console.log(votingAge); //Won't get printed as let can't be accessed outside scope
console.log(city); //Won't get printed as var can't be accessed outside function
testScope();