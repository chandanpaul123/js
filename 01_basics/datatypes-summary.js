// Primitive -- 7 types : String, Number, Boolean, Null(empty), Undefined, Symbol(unique of value), BigInt


const score = 100 //number
const scoreValue = 100.3 //number
const loggedIn = false //boolean
const outSideTemp = null //object
let userEmail; //undefined

const id = Symbol('123') //symbol
const anotherId = Symbol('123')//symbol
// console.log(id === anotherId); // false

const bigNumber = 345698933049034n //bigint
// console.log(bigNumber);

// Refernce Type( non-primitive )-- Array, Objects, Functions

const array = ["Chandan", "Suman", "Mallika", "Mandira"]; //object
let myObj = {
    name : "Chandan",//object
    age : 23, //object
}

const myFunction = function(){ // function
    console.log("Hello world");
}

// console.log(typeof myObj);

//*************************  Memory  ***********************************

// Stack (Primitive), Heap (Non-Primitive)<- we can get reference value

let myName = "Chandan Paul"
let anotherName = myName
anotherName = "Biru"
console.log(myName);
console.log(anotherName);

let userOne = {
    email: "chandan@gmail.com",
    upiId: "1234"
}
let userTwo = userOne

userTwo.email = "biru@gmail.com"

console.log(userOne);
console.log(userTwo);