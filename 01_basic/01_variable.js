const accountID = 13453
let accountEmail = "priyanka23@gmail.com"
var accountPassword = "11344"
accountCity = "Noida"
let accountState;

//accountID = 2 // not allowed
accountEmail = "pk234@gmail.com"
accountPasswaord = "4676"
accountCity = "Delhi"
console.log(accountID)
/*
Prefer not to use var because of issue in block scope and functional scope
*/
console.log([accountID, accountEmail, accountPassword, accountCity])
console.table([accountID, accountEmail, accountPassword, accountCity, accountState])