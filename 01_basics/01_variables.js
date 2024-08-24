const accountId = 123456
let accountEmail = "chandan@google.com"
var accountPassword = "8754"
accountCity = "Kolkata"
let accountState;

accountEmail = "Chandu123@d.com"
accountPassword = "09876"
accountCity = "Jaipur"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])