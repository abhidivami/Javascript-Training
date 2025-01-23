//  let user={
//     name : "Abhilash",
//     lastname : "Adunuri",
//     age : 20,
//     getname : function(){
//         return this.name+" "+this.lastname;
//     }
// };
// console.log(user.name);
// console.log(user.getname());

// user.isIntern = true;
// user.isPresent = true;

// console.log(user);

// delete user.isIntern;
// console.log(user);

// user['like Birds'] = true;

// console.log(user);

// delete user;
// console.log(user);

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter the property you want to know): ', (input) => {
//         if (user[input] !== undefined) {
//         console.log(`Your ${input} is: ${user[input]}`);
//     } else {
//         console.log('Invalid property!');
//     }
//     rl.close();
// });

// //task
// function checkingObject(objname){
//     if(Object.keys(objname).length==0)  
//         return true;
//     else
//         return false;
// }

// function multiplenumeric(obj){
//     for(let key in obj)
//         if(typeof(obj[key])==='number')
//             obj[key]*=2;
//     return obj;
// }

// //1
// let Employee = new Object();
// console.log(Employee);

// Employee.name = "John";
// Employee.surname = "Jacob";
// console.log(Employee);

// Employee.name = "Pete";
// console.log(Employee);

// delete Employee.name;
// console.log(Employee);

// // to check whether an object is empty or not
// //i): get the keys using Object.keys(obj_name) and use .length. if the length is 0 then return false
// //ii): use JSON.stringify(objname) 

// //2
//let dummy = new Object();
// if(JSON.stringify(dummy)=='{}')
//     console.log("Empty Object");
// else
//     console.log("It has some properties");

// console.log(checkingObject(Employee));
// console.log(checkingObject(dummy));

// //3
// let salaries={
//     John : 100,
//     Pete : 250,
//     Rachael : 300
// };
// let sum=0;
// for(let key in salaries)
//     sum+=salaries[key];
// console.log(sum);

// //4
// let SystemData = {
//     Computer : 260, 
//     mouse : 270, 
//     boards : "WhiteBoards"
// };
// console.log(multiplenumeric(SystemData));

// let x = this;
// console.log(x);
let user = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => console.log(this.firstName);
      arrow();
    }
  };
  
  user.sayHi();

  function greet(){
    console.log(`Your name is ${this.name} and your age is ${this.age}`);
  }
  const person={
    name : "john",
    age : 20,
  };
  greet.call(person);
