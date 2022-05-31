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

// let age = 30;
// age = 31; //known as variable reassignment or mutating

// const birthYear = 1987;
// birthYear = 1990; //this should not work as a const cannot be changed.

// const job; //this will not work, cannot create empty const variables.

//as a rule of thumb, use const first unless you know that your variable is going to change at some point in the code, and then you can use let

//var is the old way of defining variables, and is not used anymore. Worked the same way as let.

//*****************************BASIC OPERATORS**************************

// //math operators
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 2, 2**3);
// //2**3 means 2 to the power of 3

// const firstName = 'Seth';
// const lastName = 'LaFountain';
// console.log(firstName + " " + lastName);

// //assignment operators
// let x = 10 + 5; //the = is an assignment operator, so the answer is 15
// x += 10; // this means x = x+10, now the answer  is 25
// x *= 4; // x = x*4 = 100
// x++; // x = x+1 = 101
// x--; // x = x-1 = 100
// console.log(x);

// //comparison operators
// console.log(ageJonas > ageSarah); // the result here will be true, a boolean value, others include >,<, >=, <=
// console.log(ageSarah >= 18); //this will check if the value of ageSarah is greater than or equal to 18.

// const isFullAge = ageSarah >= 18;
// console.log(now - 1991 > now - 2018);

//**************************************OPERATOR PRECEDENCE****************************************** 
//check out website MDN operator precedence in mozilla

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018); //the two operations are done before the >
// //normally all math operations are executed before comparison operators
// //assignment operators are some of the lowest precedence.
// let x, y;
// x = y = 25-10-5; //javascript will first execute the math operators (-) and secondly execute the assignment operators. x = y = 10, assignment operators are performed right-to-left
// console.log(x,y);

// //highest precedence is ()
// // const averageAge = ageJonas + ageSarah / 2; //this won't work properly because division has precedence over addition and subtraction. so instead we use parentheses
// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas,ageSarah, averageAge);

//***********************************STRINGS AND TEMPLATE LITERALS************************************* 

// const firstName = 'Seth';
// const job = 'unemployed person';
// const birthYear = 1987;
// const year = 2022;

// const seth = "I'm " + firstName + ', a ' + (year - birthYear) + ' year old ' + job + '!';
// console.log(seth);

// //its a pain to write out a long string like this using a combination of strings and variables, instead we can use template literals.

// const sethNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!!`;
// console.log(sethNew);

// //back ticks can also be used for all strings f wanted

// //also multiple line strings can be used very simply with the back ticks
// console.log(`String
// multiple
// lines`);

//************************************TAKING DECISIONS / IF/ELSE STATEMENTS**************************** 
// const age = 15;
// const isOldEnough = age >= 18;

// //if the condition within the parentheses turns out to be true, the next block of code (if) will be executed, if not, then the (else) block will be executed.
// //there doesn't have to be an else block, javascript will just move on if the condition is false.
// //the if else statement is known as a control structure
// if(isOldEnough){
//     console.log('Sarah can start driving license👍');
// }else{
//     const yearsLeft = 18 - age;
//     console.log(`Sarah has ${yearsLeft} years left until she can take her test`);
// }

// const birthYear = 2002;
// let century; //must be defined outside of the if/else block statement because it won't be accessible outside of that block.
// if(birthYear <= 2000){
//     century = 20;
// }else{
//     century = 21;
// }
// console.log(century);