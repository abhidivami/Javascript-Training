import { sayHi } from './closures.js';
import { add,sub } from './closures.js';
console.log(sayHi);
sayHi('John');

console.log(add);
console.log(sub(4,5));




//Before ES6 used in Node.js
const mathModule = require('./closures');

console.log(mathModule.add(2, 3));        // 5
console.log(mathModule.multiply(2, 3));   // 6
console.log(mathModule.pi);               // 3.14159
