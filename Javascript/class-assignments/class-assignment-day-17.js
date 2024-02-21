// Nested Destructuring Example:
// const data = {
//     user:
//     [{
//         name:'Saish',
//         techStack:"Nodejs"
//     },
//     {
//         name:'Akhil',
//         techStack:"Reactjs"
//     },
//     {
//         name:'Arjun',
//         techStack:"Angularjs"
//     }]
// }
// const {user:[person1,person2,person3]} = data;
// const{name}=person1;
// console.log(name);

//
// const getUsersAPI = (onSuccess, onFailure)=>
// {
//     const users = [{name:"Saish"},{name:"Yashraj"},{name:"Shreya"}];
//     const duration = Math.random()*5000;
//     setTimeout(()=>{
//         const random = Math.random();
//         if(random>0.5)
//         {
//             return onSuccess({data:users, statusCode:200, error:null});
//         }
//         return onFailure({data:null, statusCode:500, error:{message:"Something went wrong"}})
//     },duration);
// }
// getUsersAPI(
//     (response) =>console.log(response),
//     (error)=>console.log(error)
// );


// Using Promises:
// const getUsersAPI = ()=>
// {
    
//     const users = [{name:"Saish"},{name:"Yashraj"},{name:"Shreya"}];
//     const duration = Math.random()*5000;
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             const random = Math.random();
//             if(random>0.5)
//             {
//                 return resolve({data:users, statusCode:200, error:null});
//             }
//             return reject({data:null, statusCode:500, error:{message:"Something went wrong"}})
//         },duration);
//     })
// }

// const userPromise = getUsersAPI()
// .then((response) => console.log(response))
// .catch((error) => console.log(error))
// .finally(() => console.log('Request completed'));

// console.log(userPromise);
