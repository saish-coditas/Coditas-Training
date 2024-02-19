// 1. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function calculateArea(length, width)
{
    rectangleArea = length*width;
    return rectangleArea;
}
console.log(calculateArea(3,4));

// 2. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
function checkSeason(month)
{
    switch(month.toLowerCase())
    {
        case 'september' || 'october' || 'november':
            seasonName = 'Rainy';
            break;
        case 'december' || monthName === 'january' || monthName === 'february':
            seasonName = 'Winter';
            break;
        case 'March':
            seasonName = 'Spring';
            break;
        default:
            seasonName = 'Invalid Input';
    }   
    return seasonName;
}
console.log(checkSeason('January'));

// 3. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0
function findMax(number1, number2, number3)
{
    const maximumNumber = number1>number2 && number1>number3 ? number1 : (number2>number3 ? number2 : number3);
    return maximumNumber;
}
console.log(findMax(0,10,5));

// 4. Declare a function name swapValues. This function swaps value of x to y.
function swapValues(x,y)
{
    let temp = x;
    x=y;
    y=temp;
    console.log(`First Num: ${x}`);
    console.log(`Second Num: ${y}`);
}
swapValues(3,4);

// 5. Write a function generateColors which can generate any number of hexa or rgb colors.
// console.log(generateColors('hexa', 3)) // ['#a3e12f', '#03ed55', '#eb3d2b']
// console.log(generateColors('hexa', 1)) // '#b334ef'
// console.log(generateColors('rgb', 3)) // ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
function generateColors()
{

}

// 6. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
// console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']);
// //['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
function modifyArray(inputArray)
{
    if(inputArray.length<5)
        return "item not found";

    inputArray[4]=inputArray[4].toUpperCase();
    return inputArray;
}
console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']));

// 7. Write a functions which checks if all items are unique in the array.
function checkUnique(inputArray)
{
    const addUnique = [];
    for(const item of inputArray)
    {
        if(addUnique.includes(item))
            return false;    

        addUnique.push(item);
    }
    return true;
}
console.log(checkUnique([1,2,3,4,1]));

// 8. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function sevenRandomNumbers()
{
    const randomNumbersArray = [];
    for(let index = 0; index<7; index++)
    {
        const randomNumber = Math.floor(Math.random()*10);
        randomNumbersArray.push(randomNumber);
    }
    return randomNumbersArray;
}
console.log(sevenRandomNumbers());
// [(1, 4, 5, 7, 9, 8, 0)]