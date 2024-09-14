// console.log("Hello JS ki Duniya!!");
// let a = 9;
// let b = 14;
// let sum = a + b;
// console.log(`Sum is : ${sum}`);
// console.log(`Division : ${b / a}`);
// console.log(`Power : ${2 ** 5}`); //exponential

// let c = "5";
// let d = 5;
// console.log(c == d);
// console.log(c === d);

// // let divisor = 5;
// // while (true) {
// //   let userNum = prompt("Enter number : ");
// //   if (userNum % 5 == 0) {
// //     console.log(`Multiple of 5 : ${userNum % 5 == 0}`);
// //   } else {
// //     console.log(`It is not a multiple of 5`);
// //     break;
// //   }
// // }

// let str = "Aman";
// console.log(str[0]);

// let product = {
//   pname: "ball",
//   id: 1,
//   price: 340,
//   brand: "kookabura",
// };

// console.log(product);

// //object destructuring
// //jab destructuring krenge toh name same hona chahiye as that of the attributes of products
// let { pname, id, price, brand } = product;
// console.log(`name : ${pname}, id:${id}, price : ${price}`);

// //destructuring using SPREAD OPERATOR
// let { ...p1 } = product;
// console.log(
//   `name : ${p1.pname}, id:${p1.id}, price : ${p1.price}, brand: ${p1.brand}`
// );

// let products = [
//   {
//     pName: "shoes",
//     pId: 3,
//     price: 450,
//     brand: "Nike",
//   },
//   {
//     pName: "bat",
//     pId: 2,
//     price: 250,
//     brand: "SG",
//   },
// ];
// //yaha pe p1 ko nhi declare kr sakte hai as a SPREAD OPERATOR bcoz it is already defined
// let [{ ...p3 }, { ...p2 }] = products;
// console.log(`pdct 1 : ${p2}, product 2 : ${p3}`);
// console.log(
//   `pdct 1 : ${JSON.stringify(p2)}, product 2 : ${JSON.stringify(p3)}`
// );
// //u can also print p2.price (specific attribute values as well)

// let arr = ["Aman", "Vishal", "Manish", "Sachin", "Harsheet"];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

let arr2 = [1, 2, 3, 4, 5, 6];

// for of loop jo element ko contain krta hai of the array
// and wahi pe agar FOR IN use kiya toh phir woh index of the element ko contain krta hai
// for (let i in arr2) {
//   console.log(arr2[i]);
// }

//Using map method on array
let ans = arr2.map((val) => console.log(val * 2));
let marks = [85, 97, 44, 37, 76, 60];
let sum = 0;
for (let v of marks) {
  sum += v;
}
console.log(`Average value is : ${sum / 6}`);

// har ek product price pe 10% ka discount lagao and new final price ka array print kro
let pdtPrice = [250, 645, 300, 900, 50];
for (let p in pdtPrice) {
  pdtPrice[p] = pdtPrice[p] - 0.1 * pdtPrice[p];
}
console.log(`Updated Price : ${pdtPrice}`);
//push , pop , slice, splice methods
let num = [1, 2, 3];
console.log("OG Array : " + num);
num.pop();
console.log("After pop operation : " + num);

num.push(4);
console.log("After push operation : " + num);

let num1 = num.slice(0, 2); //index value deni hoti hai iske andar start idx included and end index excluded and finally ek array return krta hai of slice elements
console.log("After slice operation : " + num1);

num.splice(1, 5); //jo index pass karenge unn indexes ke elements ko delete kr dega from num array
console.log("After splice operation : " + num1);

// FUNCTIONS
function sum1(a, b) {
  return a + b;
}

let call = sum1(4, 5);
console.log(`Sum is : ${call}`);

//isme array as a parameter pass hoga and unke sum ko hum return karayenge
function sum2(a, ...b) {
  let val = 0;
  console.log(`Value of b : ${b}`);
  val += a;
  for (let i in b) {
    val += b[i];
  }
  return val;
}

call = sum2(34, arr2); //yaha pe as an whole array jaayengi values in function call and string ki tarah add hoga whole array as it is
console.log(`Final sum is : ${call}`);

call = sum2(12, ...arr2);
console.log(`Final after spreading array elements, sum is : ${call}`);

//functions ko ek variable mei bana sakte hai and than we can make call to it
let fun = (a, b) => {
  return a - b;
};

console.log(`Subtraction is : ${fun(34, 6)}`);

// ARROW FUNCTIONS
let word = "Aman Singh";
function countVowel(a) {
  let n = a.length;
  let count = 0;
  for (let i = 0; i < n; i++) {
    let letter = a[i];
    //console.log()
    if (
      letter == "a" ||
      letter == "e" ||
      letter == "i" ||
      letter == "o" ||
      letter == "u"
    ) {
      count++;
    }
  }
  return count;
}

//same using ARROW FUNCTIONS and more efficient way
let finalans = (a) => {
  let n = a.length;
  let count = 0;
  for (let char of a) {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  return count;
};

ans = countVowel("Aman Singh");
console.log(`Number of vowels are : ${ans}`);
console.log(`Number of vowels are : ${finalans("umbrella")}`);

// forEach loop in array --> ye apne andar ek CALLBACK FUNCTION leta hai
arr = [4, 5, 6, 7, 8, 10];
arr.forEach((element) => {
  console.log(`${element} x 4 : ${element * 4}`);
});

//HIGH ORDER FUNCTIONS, woh function jo ek function ko return krta hai yaa phir as a parameter function ko leta hai, forEach ek typr of high order functions hi hai
function saveName(array) {
  for (let v of array) {
    console.log(v);
  }
}

function func2(a) {
  console.log(`func2 started making call to saveName function`);
  return saveName(a);
}
let array = [5, 7, 8, 10, 14, 16, 18];

func2(array);

let newarr = array.filter((val) => {
  return val % 2 == 0;
});

console.log(`Array after applying filter method : ${newarr}`);

//CLASSES and OBJECTS

let ele = document.querySelector(".heading");

let btn = document.querySelector("button");
btn.onclick = () => {
  //ele.innerHTML = "<h2>Aaj hai ELECTROSTATICS ka lecture!!</h2>";
  ele.textContent = "Aaj hai ELECTROSTATICS ka lecture!!";
  ele.style.color = "white";
  ele.style.backgroundColor = "black";
};

//CALLBACK HELL
function firstFun(callback) {
  setTimeout(() => {
    console.log(`First function execution completed!!`);
    //ab agla callback function chalao
    callback();
  }, 1000);
}

function secondFun(callback) {
  setTimeout(() => {
    console.log(`Second function execution completed!!`);
    //ab agla callback function chalao
    callback();
  }, 1000);
}

function thirdFun(callback) {
  setTimeout(() => {
    console.log(`Third function execution completed!!`);
    //ab agla callback function chalao
    callback();
  }, 1000);
}

//callback hell dekho ab --> NESTED function calls
firstFun(() => {
  secondFun(() => {
    thirdFun(() => {
      console.log(`All function execution completed successfully`);
    });
  });
});

//PROMISES
let dataPromise = new Promise((resolve, reject) => {
  let dataFetched = true;
  if (dataFetched) {
    console.log(`Data Fetched Successfully!!`);
  } else {
    console.log(`Some error occured`);
  }
});

dataPromise
  .then((msg) => {
    console.log(msg);
  })
  .catch((msg) => {
    console.log(msg);
  });

//ASYNC AWAIT
let fetchData = async () => {
  try {
    let response = await fetch(`https://catfact.ninja/fact`);
    let data = response.json();
    return data;
  } catch (err) {
    throw new Error(err);
  }
};

//jaise hi data fetch hoke aayega hum changes kra denge
fetchData()
  .then((data) => {
    let val = JSON.stringify(data);
    ele.innerHTML = `<h2>${JSON.stringify(data)}</h2>`;
    ele.style.backgroundColor = "black";
    ele.style.color = "cyan";
    console.log(`Fetched data is : ${val.fact}`);
  })
  .catch((err) => {
    console.log(`Error : ${err}`);
  });
