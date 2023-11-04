const accountId = 14432
let accountEmail = "sudhakarpal024@gmail.com"
var accountPassword = "3452"
accountCity = "raipur"

// accountId = 2   this is not allowed
accountEmail = "hc@hc.com"
accountPassword = "22273"
accountCity = "Bengaluru"
let accountstate;
// 
/*
prefer not to use var 
becuase of issue in block scope and functional scope

*/


console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountstate])