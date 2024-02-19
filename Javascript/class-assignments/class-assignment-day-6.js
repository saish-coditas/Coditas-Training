/*//Logical Operators
//AND
true && true //true
true && false //false
false && true //false
false && false //false

//OR
true || true //true
true || false //true
false || true //true
false || false //false

//NOT
!true //false
!false //true

true && false && true //false

//FALSY values = NaN, 0, undefined, false
//TRUTHY = all other values

0 || false //false
1 && true//true


//Comparison Operators

5 < 5 //false
5 <= 5 //true
5 < "a" //false
"a" < 5 //false
5 < "7" //true
5 == "5" //true
5 === "5" //false
9 != "9" //false
9 !== "9" //true
8 == 8 //true
8 === 8 //true
8 < "asdfhjkl" //false
"a" == "a" //true
8 == [] //false
8 === [] //false
[] == [] //false
[] === [] //false
{} == {} //false
{} === {} //false*/

const a = NaN;
const b = NaN;
a==b //false
a===b //false

console.log(''==false); //prints true
console.log(''===false); //type gets checked
console.log(undefined==false); //doesn't get parsed to falsy value
console.log(null==false); //doesn't get parsed to falsy value
console.log(NaN==false); //doesn't get parsed to falsy value

//How to compare arrays
const arr1 = [11,22,33];
const arr2 = [11,22,33];
console.log(JSON.stringify(arr1) === JSON.stringify(arr2)); //true
console.log(!!"true" == !!"false"); //true //Never use Double shot operator
 
/*
Build a simple authentication system. Users can access a secret page only if they meet the following criteria:

They must be logged in.
They must be at least 18 years old.
Their account must not be suspended. */
 
let isLoggedIn = true;
let userAge = 24;
let isSuspended = false;

if(isLoggedIn && !isSuspended && userAge >= 18)
    console.log("Can Access");
else
    console.log("Can't access");