// Day-13 Assignment      

// 1. Create an empty object called cow
const cow = new Object();

// 2. Print the the cow object on the console
console.log(cow);

// 3. Add name, legs, color, age and sound properties for the cow object. The sound property is a method which return "maaah maaah"

cow.name = 'Romeo';
cow.legs= 4;
cow.color='Brown';
cow.age= 10;
cow.sound = function()
{
    return "maaah maaah";
}

// 4. Get name, legs, color, age and sound value from the cow object
const{name,legs,color,age,sound} = cow;
console.log(name,legs,color,age,sound);

// 5. Set new properties the cow object: breed, getCowInfo()
cow.breed = "Holstein Friesian";
cow.getCowInfo = function() {
    return `Name: ${this.name}, Legs: ${this.legs}, Color: ${this.color}, Age: ${this.age}`;
}

// 6. Find the person who has max skills in the users object.
const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}
let mostSkills = 0;
for(user in users)
{
  const{skills}=users[user];
  if(skills.length>mostSkills)
  {
    mostSkills = skills.length;
  }
}


// 7. Count logged in users, count users having greater than equal to 30 points from the following object.
const users1 = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'Thomas',
      email: 'thomas@thomas.com',
      password: '123333',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
];

let loginCount=0;
for(const user1 of users1)
{
  const{isLoggedIn}=user1;
  if(isLoggedIn)
    loginCount++;
}
console.log(loginCount);

// 8. Find people who are MERN stack developer from the users object
let mernCount=0;
for(const user1 of users1)
{
  const{isLoggedIn}=user1;
}

// 9. Set your name in the users object without modifying the original users object
const[{username}] = users1;

// 10. Get all keys or properties of users object
console.log(Object.keys((users)));

// 11. Get all the values of users object
console.log(Object.values(users));

// 12. Use the countries object to print a country name, capital, populations and languages.
const countries = {
  countryName: 'India',
  capital: 'New Delhi',
  population: 1300000000,
  languages: ['Hindi', 'English']
}
const {countryName, capital, population, languages} = countries;

// 13. Create an object called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const personAccount =
{
    firstName:"Saish",
    lastName:"Kothawade",
    incomes:11000,
    expenses:10000,
    totalIncome: function()
    {

    },
    totalExpense: function()
    {

    },
    accountInfo: function()
    {

    },
    addIncome: function()
    {

    },
    addExpense: function()
    {

    },
    accountBalance: function()
    {

    }
}

// 14. Imagine you are getting the below users array of objects.
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application
function signUp(userID)
{
  for(const user1 of users1)
  {
    const {_id} = user1;
    if(_id===userID)
    {
      console.log("User already exists");
      return;
    }
  }
  users1.push(userID);
}
function signIn(userID)
{
  for(const user1 of users1)
  {
    const {isLoggedIn} = user1;
    if() 
  }
}

// 15. The products array has three elements and each of them has six properties.
const products = [
  {
    _id: 'eedfcf',
    name: 'mobile phone',
    description: 'Huawei Honor',
    price: 200,
    ratings: [
      { userId: 'fg12cy', rate: 5 },
      { userId: 'zwf8md', rate: 4.5 }
    ],
    likes: []
  },
  {
    _id: 'aegfal',
    name: 'Laptop',
    description: 'MacPro: System Darwin',
    price: 2500,
    ratings: [],
    likes: ['fg12cy']
  },
  {
    _id: 'hedfcg',
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    ratings: [{ userId: 'fg12cy', rate: 5 }],
    likes: ['fg12cy']
  }
] 
// a. Create a function called rateProduct which rates the product
function rateProduct(productID, rating)
{
  for(const product of products)
  {
    const{_id}=product;
    if(_id == productID)
    {
      const{ratings} = product;
      ratings.push(rating);
    }
  }
}

// b. Create a function called averageRating which calculate the average rating of a product
function averageRating(_id)
{
  fo
  const{ratings:[{rate}]} = product;
  totalRating = 
  noOfRatings = 
}

// 16. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.

function likeProduct(products)
{
  const [{likes}] = products;
  if(likes.length===0)
  {

  }
}
