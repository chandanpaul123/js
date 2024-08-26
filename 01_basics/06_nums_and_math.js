const score = 400
// console.log(score);

const bal = new Number(100)
// console.log(bal); // typeof -> object

// console.log(bal.toString().length); // object -> string ; length = 3
// console.log(bal.toFixed(2)); // 100.00

const otherNumber = 523.5555
// console.log(otherNumber.toPrecision(4)); // (45.55)2 -> 46 ; (4523.5555) 3 -> 4.52e+3

const hundreds = 1000000000000
// console.log(hundreds.toLocaleString('en-IN')); // detect zeros


// *************************** Math ********************************
// console.log(Math);
// console.log(Math.abs(-4)); //-4 to 4
// console.log(Math.round(4.6)); // round fig is 5
// console.log(Math.ceil(4.6)); // 4 er theke besi holei 5 hoea jabe
// console.log(Math.floor(4.9)); // sob theke kom value nebe jemon 4 hbe etai,, 5.6 -> 5
// console.log(Math.sqrt(4)); // 2
// console.log(Math.max(52,  44, 66, 88, 33, 99, 33)); //99
console.log(Math.random());
console.log((Math.random()*10) + 1); // avoid zeros
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min);






