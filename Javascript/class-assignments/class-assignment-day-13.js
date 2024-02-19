//Higher Order function
const addition = (number1, number2) => number1 + number2;
const displaySum = (addition) => addition(5,6); 
console.log(displaySum(addition));

//Call back function
const inputArray = [1,2,3,4,5,6,7];


function mapClone(inputArray, callbackFunction)
{
    const result = [];
    for(const index in inputArray)
    {
        const element = inputArray[index];
        const modifiedOutput = callbackFunction(index, element, inputArray);
        result.push(modifiedOutput);
    }
    return result;
}

console.log(mapClone([1,2,3,4], (index, element) => {
    console.log(index);
    return element ** 2;
}));

// Try by self - filter function
const filterClone = (inputArray, filterFunction)