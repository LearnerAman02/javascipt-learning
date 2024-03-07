// DISCLAIMER --> While u are understanding one concept comment out other codes

//chaliye samajhte hai asynchronous JS ko
// first let us understand difference between synchronous and asynchronous JS
// console.log("Aman learns!!");
// console.log("Aman teaches");
// console.log("Physics and DSA!!");

// Above code line by line chalega and jab tak ek line puri tarah execute nhi hoga tab tak niche wala nhi chalega
// So above 3 lines of code is SYNCHRONOUS JS code

// now let us see ASYNCHRONOUS JS code
// setTimeout(() => {
//   console.log("Lecture Started!!");
// }, 2000);

//NOTE --> setTimeout ke andar jo first parameter hai it is a function and to be more precise it is known as CALLBACK function
// hold on hum samjhenge CALLBACK function first lets clear asynchronous JS

// console.log("Lecture starting in 2 sec.....");

// so now understand, line by line code execute hoga till setTimeout function and than jab setTimeout pe code reach kareg
// in that case kyunki woh 2sec ke baad execute karega jo function usme humne pass kiya toh code wait nhi karega for 2 sec
// code uske niche ka console wala line chala dega and jab 2sec complete hoga uske baad the CALLBACK function inside setTimeout execute hoga

// so this is basically asynchronous JS
// JS pure code execution ko stop nhi kar raha hai for 2 sec woh remaining code execute kar raha hai

//‐---------------- CALLBACK function -------------
// let us create a normal function
// let product = (a, b) => {
//   console.log(`Product is : ${a * b}`);
// };

// simply calling the function now
// product(7, 8);

// function calci(m, n, productCallBack) {
//   productCallBack(m, n);
// }

// calci(4, 5, product); // now NOTE --> yaha par jo upar product function humne create kiya tha use we have passed as parameter to calci function
// iska matlab ek aisa function bhi ho sakta hai jisme hum function ko as an argument bhi pass kar sakte hai
// and jo function as a parameter aata h woh uss function ka CALLBACK function hota hai
// means in our case product function callback function hoga for the function calci
// and for that reason only maine productCallBack likha hai waha par

// rather passing a function we can create an arrow function within a function as CALLBACK
// function calci2(m, n, callback) {
//   callback(m, n);
// }
// so upar humne ek function create kiya hai jo ek callback function le raha hai as a parameter
// and now we are making call to calci2 function and passing arguments
// calci2(6, 8, (a, b) => {
//   console.log(a * b);
// });

// now this callback function concept lead ro pblm of CALLBACK HELL
// function getData(id, getNextData) {
//   setTimeout(() => {
//     console.log(`Fetching data from API ${id}.....`);
//     console.log(`Got data from API ${id}`);
//     if (getNextData) {
//       // agar function exist karta hai toh hi usko execute kare
//       getNextData();
//     }
//   }, 2000);
// }

// we have created a function which fetches data
// now hamara task ye hai ki hum data1 ko get kare than 2 sec ke baad data2 ko get kare and so on.....
// means data should come after some time gap
// now kuchh log uss case mein aise call karenge function
//getData(1);
//getData(2);
//getData(3);

// now understand we cannot make call like above we did agar hume data time gaps mein chahiye
//so for that we will have to pass next call as a callback
//kyunki in above case teeno calls ka timer ek saath start ho raha hai and after 2 sec sabka data ek saath aa raha h
//so now making the actual calls
// getData(1, () => {
//   getData(2, () => {
//     getData(3);
//   });
// });

// now thats how we can access data after time gaps
// but yaha agar aap notice karenge than callback ke andar doosra callback and than third callback
// means nested callback function pass karne pad rahe hai and imagine if we have 100 different data id so 100 time we will have to write the callback
// so the syntax will become VERY COMPLICATED to write and also very complex for other developer to understand
// and ye ek situation ko arise karta hai jisse hum CALLBACK HELL kehte hai

// Now what is a solution to overcome this CALLBACK HELL
// it is PROMISES in JS

// ----------- PROMISE -------------
// promise is an object in JS
// promise ke 3 states hote hai , [PENDING,FULFILLED,REJECTED]

// now let us understand how we create promise object in JS
// let promise = new Promise((resolve, reject) => {
//   console.log("Hii, I am Promise from JS");
// });

// now inside Constructor of promise hamare paas resolve and reject hai jo ki actual mein CALLBACK functions hai , jinko JS provide karta hai
// Now upar wale case mein simply humne ek console statement likhi inside PROMISE but we didn't resolved or rejected the promise

// let promise = new Promise((resolve, reject) => {
//   console.log("Hii, I am Promise from JS");
//   // resolve("Promise Resolved successfully!!");
//   reject("Promise Rejected");
// });

// jab hum hum promise resolve karenge yaa reject karenge toh hume promise execute hoke milega means it will nor be in PENDING state
// so ab uss executed promise ko hume handle karna hoga
// so for that we have .then() and .catch() method
// .then((res)=>{...}) --> then funtion tab use karte hai jab promise resolve hota hai and .cathc((err)=>{...}) tab use karte hai jab promise is rejected understand from the code below
// appliying .then() and .catch() on previous promise object

// promise.then((res) => {
//   console.log(res);
// });
// now if we comment resolve and use reject function
// promise.catch((err) => {
//   console.log(err);
// });
// so understand jo string humne resolve or reject mein likha woh same string hi as a parameter pass hua for the function inside .then() and .catch()

// Now same cheez API ke liye use krni hai hum jab bhi API ke data ko tackle karte hai toh APIs hume promise return karte hai jise hume handle krna hota hai

function getData(id) {
  return new Promise((resolve, reject) => {
    console.log(`Fetching data from API ${id}.....`);
    setTimeout(() => {
      console.log(`Got data from API ${id}`);
      resolve("Success!!");
    }, 2000);
  });
}

// so now we have a function getData jaha se api se data aa raha hai aur woh ek promise return kar raha hai and since we are using promise we do not need to pass callback function as an argument for the above function
// now hamara tast ye hai ki hum har 2 sec ke gap pe data ko fetech kare from api
// let p1 = getData(1);
// p1.then((res) => {
//   console.log(res);
// });

// let p2 = getData(2);
// p2.then((res) => {
//   console.log(res);
// });
// now above method of tackling promise is correct but above case mein data ek saath hi aa jaayega rather than gap between the requests made for the data
// so for doing that hamare paas PROMISE CHAINING concept hai jisme hum .then ke anadar hi next promise ko tackle karte hai than uske .then() method mein uske agle promise and so on.....

// let p1 = getData(1);
// p1.then((res) => {
//   console.log(res);
//   p2 = getData(2);
//   p2.then((res) => {
//     console.log(res);
//     p3 = getData(3);
//     p3.then((res) => {
//       console.log(res);
//     });
//   });
// });

// now above thing is called PROMISE CHAINING but bada complicated lag raha hai na so let us simplify this more and hum ye kaise karenge
// dekhiye p1, p2, p3 promises ko store kar rahe hai jo woh function return kar raha hai so agar woh function khud hi promise return kar raha hai and use hi hume tackle karna hai so we can avoid using variable and direct tackle promise using function only
// more modified version of above code
// getData(1).then((res) => {
//   console.log(res);
//   getData(2).then((res) => {
//     console.log(res);
//     getData(3).then((res) => {
//       console.log(res);
//     });
//   });
// });

// Now best practice for writing PROMISE CHAIN is like this -->
// getData(1)
//   .then((res) => {
//     console.log(res);
//     return getData(2);
//   })
//   .then((res) => {
//     console.log(res);
//     return getData(3);
//   })
//   .then((res) => {
//     console.log(res);
//   });

// now ye promise chaining wala code bhi thoda confusing hai and complicated hai
// so we came up with concept of ASYNC AWAIT to overcome this
// kisi bhi function ko agae ASYNCHRONOUS banana hai toh uske pichhe we will have to use async keyword
// NOTE --> async function hamesha ek pending promise return karta hai
// and agar await function hamesha FULFILLED promise return karta hai means agar kisi function ke pichhe await likha hai than in that case woh function saare surrounding ke execution ko stop kar dega jo bhi aage ke functions yaa statement hai in async function and khud pura execute hoga and than hi surrounding ko allow karega to execute

// MOST IMPORTANT --> hum async function ke andar hi await function use kar sakte hai

async function fetchData() {
  await getData(1); // main pura execute hounga uske baad hi niche ke console and function statement chalenge
  console.log("Main ruka tha for data 1");
  await getData(2); // main pura execute hounga uske baad hi niche ke console and function statement chalenge
  console.log("Main ruka tha for data 2");
  await getData(3); // main pura execute hounga uske baad hi niche ke console and function statement chalenge
  console.log("Main ruka tha for data 3");
  await getData(4); // main pura execute hounga uske baad hi niche ke console and function statement chalenge
  console.log("Main ruka tha for data 4"); // main pura execute hounga uske baad hi niche ka function statement chalenge
  await getData(5);
}

// now se hadling the promise returned by APIs kitna easy ho gaya in comparison of CALLBACK HELL and PROMISE CHAINING
fetchData(); // now bas ye hai ki hume ek extra function call lagani padti hai to start that async function execution
