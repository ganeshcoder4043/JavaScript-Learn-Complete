//            Iterator, Generator, Yield



                 // Iterator 
// -> it is pattern of loop are called iterator
// -> Ek object jisme next() method hota hai jo {value, done} return karta hai

for (const val of [1, 2, 3, 4, 5]) {
  console.log(val);     
}

// Iterator Kaise Kaam Karta Hai
// Basic Iterator Example
const colors = ["red", "green", "blue"];

// Create iterator from array
const iterator = colors[Symbol.iterator]();

console.log(iterator.next()); // { value: 'red', done: false }
console.log(iterator.next()); // { value: 'green', done: false }
console.log(iterator.next()); // { value: 'blue', done: false }
console.log(iterator.next()); // { value: undefined, done: true }







 

                //  Generator
//-> Ek function (function*) jo yield use karta hai aur automatic iterator return karta hai
//-> Ek special function jo pause ho sakta hai aur resume ho sakta hai. Normal function ek baar run ho kar khatam ho jata hai, generator rok kar baad mein restart kar sakte ho.
 
// Generator function - function ke aage * lagao
function* myGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = myGenerator();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }





                    // Yield
//-> Generator ko pause karne ka keyword. Jahan yield likhoge, wahan generator ruk jayega aur value return karega.


function* simpleGenerator() {
    console.log("Start");
    yield "First pause";
    console.log("After first yield");
    yield "Second pause";
    console.log("After second yield");
    yield "Third pause";
    console.log("End");
}

const gen = simpleGenerator();

console.log(gen.next()); 
// Output: Start
// { value: 'First pause', done: false }

console.log(gen.next());
// Output: After first yield
// { value: 'Second pause', done: false }

console.log(gen.next());
// Output: After second yield
// { value: 'Third pause', done: false }

console.log(gen.next());
// Output: End
// { value: undefined, done: true }







// => Tino ka mix example 


function* myIterator(start, end , setSize = 1){
    for(let i =start; i<=end; i+=setSize){
        yield i;
    }
}

const result = myIterator(1,20,1);

for(const val of one ){           //-> generator function ke upar iterator use kiya hai taki apna custom loop run ho saken.
    console.log(val)
}