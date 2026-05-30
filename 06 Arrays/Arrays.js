//                   ARRAYS

// Arrays=> Array ek special variable hota hai jo multiple values ko ek hi variable me store karta hai.

const student = ["ganesh", "raja", "bala", "rishabh"];
// console.log(student)

// ==> Arrays are 'hetrogenous' that means ki js mein arrays mein JavaScript array me mixed data store kar sakte hain.
const arr = [10, "Ganesh", true, null];


// indexing calling 
// const fruits = ["Apple", "Mango", "Banana"];

// console.log(fruits[0]);
// console.log(fruits[1]);

// console.log(fruits.length)


//=>  Array Methods

// 1️⃣ push() → End me add karta hai
// const arr = [1, 2];

// arr.push(3);

// console.log(arr);   // output -  [1, 2, 3]

// // 2️⃣ pop() → End se remove karta hai
// const arr = [1, 2, 3];

// arr.pop();

// console.log(arr);  // output -  [1, 2]

// // 3️⃣ unshift() → Start me add karta hai
// const arr = [2, 3];

// arr.unshift(1);

// console.log(arr);  // // output -  [1, 2, 3]


// // 4️⃣ shift() → Start se remove karta hai
// const arr = [1, 2, 3];

// arr.shift();

// console.log(arr);    // output -  [2, 3]

// 5 loop use in array

// const nums = [10, 20, 30, 40, 50, 60, 70, 80,]
// for(let i=0; i<nums.length;i++){
//     console.log(nums[i])
// }

// nums.forEach((Val) => console.log(Val))



//  => forEach & .map 

// =========> forEach() aur map() dono arrays par loop lagane ke liye use hote hain, 
// lekin difference yeh hai ki forEach() sirf array ke elements par operation perform karta hai aur kuch return nahi karta, 
// jabki map() ek naya array return karta hai.
//  Agar hume sirf data print ya modify karna ho to forEach() use karte hain,
//  aur agar har element ko transform karke naya array banana ho to map() use karte hain.

//    => forEach
// const nums = [10, 20, 30, 40, 50, 60, 70, 80,]

// function double(n){
//     return n*2
// }

// let newArray = nums.forEach(double) // forEach kuch bhi return nhi krta hai yeh bs loop krne ke liye use hota hai eska bs yhi kaam hai
// console.log(newArray) // output -> undefined



// ==> .map
// const nums = [10, 20, 30, 40, 50, 60, 70, 80,]

// function double(n){
//     return n*2
// }

// let newArray = nums.map(double)  // .map yeh new array return karega 
// console.log(newArray) // output -> [20, 40, 60, 80, 100, 120, 140, 160]




//////// => find 

// const numbers = [10, 20, 30, 40, 50, 60, 70, 80,];

// let ans = numbers.find((nums)=> nums === 50);
// // let ans = numbers.findIndex((nums)=> nums === 50);
// console.log(ans)


//////// => include


// const nums = [10, 20, 30, 40, 50, 60, 70, 80,];

// nums.includes(10)  // => includes means ki that value in the array ? they return t/f


////////////> filter()

const numbers = [12, 45, 78, 23, 56, 91, 34, 67, 89, 10];

let result = numbers.filter((nums)=> nums % 2 == 0);
console.log(result)




