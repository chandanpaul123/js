//singleton object
// const tender = new Object()

//non singleton object
const tender = {}

tender.id = "123abc"
tender.name = "Chandan"
tender.isLoggedIn = false

// console.log(tender);

//nested objects

const userDetails = {
    email:"chandan123@gmail.com",
    user:{
        userfullname:{
            firstName:"Chandan",
            lastName:"Paul"
        }
    }
}
// console.log(userDetails.user.userfullname.firstName);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1, obj2) // {}<- target , source->next others var
const obj3 = {...obj1, ...obj2}

// console.log(obj3);
// console.log(obj3 === obj1);


//multiple objects inside in one array
const users = [
    {
        id:34,
        email:"chandan@gmail.com"
    },
    {
        id:34,
        email:"chandan@gmail.com"
    },
    {
        id:34,
        email:"chandan@gmail.com"
    },
    {
        id:34,
        email:"chandan@gmail.com"
    }
]
users[1].email

console.log(tender); //{ id: '123abc', name: 'Chandan', isLoggedIn: false }
console.log(Object.keys(tender)); //[ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tender)); //[ '123abc', 'Chandan', false ]
console.log(Object.entries(tender)); //[ [ 'id', '123abc' ], [ 'name', 'Chandan' ], [ 'isLoggedIn', false ] ]

console.log(tender.hasOwnProperty('isLoggedIn')); //true