const accountId = 354583
let accountEmail = "Yash@gmail.com"
var accountPassword = "123456"
accountCity = "Jaipur"
let accountState;

// accountId = 23   // Not allowed

accountEmail = "YHP@gmail.com"
accountPassword = "654321"
accountCity = "Bengaluru"

/*
Prefer Not to use var
Because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])