//       IIFE -> Immediately Invoked Function Expersion
            //  Function jo banate hi turant execute ho jata hai, bina call kiye.

function hello(){
    console.log("hello");
}
hello();      //-> Normal function


(function (){
    console.log("hello");
})();       //->  iife fuction 


// Way 1: Wrapping in parentheses
(function() {
    console.log("IIFE executed!");
})();


// Way 2: Using arrow function
(() =>{
    console.log("hello");
})();


// Way 3: With return value
const result = (function() {
    return "I am returned";
})();
console.log(result); // "I am returned"




// Avoid Global Scope Pollution
// Problem: Sab global mein jaa raha hai
var name = "Rahul";
var age = 25;
var city = "Delhi";
// Ye sab globally accessible hain

// Solution: IIFE mein wrap karo
(function() {
    var name = "Rahul";
    var age = 25;            // -> yeh variables esi function me execute hoga , global variables nhi me nhi jyaga 
    var city = "Delhi";
    // Ye variables ab globally nahi hain
})();

// console.log(name); // Error: name is not defined




//  Execute Code Immediately
// One-time initialization code
(function() {
    console.log("App starting...");
    const config = {
        apiKey: "abc123",
        url: "https://api.example.com"
    };
    // Initialize app with config
})();




// ----> Different IIFE Variations

// 1. With Parameters
(function(name, age) {
    console.log(`Hello ${name}, you are ${age} years old`);
})("Rahul", 25);
// Hello Rahul, you are 25 years old


// 2. With Return Value
const result = (function(a, b) {
    return a + b;
})(5, 3);
console.log(result); // 8


// 3. Arrow Function IIFE
(() => console.log("Arrow IIFE"))();

// With return
const square = ((x) => x * x)(5);
console.log(square); // 25


// 4. Async IIFE
(async function() {
    const data = await fetch("https://api.example.com/data");
    console.log(data);
})();

// Arrow async IIFE
(async () => {
    const data = await fetch("https://api.example.com/data");
    console.log(data);
})();


// 5. Unary Operators (Alternative syntax)
// Using + operator
+function() {
    console.log("Using +");
}();

// Using ! operator
!function() {
    console.log("Using !");
}();

// Using ~ operator
~function() {
    console.log("Using ~");
}();




//  ---> Summary - Yaad Rakhne Ke Liye

// Basic IIFE
(function() {
    // Code runs immediately
})();

// With parameters
(function(param) {
    console.log(param);
})("value");

// With return value
const result = (function() {
    return "something";
})();

// Arrow IIFE
(() => {
    // Code runs immediately
})();

// Async IIFE
(async () => {
    await someAsyncFunction();
})();

// When to use:
// 1. One-time initialization code
// 2. Creating private variables
// 3. Module pattern
// 4. Avoiding global scope pollution
// 5. Capturing values in loops (legacy)






// ------>  Quick Reference Card

// Syntax
(function() { })();        // Classic
(() => { })();              // Arrow
(async () => { })();        // Async

// With params
(function(a, b) { })(1, 2);

// With return
const x = (function() { return 5; })();

// Private variables
const module = (function() {
    let private = 10;
    return { get: () => private };
})();