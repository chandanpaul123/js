//global scope 
let a = 200

//block scope
if (true) {
    let a=20
    const b = 30
    var c = 40
    console.log("Inner :",a);
    
}
console.log(a);
// console.log(b);
// console.log(c);
