 console.log('FUNCTION LEARNIG')

// => fUNCTIONS A block of code that performs a particular task

// function seyHello(){
//     console.log("this is normal function")
// }
// seyHello();

//=> Function parameter
        // parameter
// function sub(a , b) {       
//     console.log(a-b)
// }
// sub(10, 1) // argument


//=> Actual work of function 

// function multiply(a, b){
//     return a*b 
// }
// let a = multiply(10, 5)
// console.log("Hey its your result is ",  a)



//=> Unlimitated Arguments accepts / we have another way to use this are called-> spred operator <-
// function addNumber(){
//     let ans = 0
//     for(let i=0;i<arguments.length;i=i+1)
//     {
//         ans = ans + arguments[i]
        
//     }     
//     return ans
// }
// let allParaAns=addNumber(1,3,5,3,43,53,324,25,25,324,5,345,34,53,4)
// console.log(allParaAns)


// esme ...number ki jgha kuch de skta hai jaise ganesh anything u wanna 
// -> spred operator <-
// function addNumberV2(...number)
// {
//     let ans =0;
//     for(let i=0;i<number.length;i++)
//     {
//         ans = ans + number[i]
//     }
//     return ans;
// }
// let allParaAns=addNumberV2(1,3,5,53,324,25,25,324,5,345,34,53,4)
// console.log(allParaAns)



// accepts multiples arguments

function addNumbers(){
    let ans = 0;
    for(let i =0; i<arguments.length; i++){
        ans = ans + arguments[i];
    }
    return ans;
}
let results =  addNumbers(7,34,345,43534,5,5657,4,64,2,4) 
console.log(results)



