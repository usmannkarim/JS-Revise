//Starting with JavaScript
console.log("Hello World")
document.write("Hello World")

//Variables
// Variables (i.e let,const,var) are the reserved keywords in JavaScript which allots the memory to the value by name (Id) we provide.

const accountId = 12;
// constants can only be declared using this method.
// const --> assigned values cannot be changed 

// variables can be declared usng the following methods.
let accountEmail = "usmankarim_abc@xyz.com"; // let --> assigned values can be changed

// declaring variables using var was now considered an unpreferred practise as var variable has problems dealing with scope op's. In recent JS let is preferred. 
var accountPassword = "12345"; // var --> assigned values can be changed.

/*
NOTE: PREFER NOT TO USE VAR AS IT CREATES ISSUES IN BLOCK AND FUNCTIONAL SCOPE!
*/

accountCity = "Karachi";

let accountState; // only decleared but not initialized == undefine

// 
accountEmail = "ABCXYZ@uxy.com"; // values changes due to being decleared using let variable
accountPassword = "34563" // values changes due to being decleared using var variable

// console.log(accountEmail);
// console.log(accountPassword);
// old practise ^

console.table([accountEmail, accountId, accountPassword, accountCity, accountState]);
// new practise^