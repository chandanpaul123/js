function sayMyName() {
    console.log("Chandan");
}

// sayMyName() //reference ()->execute

// function addTwoNum(num1, num2) {
//     console.log(num1+num2);
    
// }

function addTwoNum(num1, num2) {
    // let result = num1 + num2
    // return result
    return num1 + num2
}
const result = addTwoNum(3, 4)
// console.log("Result: ",result);

function loginUserMessage(username = "ram") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Chandan"));
// console.log(loginUserMessage("Chandan"));

// function calculateCartPrice(val1,val2, ...num1) { //rest operator
//     return num1
// }
// console.log(calculateCartPrice(2,3,4,5)); //o/p=[4, 5] because val1 = 2, val2 = 3

// function calculateCartPrice(...num1) { //rest operator
//     return num1
// }
// console.log(calculateCartPrice(2,3,4,5)); //[ 2, 3, 4, 5 ]

let user = {
    name:"Chandan",
    title:"paul"
}

function handleObject(anyobject) {
    console.log(`Name is ${anyobject.name} and title is ${anyobject.title}`);
    
}
// handleObject(user)
handleObject({
    name:"Suman",
    title:"Paul"
})

const myArrays = [22,33,44,55]
function findSecondElement(array) {
    return array[1]
}
// console.log(findSecondElement(myArrays));
console.log(findSecondElement([22,33,44,55]));