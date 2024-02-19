// //Asynchronous
console.log("Hello World");

const timeoutTimer = setTimeout(()=> {
    console.log("Hello");
},5000);

console.log("Hello Saish");
console.log(timeoutTimer);
clearTimeout(timeoutTimer);

const intervalTimer = setInterval(()=> {
    console.log("Hello");
},3000);
clearInterval(intervalTimer);

setTimeout(()=>{
    console.log("Hi");
    setTimeout(()=>{
        console.log("Hi2");
    },500)
    console.log("Hello");
    setTimeout(()=>{
        console.log("Hi3");
    },500)
    setTimeout(()=>{
        console.log("Hi4");
    },500)
},1000)

// Assignment: We are passing log statement instead of callback function.
// Ideally must throw an error, but it doesn't. Find out, why? 
setTimeout(console.log("Hello World"),5000);
setTimeout()