console.log("In This You Learn About Data Types")


// DataTypes :- A Data Type is the type of data that a variable can hold.

// 1. 🌱 1) Primitive Data Types (Direct Value Store)
//           Ye seedhe memory me value store karte hain aur immutable hote hain (change nahi hote, new value assign hoti hai).
// | Data Type     | Example                 | Meaning                                                    |
// | ------------- | ----------------------- | ---------------------------------------------------------- |
// | **Number**    | `10`, `3.14`            | Saare numeric values integer + decimal                     |
// | **String**    | `"hello"`, `'abc'`      | Text / characters                                          |
// | **Boolean**   | `true`, `false`         | Yes / No, On / Off                                         |
// | **Undefined** | `let x;`                | Variable declared but value assign nahi                    |
// | **Null**      | `let x = null;`         | Value intentionally empty                                  |
// | **BigInt**    | `12345678901234567890n` | Bahut bade numbers ke liye                                 |
// | **Symbol**    | `Symbol("id")`          | Unique identifiers (Mostly advanced / framework-level use) |


let age = 21;              // Number
let userName = "Ganesh";       // String
let isStudent = true;      // Boolean
let x;                     // Undefined => thats means ki wha pe kuch hai hi nhi kuch bhi nhi hai.
let emptyValue = null;     // Null => it suppose anything exists but not have a value is called null.
let bigNumber = 9007199254740991n; // BigInt
let uid = Symbol("123");   // Symbol

console.log(age)
console.log(userName)
console.log(isStudent)
console.log(x)
console.log(emptyValue)
console.log(bigNumber)
console.log(uid)


// 🧱 2) Non-Primitive (Reference) Data Types
//       Ye reference (address) store karte hain, direct value nahi.
// | Data Type    | Example                     | Meaning                           |
// | ------------ | --------------------------- | --------------------------------- |
// | **Object**   | `{name: "Ganesh", age: 21}` | Key-Value pair data               |
// | **Array**    | `[10, 20, 30]`              | List / Collection of data         |
// | **Function** | `function greet(){}`        | Code as a value                   |
// | **Date**     | `new Date()`                | Date & Time objects               |
// | **RegExp**   | `/[a-z]/`                   | Pattern matching (advanced)       |
// | **Map**      | `new Map()`                 | Key-value but modern and powerful |
// | **Set**      | `new Set()`                 | Unique values collection          |


console.log("Starting Non Primitive Datatypes")
Object
let person = {  
  name: "Ganesh",
  age: 21
};
console.log(person)
console.log(person.name)

// Array
let marks = [95, 85, 90];
console.log(marks)

// Function
function greet() {
  console.log("Hello!");
}
greet();

// Date
let today = new Date();
console.log(today)

// Map
let myMap = new Map();
myMap.set("name", "Ganesh");
console.log(myMap)

// Set
let mySet = new Set([1, 2, 3, 3]); // stores only 1,2,3
console.log(mySet)





//=> Playing with Boolean 
// true => 1
// false => 0
console.log(" Playing with Boolean ")
console.log(true + true)
console.log(11+false)
console.log(true+11)
console.log(true+'11')


//=> Playing with String
console.log(" Playing with String ")
console.log('1'+'1') 
console.log('1'+1)
console.log('1'*1) // consider as number
console.log('1'*'1') // consider as number



// to find what tpe variavle or datatypes 
console.log(typeof('1'*1))
console.log(typeof('1'+1))
console.log(typeof(true + true))


// ==>   NaN -> Stands for Not A Number 