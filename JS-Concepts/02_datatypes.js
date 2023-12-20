"use strict"; //treat all below JS code as a newer version of JS

// alert("hello") // we are using node JS, not browser

// console.log(3+3); console.log("4") // not a good practise as readability is degrded
 
// DATATYPES:
// PRIMITIVE DATATYPES
let name = "Ali" // string DT (preferred in double quotes)

let age = '18avd'  // Number DT (usually ranges from 2 to 2^53)
let age_group = Number(age)
// BigInt Dt (for no. greater than 2^53)

//isLoggedIn = True // boloean (True/False)

let state = null// null (yet along with being a DT it is a standalone value in JS) 
/*NOTE: NULL IS NOT 0 !*/

let newer; // undefine DT used to represent empty value (declared but not initialized values)

//symbol used for uniqueness

//NON-PRIMITIVE DATATYPES
//Object i.e
// console.log(typeof null); // Null is of type object
// console.log(typeof undefine); // undefine is of type undefined
// console.log(typeof age_group); // value sometines converted but sometimes not i.e
// '33' -> 33, number
// '33abc' -> 33abc, NaN
// true -> 1 ; false -> 0;
// console.log(age_group) 

//


let isLoggedIn = 1
let issessionOn = Boolean(isLoggedIn)

// console.log (issessionOn)
// console.log (typeof issessionOn)

// 1 -> true
// 0 -> false
// "" -> false
// "xyz.." -> true

//
let anumber = "0";
let astring = String(anumber)
console.log(astring);   
console.log(typeof astring);

// "12" -> string
// "" -> string
// "acsa.." -> string