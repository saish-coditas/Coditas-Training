// function phone(strng, num)
// {
//   if(strng.)
//   {
//     return "Error => Too many people: num";
//   }
//   else if(!strng.contains(num))
//   {
//     return "Error => Not found: num";
//   }
//    const name = strng.substring(strng.indexOf("<")+1,strng.indexOf(">"));
//     // your code
// }
// console.log(phone("/+1-541-754-3010 156 Alphand_St. <J Steeve>\n"));

// function ipsBetween(start, end)
// {
//   // const startIP = start.split(".");
//   // const endIP = end.split(".");
//   const startIP = [];
//   const endIP = [];
//   let noOfIP=0;
//   for(const currIp of start.split("."))
//   {
//     startIP.push(parseInt(currIp));
//   }
//   for(const currIp of end.split("."))
//   {
//     endIP.push(parseInt(currIp));
//   }
//   noOfIP += endIP[3] - startIP[3];
//   noOfIP += (endIP[2] - startIP[2])*255;
//   noOfIP += (endIP[1] - startIP[1])*255;
//   noOfIP += (endIP[0] - startIP[0])*255;
//   console.log(noOfIP+1);
//   //TODO
// }
// ipsBetween("10.0.0.0", "10.0.0.50");

// function isPerfect(n)
// {
//   let factorSum=0;
//   if(n==1)
//     return false;
//   for(let divisor = 1; divisor<=Math.floor(Math.sqrt(n)); divisor++)
//   {
//     if(n%divisor===0)
//     {
//       console.log(divisor);
//       factorSum+=divisor;
//       if((n/divisor)!==n)
//       {
//         console.log(n/divisor);
//         factorSum+=(n/divisor);
//       }
//     }
//   }
//   if(n===factorSum)
//     return true;
  
//   return false;
//   // Your code here
// }
// console.log(isPerfect(8128));



// function filter_list(l) {
//   const filteredArray = l.filter((value) => {
//     return typeof value === "number" || value === 0;
//   });
//   return filteredArray;
// }

// console.log(filter_list([1, "a", "b", 0, 15])); // Output: [1, 0, 15]



// var searchArray = function (arrayToSearch, query)
// {

//   for(let index=0; index<arrayToSearch.length; index++)
//   {
//     arrayToSearch[index] = "["+arrayToSearch[index].toString()+"]";
//     console.log(arrayToSearch[index]);
//   }
//   console.log(arrayToSearch);
//   console.log('['+query.toString()+']');
//   console.log(arrayToSearch.indexOf('['+query.toString()+']'));
//   // TODO your code here
// }
// console.log(searchArray([[2,3],[7,2],[9,20],[1,2],[7,2],[45,4],[7,87],[4,5],[2,7],[6,32]], [6,32]));


// function findShort(s)
// {
//    const sentence = s.split(" ");

//    const shortestWord = sentence.reduce((shortest,currValue)=>{
//     if(currValue.length<shortest.length)
//       return currValue;
//     return shortest;
//   });
//   return shortestWord.length;
// }
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     let smallest = args[0];
//     for(const number of args)
//     {
//       if(number<smallest)
//         smallest=number;
//     }
//     return smallest;
//   }
// }

// function calc(n, f) {
//   // n: BigInt, f: BigInt => BigInt, return: BigInt
//   let sum = 0;
//   let bigIntSum = BigInt(sum);
//   // n: BigInt, f: BigInt => BigInt, return: BigInt
//   for(let index=1n; index<=n; index++)
//   {
// //      bigIntSum+=f(Math.floor(n/index));
//     bigIntSum+=BigInt(Math.floor(f(n/index)));
//   }
//   return bigIntSum;
// //   return 0n;
// }

// function digitalRoot(n)
// {
//   let digitSum=0;
//   //console.log(n);
//   while(n>0)
//   {
//     digitSum+=n%10;
//     n=Math.floor(n/10);
//   }
  
//   let value = digitSum;
//   //console.log(value);
//   if(value>9)
//   {
//     console.log("Inside Recursion");
//     res = digitalRoot(digitSum);
//     if(res<10)
//     return res;
//   }
  
//     return value;
  
//  // console.log(digitSum);
  
  
// }
// console.log(digitalRoot(456));