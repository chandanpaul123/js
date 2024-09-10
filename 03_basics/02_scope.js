//global scope 
let a = 200

//block scope
if (true) {
    let a=20
    const b = 30
    var c = 40
    // console.log("Inner :",a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

function one() {
    const username = "Chandan"
    function two() {
        const learning = "YouYube"
        console.log(username);
    }
    // console.log(learning);
    two()
}
// one()

//using if

if (true) {
    const username = "Chandan"
    if (username === "Chandan") {
        const webSite = " YouTube"
        // console.log(username + webSite);
    }
}


// ++++++++++++ Interesting Method in func ++++++++++++++++++++++
//in this structure we can access 1st then initialization
console.log(addOne(2))
function addOne(num) {
    return num + 1
}

//in this structure we can't access 1st before initialization
//in this structure we can do 1st initialization then access (function declare in variable) <- Hoisting
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(3))