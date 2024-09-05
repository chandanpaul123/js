const myArray = [0,1,2,3,4,5]
const myFamily = ["Father", "Mother", "Bro", "sis"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArray[5]);

//Array Method

// myArray.push(6) //[0,1,2,3,4,5,6]
// myArray.pop() //[0,1,2,3,4,5]

// myArray.unshift(3) //[ 3, 0, 1, 2, 3, 4, 5]
// myArray.shift(3) //[ 0, 1, 2, 3, 4, 5 ]

// console.log(myArray.includes(5)) //true
// console.log(myArray.indexOf(9)) //-1

// const newArr = myArray.join()
// console.log(myArray); //[ 1, 2, 3, 4, 5 ]
// console.log(typeof newArr); //1,2,3,4,5 (string type)

//slice & splice

console.log("A", myArray);


const myn1 = myArray.slice(1, 3)
console.log(myn1);

console.log("B", myArray);

const myn2 = myArray.splice(1, 3)
console.log("C", myArray);
console.log(myn2);
