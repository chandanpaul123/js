//objects literals

const mySymbol = Symbol("key1")

const myDetail = {
    name:"Chandan",
    "full name":"Chandan Paul",
    [mySymbol]:"mykey1",
    age:23,
    location:"Ghatal",
    email:"chandan234@gmail.com",
    isLogged:false,
    lastLoginDays:["Mon","Tue"]
}
// console.log(myDetail.email);
// console.log(myDetail["name"]);

// console.log(myDetail["full name"]);
// console.log(myDetail[mySymbol]);

// myDetail.email = "chandan123@gmail.com"
// Object.freeze(myDetail)
// myDetail.email = "suman@gmail.com"
// console.log(myDetail);

myDetail.greeting = function () {
    console.log("Hello World");
}
myDetail.greeting1 = function () {
    console.log(`Hello World, ${this.name}`);
}
console.log(myDetail.greeting());
console.log(myDetail.greeting1());
