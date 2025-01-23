// // Func Expr
// const square = function(number){
//     return number*number;
// }
// console.log(square(4));

// //Gen Func
// function square2(number){
//     return number * number;
// }
// console.log(square2(4));

// //Arrow Func
// const ans = n => n*n;
// console.log(ans(4));
// function multiplier(factor) {
//     console.log(factor);
//     return function (x) {
//         console.log(factor,x);
//         return x * factor; // This new function multiplies x by factor
//     };
// }

// const double = multiplier(2); // Creates a function that multiplies by 2
// const triple = multiplier(3); // Creates a function that multiplies by 3

// console.log(double(5)); // 5 * 2 = 10
// console.log(triple(5)); // 5 * 3 = 15
// function outer() {
//     // let x = 10; // Variable in outer function scope
//     // function inner() {
//         eval('console.log(y)'); // Using eval to simulate dynamic scoping
//     // }
//     // inner(); // This would normally look up x in the lexical scope (outer function)
// }

// function simulateDynamicScope() {
//     let y = 20; // Variable in the calling function scope
//     outer(); // Simulate a dynamic scope lookup
// }

// simulateDynamicScope(); // Logs 20, simulating dynamic scoping behavior

// function outer() {
//     with (arguments.callee.caller) {
//         eval('console.log(y)'); // Dynamic scoping using the calling function's context
//     }
// }

// function simulateDynamicScope() {
//     let y = 20; // Variable in the calling function scope
//     outer(); // Simulate dynamic scope lookup
// }

// simulateDynamicScope(); // Should log 20

// const x = 0;
// function pippo() {
//  console.log(x);
// }
// function pluto() {
//  const x = 1;
//  pippo();
// }
// pluto();
// function outer(){
//     //let x=10;
//     function inner(){
//         x=20;
//         console.log(x);
//     }
//     inner()
//     console.log(x);
// }
// // console.log(x);
// outer()
// console.log(!!"asd");
// for (var i = 0; i < 3000000; i++) {
//     setTimeout(function() {
//     console.log(i); // Prints '3' three times because i is shared across all iterations
//     }, 1000);
//     }

console.log(isNaN(null));
console.log(isNaN(undefined));
console.log(Boolean(undefined));
console.log(typeof(NaN));
console.log(NaN === "text");