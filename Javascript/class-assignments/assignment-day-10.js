//ASSIGNMENT-2


const users = [
  {
    name:'Brook',
    scores:75,
    skills:['HTM', 'CSS', 'JS'],
    age:16
  },
  {
    name:'Alex',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'David',
    scores:75,
    skills:['HTM', 'CSS'],
    age:22
  },
  {
    name:'John',
    scores:85,
    skills:['HTML'],
    age:25
  },
  {
    name:'Sara',
    scores:95,
    skills:['HTM', 'CSS', 'JS'],
    age: 26
  },
  {
    name:'Martha',
    scores:80,
    skills:['HTM', 'CSS', 'JS'],
    age:18
  },
  {
    name:'Thomas',
    scores:90,
    skills:['HTM', 'CSS', 'JS'],
    age:20
  }
]

// 1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
const constants = [2.72, 3.14, 9.81, 37, 100]
const[e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
console.log(e, pi, gravity, humanBodyTemp, waterBoilingTemp);

// 2. Destructure and assign the elements of countries array to fin, est, sw, den, nor
const countries = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const[fin, est, sw, den, nor] = countries;
console.log(fin, est, sw, den, nor);

// 3. Destructure the rectangle object by its properties or keys.
const rectangle = {
  width: 20,
  height: 10,
  area: 200,
  perimeter: 60
}
const{width, height, area, perimeter} = rectangle;
console.log(width, height, area, perimeter);

// 4. Iterate through the users array and get all the keys of the object using destructuring
for(const user of users)
{
  const{names, scores, skills, age} = user;
  console.log(names, scores, skills, age);
}

// 5. Find the persons who have less than two skills


// 6. Destructure the countries array print name, capital, population and languages of all countries
const myCountries = [{
  countryName: 'India',
  capital: 'New Delhi',
  population: 1300000000,
  languages: ['Hindi', 'English']
},
{
  countryName: 'United States',
  capital: 'Washington DC',
  population: 330000000,
  languages: 'English'
}]
const [country1, country2] = myCountries;
const {countryName1, capital1, population1, languages1} = country1;
console.log(countryName1, capital1, population1, languages1);
const {countryName2, capital2, population2, languages2} = country2;
console.log(countryName2, capital2, population2, languages2);

// 7. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
const student = ['David', ['HTML', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
const[name, skills, scores] = student;
const{jsScore, reactScore} = scores;
console.log(name, skills, jsScore, reactScore);


//8. Write a function called convertArrayToObject which can convert the array to a structure object.
const students = [
  ['David', ['HTML', 'CSS', 'JS', 'Node'], [98, 85, 90, 95]],
  ['John', ['HTML', 'CSS', 'JS', 'Node'], [85, 80, 85, 80]]
]
let obj = Object.assign({name, skills, scores}, arr);
console.log(JSON.stringify(obj));
// console.log(convertArrayToObject(students))
// [
//   {
//      name: 'David',
//      skills: ['HTML','CSS','JS','Node'],
//      scores: [98,85,90,95]
//   },
//   {
//      name: 'John',
//      skills: ['HTML','CSS','JS','Node'],
//      scores: [85, 80,85,80]
//   }
// ]


// 9. Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets
    
const student1 = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 }
    ],
    backEnd: [
      { skill: 'Node',level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase:[
      { skill: 'MongoDB', level: 7.5 },
    ],
    dataScience:['Python', 'R', 'D3.js']
  }
}

student1.skills.frontEnd.push({skill: 'BootStrap', level: 8});
student1.skills.frontEnd[4].level=8;
student1.skills.backEnd[2].skill='Express';
student1.skills.backEnd[2].level=9;
student1.skills.dataBase[1].skill='SQL';
student1.skills.dataBase[1].level=8;
student1.skills.dataScience[3]='SQL';
console.log(student);

/*
output should look like this:
{
  name: 'David',  
  age: 25,  
  skills: {
    frontEnd: [    
      {skill: 'HTML',level: 10},
      {skill: 'CSS',level: 8},    
      {skill: 'JS',level: 8},    
      {skill: 'React',level: 9},
      {skill: 'BootStrap',level: 8}
    ],
    backEnd: [
      {skill: 'Node',level: 7},
      {skill: 'GraphQL',level: 8},  
      {skill: 'Express',level: 9}
    ],
    dataBase: [
      { skill: 'MongoDB',level: 7.5},    
      { skill: 'SQL',level: 8}
    ], 
    dataScience: ['Python','R','D3.js','SQL']
  }
}
*/