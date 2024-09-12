const user = {
    username:"Chandan",
    price:999,

    welcomeMessage: function () {
        console.log(`${this.username} , welcome to website`); //this->refer current context
        // console.log(this);
        
    }    
}

// user.welcomeMessage()
// user.username = "Suman"
// user.welcomeMessage()
// console.log(this);

/*function chandan() {
    // let num12 = "chandu"
    console.log(this.num12);
}
chandan()*/


// const chandan = function () {
//     let num12 = "chandu"
//     console.log(this.num12);
// }

// const chandan = ()=> {
//     let user = "chandu"
//     console.log(this);
// }
// chandan()

// syntax -> const chandan = ()=> {}

let num1 = 2
let num2 = 3

let addTwo = ()=> {return num1 + num2;} // Explicit return
//if you console.log(addTwo()); o/p -> NaN
// console.log(addTwo(num1, num2)); //5

//implicit return
// const add = (num1,num2) => (num1+num2) 
// console.log(add(num1,num2));

const add = (num1,num2) => ({username:"Chandan"})
console.log(add(num1,num2));

