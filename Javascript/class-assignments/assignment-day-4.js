//Day-4 Assignment

//1. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
//2. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let stringNum = '10';
let intNum = 10;
console.log(typeof stringNum); //String
console.log(typeof intNum); //Number
stringNum = Number(stringNum); //String to number
console.log(typeof stringNum); //converted
const floatNum = '9.8';
console.log(parseFloat(floatNum));
console.log(Math.round(parseFloat(floatNum)));

//3. Generate a random number between 0 and 100 inclusively.
//4. Generate a random number between 50 and 100 inclusively.
function generateNumber()
{
    let randomNum1 = Math.floor(Math.random()*101);
    let randomNum2 = Math.ceil(Math.random()*50)+50;
    console.log("Fandom No. b/w 0 and 100 (inclusive): ",randomNum1);
    console.log("Fandom No. b/w 50 and 100 (inclusive): ",randomNum2);
}
console.log(generateNumber());

/*5. Use console.log() and escape characters to print the following pattern.
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125*/
function printPattern()
{
    console.log("\n1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125\n");
}
printPattern();

//6. Enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
function calculateArea(triangleBase, triangleHeight)
{
    const triangleArea = 0.5 * triangleBase * triangleHeight;
    return triangleArea;
}
console.log(calculateArea(5,10));

/*Output:
PS C:\Users\Coditas-Admin\Documents\HTML Codes\JS Sample\class-assignments> node assignment-day-4.js
string
number
number
9.8
10
Fandom No. b/w 0 and 100 (inclusive):  2
Fandom No. b/w 50 and 100 (inclusive):  66
undefined

1       1       1       1       1
2       1       2       4       8
3       1       3       9       27
4       1       4       16      64
5       1       5       25      125

25*/
