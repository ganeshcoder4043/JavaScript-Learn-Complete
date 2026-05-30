/**
 
 Currying = Ek function jo multiple arguments leta hai, 
 use tod kar multiple functions mein convert kar deta hai,
 har function ek argument leta hai.

 */

//  function add1(a, b, c){   //=> yeh multiple argument ek sath le rha hai
//     return a+b+c;
//  }
// console.log(add1(1,2,3))

// function add2(a) {    // => yeh multiple argument ek ek kr ke le rha hai
//   return function (b) {
//     return function (c) {
//         return a + b + c;
//     };
//   };
// }

// console.log(add2(1)(2)(3));

// upar wla old way hai yese bhi kr skta hai koi problem nhi hai ese mordern way se bhi kr skta hai

const add = (a) => (b) => (c) => a+b+c;
console.log(add(1)(2)(3))
