// const promise = new Promise((resolve,reject) =>{

//     const promise1 = new Promise((resolve, reject)=> resolve("Hey"));
//     const promise2 = new Promise((resolve, reject)=> resolve("Promise 2"));
//     const promise3 = new Promise((resolve, reject)=> reject("Promise 3"));
//     const promises = [promise1,promise2,promise3];  
//     Promise.all(promises)()
//     .then(results => {
//         const resolvedPromises = results.filter(result => !result.error);
//             resolvedPromises.forEach(result => {
//                 console.log("Resolved:", result.result);
//             });
//             const rejectedPromises = results.filter(result => result.error);
//             rejectedPromises.forEach(result => {
//                 console.error("Rejected:", result.error.error);
//             });
//         });
// })


const resolveAfterTwoSeconds = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Resolved after 2 seconds");
        },2000);
    });
}

const asyncCall = async() => {
    console.log("Calling resolveafter2seconds");
    const result = resolveAfterTwoSeconds();
    console.log(result);
    console.log("Async function execution continues after await");
}

console.log("Before calling the async function");
asyncCall();
console.log("After calling the async function");