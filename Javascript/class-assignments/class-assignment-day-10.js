const employees = 
{
    name: "Saish",
    employeeID: 11051,
    tech: ['ReactJS',"NodeJS"],
    address: {
        city:"Vadodara",
        country:"India"
    }
}

//Shallow Copy:
// const employees2 = {...employees};
// employees1.tech[1] = "Java";
// console.log(employees2);
// console.log(employees); -- change will be seen in employees

// Deep Copy:
// const employees1 = JSON.parse(JSON.stringify(employees));
// employees1.tech[1] = "Java";
// console.log(employees1);
// console.log(employees); -- change will not be seen in employees

const identity = {
    prefix: "Mr",
    name:
    {
        'first Name':"A",
        'last Name':"B",
        suffix:"Jr"
    }
}
const{name:{'first Name':fName}} = identity;
const{prefix}=identity;
const{name:{suffix}} = identity;
const{name:{'last name':lName="Kothawade"}} = identity;
const{name} = identity;
console.log(suffix);
console.log(prefix);
console.log(fName);
console.log(lName);
console.log(name);

const person ={
    fName:"Saish"
}
person.fName = "Shubham";
console.log(person);
const arr1 = [1,2,3,[4,5],6,7];
console.log(arr1);
// const arr2=arr1.slice();
const arr2=[...arr1];
// const arr2 = JSON.parse(JSON.stringify(arr1));
arr2[3][0]=10;
arr2[2]=100;
console.log(arr1);
console.log(arr2);

// Objects
const cricketPlayer = 
{
    firstName:"Saish",
    lastName:"Kothawade"
}

const keysArray = Object.keys(cricketPlayer); // To make array of keys
const valueArray = Object.values(cricketPlayer); // To make array of values
const entriesObj = Object.entries(cricketPlayer); // To make nested array of [key,value]

for(let index = 0; index<entriesObj.length; index++)
{
    console.log(`Key is ${entriesObj[index][0]}, value is ${entriesObj[index][1]}`);
}
for(const [key,value] of Object.entries(cricketPlayer))
{
    console.log(`${key} ${value}`);
}

