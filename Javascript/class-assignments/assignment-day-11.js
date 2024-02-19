// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
for(let index=0; index<=10; index++)
{
    console.log(index);
}

let iteratorAsc = 0
while(iteratorAsc<=10)
{
    console.log(iteratorAsc);
    iteratorAsc++;
}

let counterAsc=0;
do{
    console.log(counterAsc);
    counterAsc++;
}while(counterAsc<=10);

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
for(let index=10; index>=0; index--)
{
    console.log(index);
}

let iteratorDesc = 10;
while(iteratorDesc>=0)
{
    console.log(iteratorDesc);
    iteratorDesc--;
}

let counterDesc=10;
do{
    console.log(counterDesc);
    counterDesc--;
}while(counterDesc>=0);

// 3. Iterate 0 to n using for loop
function iterate(n)
{
    for(let index=0; index<=n; index++)
    {
        console.log(index);
    }
}
iterate(25);

/* 4. Write a loop that makes the following pattern using console.log():
      #
      ##
      ###
      ####
      #####
      ######
      #######
*/
for(let index=1; index<=7; index++)
{
    console.log('#'.repeat(index));
}

/*
5. Using loop print the following pattern
   i    i^2   i^3
   0    0     0
   1    1     1
   2    4     8
   3    9     27
   4    16    64
   5    25    125
   6    36    216
   7    49    343
   8    64    512
   9    81    729
   10   100   1000
*/
console.log("i\ti^2\ti^3");
for(let index=0; index<=10; index++)
{
    console.log(`${index}\t${index*index}\t${index*index*index}`);
}

// 5. Use for loop to iterate from 0 to 100 and print only even numbers
for(let index=0; index<=100; index++)
{
    if(index%2==0)
        console.log(index);
}

// 6. Use for loop to iterate from 0 to 100 and print only odd numbers
let oddNum0TO100="";
for(let index=0; index<=100; index++)
{
    if(index%2!=0)
        console.log(index);
}

// 7. Use for loop to iterate from 0 to 100 and print only prime numbers
for(let outerIndex=0; outerIndex<=100; outerIndex++)
{
    for(let innerIndex=0; innerIndex<outerIndex; innerIndex++)
    {

    }
}


// 8. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let numberSum=0;
for(index=0; index<=100; index++)
{
    numberSum+=index;
}
console.log(`Sum of 0 to 100: ${numberSum}`);

// 9. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let evenOddSum = 0;
for(index=0; index<=100; index++)
{
    if(index%2==0)
        console.log(index);
}

// 10. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. //O/P:   [2550, 2500]


// 11. Develop a small script which generate array of 5 random numbers
const randomNumbersArray = [];
for(let index=0; index<5; index++)
{
    randomNumbersArray.push(Math.random());
}
console.log(randomNumbersArray);

// 12. Develop a small script which generate array of 5 random numbers and the numbers must be unique
let uniqueNumbersArray = [];
while(uniqueNumbersArray.length<=5)
{
    const randomNum = Math.random();
    if(!uniqueNumbersArray.includes(randomNum))
        uniqueNumbersArray.push(randomNum);
}
console.log(uniqueNumbersArray);

// 13. Develop a small script which generate a six characters random id: //iuyt56
const characterString = "abcdefghijklmnopqrstuvwxyz1234567890";
let sixCharactersArray = '';
for(let index=0; index<6; index++)
{
    const randomCharacter = characterString.charAt(Math.floor(Math.random()*36));
    sixCharactersArray.concat(randomCharacter);
}
console.log(sixCharactersArray);

// 14. Develop a small script which generate any number of characters random id.
let randomCharactersArray;
for(let index=0; index<Math.floor(Math.random()*10); index++)
{
    const randomCharacter = characterString.charAt(Math.floor(Math.random()*36));
    randomCharactersArray.concat(randomCharacter);
}
console.log(randomCharactersArray);

// 15. Write a script which generates a random hexadecimal number.
const hexadecimalCharacters = "0123456789ABCDEF";
let randomHexNumber;
for(let index=0; index<Math.floor(Math.random*100); index++)
{
    const randomNumber = hexadecimalCharacters.charAt(Math.floor(Math.random()*36));
    randomHexNumber.concat(randomNumber);
}
console.log(hexadecimalCharacters);

 
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

// 16.
//Using the above countries array, create the following new array.
//["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]*/
const capitalizeArr = [];
for(const country of countries)
{
    capitalizeArr.push(country.toUpperCase());
}
console.log(capitalizeArr);

// 17. Using the above countries array, create an array for countries length
//   [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
const lengthArr = []; 
for(const country of countries)
{
    lengthArr.push(country.length);
}
console.log(lengthArr);

/*18. Use the countries array to create the following array of arrays:
    [
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
  ]
*/
const countryDetails = [];
for(const country of countries)
{
    countryDetails.push(country, country.substring(0,3).toUpperCase(), country.length);
}

// 19. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
//   ['Finland','Ireland', 'Iceland']
const containLand=[];
for(const country of countries)
{
    if(country.includes('land'))
        containLand.push(country);
}
console.log(containLand);

// 20. Using the above countries array, find the country containing the biggest number of characters.

for(const country of countries)
{

}
// 21. Using the above countries array, find the country containing only 5 characters.

const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

// 22. Find the longest word in the webTechs array.
let longestWord;
for(const subject of webTechs)
{
    if(subject.length>longestWord.length)
    {
        longestWord = subject;
    }
}
console.log(longestWord);

// 23. Use the webTechs array to create the following array of arrays:
//   [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
let lengthNestedArray;
for(const subject of webTechs)
{   
    
}

// 24. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
const mernStack = ['MongoDB', 'Express', 'React', 'Node'];
let acronyms = "";
for(const stack of mernStack)
{
    acronyms.concat(stack.charAt(0));
}
console.log(acronyms);

// 25. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const webDevStacks = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"];
for(const stacks of webDevStacks)
{
    console.log(stacks);
}

// 26. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
const fruitArray = ['banana', 'orange', 'mango', 'lemon'];
const reverseFruitArray=[]
for(let index=fruitArray.length-1; index>=0; index--)
{
    reverseFruitArray.push(fruitArray[index]);
}
console.log(reverseFruitArray);

// 27. Print all the elements of array as shown below.
const fullStack = [['HTML', 'CSS', 'JS', 'React'],['Node', 'Express', 'MongoDB']];
const[frontendLanguages, backendLanguages] = fullStack;
for(const languages of frontendLanguages)
{
    console.log(languages);
}
for(const languages of backendLanguages)
{
    console.log(languages);
}
/*
OUTPUT: 
    HTML
    CSS
    JS
    REACT
    NODE
    EXPRESS
    MONGODB
    */