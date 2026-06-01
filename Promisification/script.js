                          //  Promisification 

/*

Promisification = Callback-based function ko Promise-based function mein convert karna.

Simple words: Purane callback wale code ko naye Promise wale code mein badalna.

*/

// Without Promisification (Old way)

// Callback style
function readFile(path, callback) {
    setTimeout(() => {
        callback(null, "File content");
    }, 1000);
}

// Using it - ugly
readFile("test.txt", (err, data) => {
    if(err) console.log(err);
    else console.log(data);
});




// With Promisification (New way)

// Convert to Promise
function readFilePromise(path) {
    return new Promise((resolve, reject) => {
        readFile(path, (err, data) => {
            if(err) reject(err);
            else resolve(data);
        });
    });
}

// Using it - clean!
readFilePromise("test.txt")
    .then(data => console.log(data))
    .catch(err => console.log(err));




    // Generic Promisify Function (Universal)

    // One function to rule them all!
function promisify(callbackFunction) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            callbackFunction(...args, (error, result) => {
                if(error) reject(error);
                else resolve(result);
            });
        });
    };
}

// Usage
const readFilePromise = promisify(readFile);
const writeFilePromise = promisify(writeFile);
const dbQueryPromise = promisify(dbQuery);




// Ek Line Definition
// Promisification is wrapping a callback function inside a Promise to use .then() and async/await.

const promisify = fn => (...args) => 
    new Promise((resolve, reject) => 
        fn(...args, (err, result) => err ? reject(err) : resolve(result))
    );

    // Yahi hai! Bas itna samjho: Callback wale function ko Promise mein wrap karo. 