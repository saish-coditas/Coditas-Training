const number = "1223";
const toInteger = +(number);
console.log(typeof toInteger);

const name = 'Saish';
const greet = 'Heyyyy';
console.log(`${greet}, ${name}`); //Using Template String

//Indexing
//String are index based
const message1 = "Hello";
let message2 = "Hello";

console.log(message1[2]); //Always use this over charAt
console.log(message1.charAt(2));
console.log(message1.charCodeAt(2));

message1[0] = "B";
message2[0] = "B";
console.log(message1); //Strings are immmutable
console.log(message2); //Strings are immmutable
//message1="Hi"; //will throw an error (const)
message2="Hi"//will work (let)

const fullName = "Saish Kothawade";
console.log(fullName.length);
console.log(fullName.split());
console.log(fullName.toLocaleUpperCase()); //Assignment

const subject = "Javascript";
console.log(subject.substring(2,5));
console.log(subject.substr(2,5));
console.log(subject.slice(2,5));
console.log(subject.includes('S'));
console.log(subject.indexOf('a'));
console.log(subject.lastIndexOf('a'));
console.log(subject.slice(-1)); //Homework