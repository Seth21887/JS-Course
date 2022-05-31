// let js = 'amazing';
// console.log(40+8+23-10);

// //********************************VALUES AND VARIABLES***************************************
// //a value is the smallest unit of information that we have in JS
// //a variable assigns a value to a variable name to be able to be used over and over again

// let firstName = "Seth";
// console.log(firstName);

// //this variable is in camelCase notation, first word in lowercase, all following words start with uppercase.
// //cannot start variable name with a number

// // let new = 27;
// //cannot use new for a variable as it is a reserved keyword, same goes for name, function
// //don't start a variable name with an uppercase letter.

// let myFirstJob = 'Programmer';
// let myCurrentJob = 'Teacher';

// let job1 = 'programmer';
// let job2 = 'teacher';

// //the first set of variables here is better to use as they are more descriptive and easy to use.

// //********************DATA TYPES*******************************
// //number: floating point numbers, used for decimals and integers
// //string: sequence of characters, used for text, 
// //boolean: logical type: true or false
// //undefined: value taken by a variable that is not yet defined ('empty value')
// //null: also means 'empty value'
// //symbol: value that is unique and cannot be changed (not useful for now)
// //BigInt: larger integers than the number type can hold

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true); //the typeof operator is going to display what type of value something is.
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Seth');

// javascriptIsFun = 'YES'; //we are now redefining a variable, and we don't use let when we are redefining
// console.log(typeof javascriptIsFun);

// let year; //undefined variable
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);

//************************LET, CONST, VAR*********************************

let age = 30;
age = 31; //known as variable reassignment or mutating

const birthYear = 1987;
// birthYear = 1990; //this should not work as a const cannot be changed.

// const job; //this will not work, cannot create empty const variables.

//as a rule of thumb, use const first unless you know that your variable is going to change at some point in the code, and then you can use let

//var is the old way of defining variables, and is not used anymore. Worked the same way as let.