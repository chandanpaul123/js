const marvel_heros = ["thor", "Ironman","spiderman"]
const dc_heros = ["superman","flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); //[ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]);

// const myHeros = marvel_heros.concat(dc_heros) //Combines two or more arrays. This method returns a new array without modifying any existing arrays.
// console.log(myHeros); //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

//spread operator
const all_new_heros = [...marvel_heros, ...dc_heros] //[ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]
// console.log(all_new_heros);

const another_array = [1,2,3,[4,5,6],7,8,[3,5,[5,6]]]
// const real_array = another_array.flat(Infinity) //Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// console.log(real_array);


console.log(Array.isArray("Chandan"))
console.log(Array.from("Chandan"))
console.log(Array.from({name:"chandan"}));


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
