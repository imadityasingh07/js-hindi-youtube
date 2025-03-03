const accountId = 123456789
let accountEmail = "mayank@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"

//accountId = 8 // not allowed

accountEmail = "mc@mc.com"
accountPassword = "mc12345"
accountCity = "Mumbai"
let accountState;
console.log(accountId);


/*
Prefer not to use var keyword
because of issues in block scope and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
