//Dates
let myDate = new Date()
// console.log(typeof myDate); //object

// console.log(myDate.toString()); //Mon Aug 26 2024 14:29:28 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toLocaleString()); //8/26/2024, 2:30:17 PM
// console.log(myDate.toDateString()); //Mon Aug 26 2024
// console.log(myDate.toISOString()); //2024-08-26T14:31:45.606Z
// console.log(myDate.toJSON()); //2024-08-26T14:33:58.124Z
// console.log(myDate.toLocaleDateString()); //8/26/2024
// console.log(myDate.toLocaleTimeString()); //2:35:13 PM
// console.log(myDate.toTimeString()); //14:36:28 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toUTCString()); //Mon, 26 Aug 2024 14:37:06 GMT

// let date = new Date(2024, 1, 26) //Mon Feb 26 2024
// let date = new Date(2024, 1, 26, 20, 17, 45) //2/26/2024, 8:17:45 PM
// let date = new Date("2024-08-26") //8/26/2024, 12:00:00 AM
let date = new Date("08-26-2024")
// console.log(date.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(date.getTime());
// console.log(Math.round(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()); // 7 -> Aug
console.log(newDate.getMonth()+1); // 8 -> Aug
console.log(newDate.getDay()); // 1 -> Mon
console.log(`The time is ${newDate.toLocaleTimeString()}`); //The time is 3:02:44 PM

newDate.toLocaleString('default', {
    weekday : "long"
})





