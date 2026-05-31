/*

Composition = Chhoti-chhoti functions ko jod kar ek bada function banana. 
Jaise LEGO blocks ko jod kar naya structure banana.

*/


function add(...args) {
  return args[0] + args[1];
}
console.log(add(2, 4));


function square(val) {
  return val * val;
}
console.log(square(2));


function composeTwoFunction(fn1, fn2){
    return function (a,b){
        return fn2(fn1(a,b));
    }
}
const task = composeTwoFunction(add, square);
console.log(task(2,3))

//=> upar or yeh niche wla same hai bs niche wla morden js ka use hua hai or upar wla od js ka vaild dono hai 
const c2f = (fn1, fn2) => (a,b) => fn2(fn1(a,b));
const task2 = c2f(add, square);
console.log(task2(5,6))



//=>  Unlimeated function compose


// function compose(...fns){
//     return function(...values){
//         return fns.reduce((a,b) => b(a) , values);
//     }
// }

// const composeTask = compose(add, square);
// console.log(composeTask(2,3))





function compose(...fns){
    return function(...values){

        return fns.reduce((a,b,index) => {

            if(index === 0){
                return b(...a); // add(2,3)
            }

            return b(a);

        }, values);
    }
}

const composeTask = compose(add, square);

console.log(composeTask(2,3));