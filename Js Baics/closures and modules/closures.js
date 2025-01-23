//A closure allows a function to access variables from its outer function even after the function has finished executing
// closure = function + lexicl scope

function x(){
    var a = 7;
    function y(){
        console.log(a);
    }
    return y;
}
var z = x();
console.log(z);
z();

//A module is just a file. One script is one module.
//export keyword labels variables and functions that should be accessible from outside the current module.
//import allows the import of functionality from other modules.

export function sayHi(user) {
    console.log(`Hello, ${user}!`);
  }
const add = (a,b) => a+b;
const sub = (a,b) => Math.abs(a-b);
export {add,sub};
// // import function is wrtitten in modules.js it worked fine

// Before ES6 used in Node.js
const pi = 3.14159;

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

module.exports = {
  add,
  multiply,
  pi
};
