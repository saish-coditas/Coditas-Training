// Day-11 Assignment

// 1. Declare an empty array;
const emptyArray = {};

// 2. Declare an array with more than 5 number of elements
const numbers = {10,20,30,40,50};

// 3. Find the length of your array
const numbersLength = numbers.length;
console.log(numbersLength);

// 4. Get the first item, the middle item and the last item of the array
console.log(numbers[0]);
if(numbersLength%2==0)
{
    console.log(numbers[]);   
}
else
{
    console.log(numbers[numbers.length+1/2]);
}
console.log(numbers[numbers.length-1]);

// 5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = {}
console.log(mixedDataTypes.length);

// 6. Declare an array variable name itCompanies and assign initial values Coditas, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = {'Coditas', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'};

// 7. Print the array using console.log()
console.log(itCompanies);

// 8. Print the number of companies in the array
console.log(itCompanies.length)

// 9. Print the first company, middle and last company

// 10. Print out each company
for(const company of itCompanies)
{
    console.log(company);
}
// 11. Change each company name to uppercase one by one and print them out
for(let companyIndex=0; companyIndex<itCompanies.length; companyIndex++)
{
    console.log(company[companyIndex].toUpperCase());
}
// 12. Print the array like as a sentence: Coditas, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString());
// 13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
const stringToCheck = 'Nvidia';
if()
// 13. Filter out companies which have more than one 'o' without the filter method

// 14. Sort the array using sort() method
console.log()
// 15. Sort the array by country name length without sort;
// Reverse the array using reverse() method
// Slice out the first 3 companies from the array
// Slice out the last 3 companies from the array
// Slice out the middle IT company or companies from the array
// Remove the first IT company from the array
// Remove the middle IT company or companies from the array
// Remove the last IT company from the array
// Remove all IT companies
// 24. First remove all the punctuations and change the string to array and count the number of words in the array, dont use regex
// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, Node, Python, dJango'
// 25. In the following shopping cart add, remove, edit items
// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// add 'Rasmalai' in the beginning of your shopping cart if it has not been already added
// add Gulabjamun at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
// 26. In countries array check if 'India' exists in the array if it exists print 'INDIA'. If it does not exist add to the countries list.
// 27. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
// 28. Concatenate the following two variables and store it in a fullStack variable.
// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']

// console.log(fullStack)
// 29. The following is an array of 10 students ages:
// const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
// 30. Find the middle countries in the countries array.
// 31. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half
// ARRAYS:
// const countries = [
//   'Albania',
//   'Bolivia',
//   'Canada',
//   'Denmark',
//   'Ethiopia',
//   'Finland',
//   'India',
//   'Germany',
//   'Hungary',
//   'Ireland',
//   'Japan',
//   'Kenya'
// ]

// const webTechs = [
//   'HTML',
//   'CSS',
//   'JavaScript',
//   'React',
//   'Redux',
//   'Node',
//   'MongoDB'
// ]
// Note: Dont use regex
// Deadline- EOD (edited) 