//Day 16 Assignment
// Reduce Function Clone

const numbersArray = [1,2,3,4,5];
const reduceClone = (numbersArray, squaresSum, callbackFunction)=>{
    for(const number of numbersArray) 
    {
        squaresSum = callbackFunction(squaresSum, number);
    }
    return squaresSum;
}

const squaresSum = reduceClone(numbersArray, 0, (accumulator,currentValue) => {
    return accumulator+=currentValue*currentValue;
})
console.log(squaresSum);