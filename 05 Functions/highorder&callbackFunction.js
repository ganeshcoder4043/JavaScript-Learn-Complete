// High Order function & CallBack
// HIGH ORDER FUNCTION => ek function ke andar dusra function 
// CALLBACK FUNCTION => call function ke and ek or function call krna 
function addNums(a, b, cb){
    let result = a+b;
    cb(result)
}
addNums(23, 23, function(val) {
    console.log(val)
})

// upar wla or niche wla same hai tere upar tu kaisa use krna hai tere ko bs diff yeh ki niche wlen me arrow fuction use hua hai
function addNums(a, b, cb){
    let result = a+b;
    cb(result)
}
addNums(23, 23, (val) => console.log(val) )




function greet(name){
    console.log("hello "+ name );
}

function processUser(callback){
    callback("bala")
}

processUser(greet)