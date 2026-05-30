// Arrow Function
// => An arrow function is a shorter way to write functions in JavaScript.
// 1. syntax

function normalFunction(){
    console.log("this is normal function")
}
normalFunction();

//   => 


const sayHello = ()=>{
    console.log('this is arrow function')
}
sayHello();         



// => Arrow Function With Parameters

const paraFunc = (a, b)=>{
    console.log(a+b);
}
paraFunc(21, 20);

// actual way

// let multiFunc = (a, b)=>{
//     return a*b;
// }
// console.log(multiFunc(2, 4));

// => This is One Liner Function
let multiFunc = (a, b) => a*b;
console.log(multiFunc(2, 2))


// 2.  Arguments keyword 
// =>  Arguments keyword are not present in arrow function . They present only in normal function .
// => So what we do for multiple arguments pass in arrow function -> use 'Spread Operator'

let spreadOp =(...nums)=>{
    console.log(nums);
}
spreadOp(10,20,30,40,50)


// 3. => Hoisting 
// Hoisting ka matlab hai JavaScript code chalne se pehle declarations ko memory me le jana. 
// Normal function poori tarah hoist hota hai, 
// isliye usko declare karne se pehle bhi call kar sakte hain.

// ```js id="c0mwv5"
// hello();

// function hello() {
//     console.log("Hello");
// }
// ```

// Lekin arrow function variable me store hota hai, isliye uspar `var`, `let`, aur `const` ke rules lagte hain. 
// Isliye declaration se pehle call karne par error aata hai.

// ```js id="qut0ev"
// hello();

// const hello = () => {
//     console.log("Hello");
// };
// ```

// Simple baat:
// ✅ Normal function → pehle call kar sakte hain
// ❌ Arrow function → pehle call nahi kar sakte





// 4. This Keyword => this keyword ka use current object ko refer karne ke liye hota hai.
//                     Normal function aur arrow function me this ka behavior alag hota hai.
          // in normal function this keyword //
        //   => in normal function this is for current value refer

const obj = {
    name : "Ganesh",
    myFunction : function(){
        console.log("My name is "+ this.name); // console=> My name is Ganesh
    },
};

obj.myFunction();


//  In Arrow Function this keyword 
// => in arrow function this refer chrome window so this is not for current value refer in arrow function 
const user ={
    userName : 'Ganesh Kumar',
    myFunction : ()=>{
        console.log("My full name is "+this.userName) // consloe => My full name is 'undefined'
    }
};

user.myFunction();




setTimeout(() => {
    console.log("Hello");
}, 2000);  // 2 sec after run