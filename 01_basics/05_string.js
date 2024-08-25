const name = " Chandan"
const number = 33

// console.log(number + name + " Paul");
console.log(`Hello my name is${name} and my number is ${number}`);


const name1 = new String("Chandan-Paul")
console.log(name1.__proto__);

console.log(name1.charAt(2));
console.log(name1.indexOf('a'));
// console.log(name1.substring(1, 4));
const newString = name1.substring(0, 7)
console.log(newString);

const name2 = name1.slice(-7)
console.log(name2);

const name3 = "   chandan    "
console.log(name3);
console.log(name3.trim());

const url = "https://google.com/chandu%23"
console.log(url.replace('%', '&'));

console.log(url.includes('google'));

const name4 = new String("Chandan-Paul")
console.log(name4.split('-'));




