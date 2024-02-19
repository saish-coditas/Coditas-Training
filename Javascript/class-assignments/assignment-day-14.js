// DAY-16 Assignment (Higher Order Functions)

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand'];

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook'];

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
  ];
  

// 1. Explain the difference between forEach, map, filter, and reduce.
// Answer:
// forEach - 
// map() - 
// filter() -
// reduce() - 

// 2. Define a callback function before you use it in forEach, map, filter or reduce.
// Answer:
//Console.log()

// 3. Use forEach to console.log each country in the countries array.
countries.forEach((country) => console.log(country));

// 4. Use forEach to console.log each name in the names array.
names.forEach((name)=>console.log(name));

// 5. Use forEach to console.log each number in the numbers array.
numbers.forEach((number)=>console.log(number));

// 6. Use map to create a new array by changing each country to uppercase in the countries array.
function counttoUpperCase(country)
{   
    return country.toUpperCase();
}
const countriesInUpperCase = countries.map(counttoUpperCase);
console.log(countriesInUpperCase);

// 7. Use map to create an array of countries length from countries array.
function countryLength(country)
{
    return country.length;
}
const countryLengthArray = countries.map(countryLength);
console.log(countryLengthArray);

// 8. Use map to create a new array by changing each number to square in the numbers array
const squareOfNumbersArray = numbers.map((number)=>{return number*number});
console.log(squareOfNumbersArray);

// 9. Use map to change to each name to uppercase in the names array
const namesInUpperCase = names.map((name)=>{return name.toUpperCase()});
console.log(namesInUpperCase);

// 10. Use map to map the products array to its corresponding prices.
const productPricesArray = products.map((product)=>
{
    const {price} = product;
    return price;
});
console.log(productPricesArray);

// 11. Use filter to filter out countries containing land.
const countryWithLandArray = countries.filter(country=>{if(country.includes('land')) return country;});
console.log(countryWithLandArray);

// 12. Use filter to filter out countries having six character.
const countryWithSixCharArray = countries.filter((country)=>{if(country.length===6) return country;});
console.log(countryWithSixCharArray);

// 13. Use filter to filter out countries containing six letters and more in the country array.
const countryWithMoreThanSixLettersArray = countries.filter((country)=>{
    if(country.length>=6)
        return country;
})
console.log(countryWithMoreThanSixLettersArray);

// 14. Use filter to filter out country start with 'E';
const countryStartWithEArray = countries.filter((country)=>{
    if(country.startsWith('E') || country.startsWith('e'))
        return country;
})
console.log(countryStartWithEArray);

// 15. Use filter to filter out only prices with values.
const pricesWithValues = products.filter((product)=>{
    const {price} = product;
    if(Number.isInteger(price))
        return price;
});
console.log(pricesWithValues);

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
const fruits = ["apple","strawberry",true,-4,"pineapple","grapes",10]
const onlyStringsArray = function getStringLists(fruits)
{
    for(const fruit of fruits)
    {
        if(checkIfString(fruit));
            onlyStringsArray.push(fruit);
    }
    return 
}
function checkIfString(fruit)
{
    if(typeof(fruit)===String);
    return fruit;
}

// 17. Use reduce to sum all the numbers in the numbers array.
const sumOfNumbers = numbers.reduce((sum,number)=>{
    sum+=number;
    return sum;
},0);
console.log(sumOfNumbers);

// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
const concatenatedCountryNames = countries.reduce((concatenatedString, country)=>{
    concatenatedString = concatenatedString.concat(country);
    return concatenatedString;
},"");
console.log(concatenatedCountryNames);

// 19. Explain the difference between some and every
// Answer:
// some() traverses the array one by one and returns true even if one value satisfies the condition, else returns false.
// every() traverses the array one by one and returns true only if all values satisfy the condition, else returns false.

// 20. Use some to check if some names' length greater than seven in names array
const checkNamesLength = names.some((name)=>{
    if(name.length>7)
        return name;
});
console.log(checkNamesLength);

// 21. Use every to check if all the countries contain the word land
const checkContainsLand = countries.every((country)=>{
    if(country.toLowerCase().includes("land"))
        return country;
});
console.log(checkContainsLand);

// 22. Explain the difference between find and findIndex.
// Answer:
// find traverses the array one by one and returns the first value that passes a condition.
// findIndex traverses the array one by one and returns the index of the first value that passes a condition. 

// 23. Use find to find the first country containing only six letters in the countries array
const sixLettersCountryName = countries.find((country)=>{if(country.length===6) return country;});
console.log(sixLettersCountryName);

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array
const sixLettersCountryIndex = countries.findIndex((country)=>{if(country.length===6) return country;});
console.log(sixLettersCountryIndex);

// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
const norwayIndex = countries.findIndex((country)=>{
    if(country.toLowerCase()==='norway')
        return country;
})
console.log(norwayIndex);

// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
const russiaIndex = countries.findIndex((country)=>{
    if(country.toLowerCase()==='russia')
        return country;
})
console.log(russiaIndex);

// 27. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
// const products = [
//   { product: 'banana', price: 3 },
//   { product: 'mango', price: 6 },
//   { product: 'potato', price: ' ' },
//   { product: 'avocado', price: 8 },
//   { product: 'coffee', price: 10 },
//   { product: 'tea', price: '' },
// ];

// const totalPrice = products.map(removeProductKey(product)).reduce();
// removeProductKey = (product) =>
// {
//     const {price} = product;
//     return price;
// }
// function calculateSum()
// {

// }

// 28. Find the sum of price of products using only reduce reduce(callback))
const sumOfPrices = products.reduce((sum, currentValue)=>{
    const{price} = currentValue;
    if(Number.isInteger(price))
    {
        sum+=price;
        console.log(sum);
    }
},0);
console.log(sumOfPrices);

// 29. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
function categorizeCountries()
{

}

// 30. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.


// 31. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries()
{

}

// 32. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries()
{
    
}

// 33. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)


// 34. Use the countries information, in the data folder. Sort countries by name, by capital, by population


// 35. Find the 10 most spoken languages:


/*
// Your output should look like this
console.log(mostSpokenLanguages(countries, 10))
[
{country: 'English',count:91},
{country: 'French',count:45},
{country: 'Arabic',count:25},
{country: 'Spanish',count:24},
{country:'Russian',count:9},
{country:'Portuguese', count:9},
{country:'Dutch',count:8},
{country:'German',count:7},
{country:'Chinese',count:5},
{country:'Swahili',count:4}
]

// Your output should look like this
console.log(mostSpokenLanguages(countries, 3))
[
{country: 'English',count: 91},
{country: 'French',count: 45},
{country: 'Arabic',count: 25},
]```*/