// function main() {
//   const name = "Ganesh Kumar";

//   function sayMyName() {
//     console.log(name);
//   }

//   return sayMyName;
// }

// let fn = main();
// fn();
// fn();
// fn();
// fn();

// function main(name) {

//   function sayMyName() {
//     console.log(name);
//   }

//   return sayMyName;
// }

// let fn = main("Ganesh Kumar");  // fn -> is function
// fn();
// fn();
// fn();
// fn();

// function adder(num){
//     function add(b){
//         console.log(num + b);
//     }
//     return add;
// }

// const add = adder(5);
// add(5);
// add(34);
// add(25);
// add(51);

// const myName = document.getElementById("my-name");
// const btnSize = document.getElementById("size-btn");

// function makeTextSizer(size){

//     function changeSize(){
//         myName.style.fontSize = `${size}px`;
//     }

//     return changeSize;
// }

// const size12 = makeTextSizer(12);
// const size32 = makeTextSizer(32);
// const size80 = makeTextSizer(80);
// const size150 = makeTextSizer(150);
// const size200 = makeTextSizer(200);

// btnSize.addEventListener("click", size200);

// const btnSize = document.getElementById("size-btn");

// function makeCounter() {
//   let count = 1;

//   function increment() {
//     console.log(count++);
//   }

//   return increment;
// }

// const increment = makeCounter();

// btnSize.addEventListener("click", increment);



const num = document.getElementById("num");
const btnSize = document.getElementById("size-btn-2");

function makeCounter() {
    let count = 0;

    function increment() {
        count++;  
        return count;  
    }

    return increment;
}

const incrementCounter = makeCounter();  // Name change kiya conflict avoid karne ke liye

btnSize.addEventListener("click", () => {
    const newValue = incrementCounter();  
    num.innerText = newValue;  
});
