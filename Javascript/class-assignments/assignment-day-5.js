//DAY-5 Assignment
// Declare a variable and assign a value 'Easy JavaScript Assignments'.
const assignmentTopic = 'Easy JavaScript Assignments';
// Print the length of the string.
console.log(assignmentTopic.length);
//Change all the string characters to capital letters using toUpperCase() method
console.log(assignmentTopic.toUpperCase());
//Change all the string characters to lowercase letters using toLowerCase() method
console.log(assignmentTopic.toLowerCase());
// Slice out the first word of the string using substr() and substring() method
console.log(assignmentTopic.substr(0,4));
// Slice out the phrase JavaScript Assignments from 'Easy JavaScript Assignments'..
console.log(assignmentTopic.substring(0,4));
// Check if the string contains a word Script using includes() method
console.log(assignmentTopic.includes('Script'));
// Split the string into an array using split() method
console.log(assignmentTopic.split());
// Split the string 'Easy JavaScript Assignments' at the space using split() method
console.log(assignmentTopic.split(' '));
// 'ELTP, BATCH, THREE' split the string at the comma and change it to an array.
const batchName = 'ELTP, BATCH, THREE';
console.log(batchName.split(', '));
// Change 'Easy JavaScript Assignments' to 'Easy Python Assignments' using replace() method.
console.log(assignmentTopic.replace("JavaScript","Python"));
// console.log(replacedTopic);
// What is character at index 20 in 'Easy JavaScript Assignments' string? Use charAt() method.
console.log(assignmentTopic[20]);
// What is the character code of J in 'Easy JavaScript Assignments' string using charCodeAt()
console.log(assignmentTopic.charCodeAt(5));
// Use indexOf to determine the position of the first occurrence of 'a' in 'Easy JavaScript Assignments'
console.log(assignmentTopic.indexOf('a'));
// Use lastIndexOf to determine the position of the last occurrence of 'a' in 'Easy JavaScript Assignments'.
console.log(assignmentTopic.lastIndexOf('a'));
// Use indexOf to find the position of the first occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
const assignmentSentence = 'Easy JavaScript Assignments, Easy Easy';
console.log(assignmentSentence.indexOf('Easy'));
// Use lastIndexOf to find the position of the last occurrence of the word 'Easy' in the following sentence:'Easy JavaScript Assignments, Easy Easy'
console.log(assignmentSentence.lastIndexOf('Easy'));
// Use search to find the position of the first occurrence of the word 'Easy' in the following sentence: 'Easy JavaScript Assignments, Easy Easy'
console.log(assignmentSentence.search('Easy'));
// Use trim() to remove any trailing whitespace at the beginning and the end of a string. '       Easy JavaScript Assignments, Easy Easy             '
const whitespaceSentence = '       Easy JavaScript Assignments, Easy Easy             ';
console.log(whitespaceSentence.trim());
// Use startsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log(assignmentTopic.startsWith('Easy'));
// Use endsWith() method with the string 'Easy JavaScript Assignments' and make the result true
console.log(assignmentTopic.endsWith('ments'))
// Use match() method to find all the a’s in 'Easy JavaScript Assignments'
console.log(assignmentTopic.match(/a/gi).length);
// Use concat() and merge 'Easy' and 'JavaScript' to a single string.
const mergeWord1 = 'Easy';
const mergeWord2 = 'Javascript';
console.log(mergeWord1.concat(mergeWord2));
// Use repeat() method to print 'Easy JavaScript' 3 times.
console.log('Easy Javascript '.repeat(3));
// 'Javascript is Easy, too Easy, too Easy, Easy to learn' Count the number of word 'Easy' in this sentence.
const assignmentSentence1 = 'Javascript is Easy, too Easy, too Easy, Easy to learn';
console.log(assignmentSentence1.match(/Easy/).length);
// Use match() to count the number of all 'Easy' in the following sentence:'Javascript is Easy, too Easy, too Easy, Easy to learn'
console.log(assignmentSentence1.match(/Easy/g).length);
// Clean the following text and find the most frequent word (hint, use replace and regular expressions).
const sentence = '%I $am@% a %softwa@r%e %e@ngineer, &and& %java@sc@ript% is Ea%s#y';
const cleanedText = sentence.replace(/[^a-zA-Z0-9\s]/g,'');
console.log(cleanedText);
//Calculate the total annual income of the person by extracting the numbers from the following text. 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading'
const earningSentence = 'I earn 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro from freelancing, and 50000 euro from trading';
const earningArray=earningSentence.match(/\d+(\.\d+)?/g);
console.log((parseInt(earningArray[0])*12)+parseInt(earningArray[1])+parseInt(earningArray[2])+parseInt(earningArray[3]));