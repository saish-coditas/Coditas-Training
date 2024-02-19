//DAY-10 Assignment

//1. If user is 18 or older , give feedback: 'You are allowed to Marry' but if not 18 console feedback stating to wait for the number of years he needs to turn 18.
const userAge = 16;
userAge>=18?console.log('You are allowed to Marry'):console.log(`Wait for ${18-userAge} years`);

//2. Compare the values of myAge and yourAge. Based on the comparison and log the result to console stating who is older.
//Enter your age: 30
//You are 5 years older than me.
const yourAge = 27;
const myAge = 22;
yourAge>=myAge?console.log(`You are ${yourAge-myAge} years older than me`):console.log(`You are ${myAge-yourAge} years younger than me`);

// 3. If myAge is greater than yourAge return 'yourAge is greater than myAge ' else 'myAge is less than yourAge'. Try to implement it in to ways.
myAge>yourAge?console.log('myAge is greater than yourAge '):console.log('myAge is less than yourAge');

// 4. Check, if a number is even or not.
const numberToCheckOddEven = 21;
numberToCheckOddEven%2===0?console.log("Even Number"):console.log("Odd Number");

// 5. Write a code which can give grades to students according to theirs scores:
// 80-100, A
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F

const studentScore = 76;
let studentGrade;
if(studentScore>=80 && studentScore<=100)
{
    studentGrade='A';
}
else if(studentScore>=70 && studentScore<=79)
{
    studentGrade='B';
}
else if(studentScore>=60 && studentScore<=69)
{
    studentGrade='C';
}
else if(studentScore>=50 && studentScore<=59)
{
    studentGrade='D';
}
else if(studentScore>=0 && studentScore<=49)
{
    studentGrade='F';
}
else
{
    studentGrade='Invalid Input';
}
console.log(studentGrade);

// 6. Check if the season is Rainy, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Rainy.
// December, January or February, the season is Winter.
// March, the season is Spring
//  April, May, June, July or August, the season is Summer

const monthName = 'March';
let seasonName; 
if(monthName === 'September' || monthName === 'October' || monthName === 'November')
{
    seasonName = 'Rainy';
}
else if(monthName === 'December' || monthName === 'January' || monthName === 'February')
{
    seasonName = 'Winter';
}
else if(monthName === 'March')
{
    seasonName = 'Spring';
}
else
{
    seasonName = 'Invalid Input';
}
console.log(`${monthName} falls in ${seasonName} season`);

// 7. Check if a day is weekend day or a working day. Your script will take day as an input.
const dayOfWeek = 'Monday';
let typeOfDay;
switch(dayOfWeek)
{
    case 'Monday':
        typeOfDay='Weekday';
        break;
    case 'Tuesday':
        typeOfDay='Weekday';
        break;
    case 'Wednesday':
        typeOfDay='Weekday';
        break;
    case 'Thursday':
        typeOfDay='Weekday';
        break;
    case 'Friday':
        typeOfDay='Weekday';
        break;
    case 'Saturday':
        typeOfDay='Weekend';
        break;
    case 'Sunday':
        typeOfDay='Weekend';
        break;
    default:
        typeOfDay='Invalid Input'
}   
console.log(`${dayOfWeek} is a ${typeOfDay}`);

// 8. Write a program which tells the number of days in a month.
const year = 2004;
const monthOfYear = 'February'; 
if(monthOfYear==='January' || monthOfYear==='March' || monthOfYear==='May' || monthOfYear==='July' || monthOfYear=== 'August' || monthOfYear=== 'October' || monthOfYear=== 'December')
{
    console.log(`$monthOfYear has 31 days`);
}

else if(monthOfYear==='April' || monthOfYear==='June' || monthOfYear==='September' || monthOfYear==='November')
{
    console.log(`${monthOfYear} has 30 days`);
}
else
{
    if(isLeapYear(year))
    {
        console.log(`${monthOfYear} has 29 days`);
    }
    else
    {
        console.log(`${monthOfYear} has 28 days`);
    }
}

// 9. Write a program to check whether the year is leap year or not.
function isLeapYear(year)
{
    if(year%400===0)
        return true;
    if(year%4===0 && year%100!=0)
        return true;
        
    return false;
}
const currentYear = 2100;
if(isLeapYear(currentYear))
{
    console.log(`{$currentYear} is a Leap Year`);
}
else
{
    console.log(`${currentYear} is not a Leap Year`);
}

// 10. Write a JavaScript ternary expression that checks the following conditions:
// If the first condition (condition1) is true, it should check the second condition (condition2). If condition2 is true, set the result to 'A', otherwise set it to 'B'.
// If the first condition (condition1) is false, it should check another condition (condition3). If condition3 is true, set the result to 'C', otherwise set it to 'D'.
const condition1=false, condition2=true, condition3=false;
const expressionResult=condition1?(condition2?'A':'B'):(condition3?'C':'D');
console.log(expressionResult);

// 11. What will be the result of the following nested ternary expression:
let result = true ? false ? true ? 'A' : 'B' : false ? 'C' : 'D' : 'E';
console.log(result); //D





/*
Output:
1. Wait for 2 years
2. You are 5 years older than me
3. myAge is less than yourAge
4. Odd Number
5. B
6. March falls in Spring season
7. Monday is a Weekday
8. February has 29 days
9. 2100 is not a Leap Year
10. D
11. D
*/