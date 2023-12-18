const accountId = 12345
let accountEmail = "devendra@gmail.com"
var accountPassword = "123abc"
accountCity = "Jaipur"

// accountId = 1 //constant variables cannot be changed

/*
var is not preferred to use because of issue in functional scope and block scope 
https://javascript.info/var#:~:text=%E2%80%9Cvar%E2%80%9D%20has%20no%20block%20scope&text=As%20var%20ignores%20code%20blocks,got%20a%20global%20variable%20test%20.&text=As%20we%20can%20see%2C%20var,is%20a%20remnant%20of%20that.
*/

console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])