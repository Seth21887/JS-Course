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

// //***********************TYPE CONVERSION AND COERCION************************************* 
// //Conversion: When we explicity want to change from one type to another.
// const inputYear = '1991';
// console.log(Number(inputYear)); //important to note that the original value is still not converted.
// console.log(Number(inputYear) + 18); //this won't work as we can't concatanate a string and an integer.

// console.log(Number('Jonas')); //this will return a NaN: meaning not a number or invalid number

// console.log(String(23));

// //Coercion: happens whenever an operator is dealing with two values that have different types.
// console.log('I am' + 23 + ' years old'); //the + operators here triggers a coercion into string.
// console.log('23' - '10' - 3); //this time, javascript converts the strings to numbers, the minus signs triggered the coercion.
// console.log('23' * '2'); //multiplication operator coerces to a number, same is true with division operator

// // ****************************************TRUTHy AND FALSY VALUES***********************************************
// //Falsy values are values that are not exactly false but will become false when we try to convert them into a boolean
// //5 Falsy values in JS: 0, '', undefined, null, NaN
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Seth')); //any string that is not an empty string is a truthy value.
// console.log(Boolean({})); //this empty object will be a truthy value.
// console.log(Boolean(''));

// //in this if/else statement, 0 is converted to false automatically, if we change the number to anything other than 0, it will now be a truthy value
// const money = 0;
// if(money){
//     console.log("Don't spend it all!");
// }else{
//     console.log("You should get a job");
// }

// //in this equation, we know that height is undefined, and an undefined is a falsy value, so the else statement will be executed.
// let height;
// if(height){
//     console.log('YAY! Height is defined');
// }else{
//     console.log('Height is undefined');
// }

// // ***************************************************EQUALITY OPERATORS: == VS === **************************************************************
// //the triple equal === is the strict equal, it does not perform type cooercion. Only returns true when both values are totally the same.
// //the double equal == is the loose equal, and it does perform type coercion.
// //as a general rule, avoid the loose equality operator as much as possible.
// const age = 18;
// if(age === 18) console.log('You just became an adult'); //we don't need the {} if only one line is needed.

// const favorite = Number(prompt("What's your favorite number?"));
// console.log(favorite);
// console.log(typeof favorite); //it's a string

// if (favorite == 23){
//     console.log('Cool! 23 is an amazing number!');
// }

// if(favorite === 23){
//     console.log('Cool! 23 is an amazing number!'); //this one will not work because favorite type is string while 23 is a number, so they don't equate. We can fix this by putting Number() when we're defining the favorite variable.
// }else if(favorite === 7){
//     console.log('7 is also a cool number')
// }else{
//     console.log('Number is not 23 or 7')
// }

// if(favorite !== 23) console.log('Why not 23?'); //!== means not equal to (loose version)

// // *************************************** BOOLEAN LOGIC ***********************************************************************
// //the not operator doesn't combine values, instead, it acts on only one boolean value, and basically just inverts it
// //the not operator has precedence over the 'and' and 'or' operators
// const hasDriversLicense = true; //variable A
// const hasGoodVision = true; //variable B

// console.log(hasDriversLicense && hasGoodVision); //use of the 'and' operator, the result of true and true will be true, the result of true and false will be false.
// console.log(hasDriversLicense || hasGoodVision); //Or operator: will be true as long as one of the two is true.
// console.log(!hasDriversLicense); //Not operator: this will change hasDriversLicense from true to false.

// // const shouldDrive = hasDriversLicense && hasGoodVision;

// // if(shouldDrive){
// //     console.log('Sarah is able to drive');
// // }else{
// //     console.log('Someone else should drive');
// // }

// const isTired = false; //variable C
// console.log(hasDriversLicense || hasGoodVision || isTired);

// const shouldDrive = hasDriversLicense && hasGoodVision && !isTired;

// if(shouldDrive){
//     console.log('Sarah is able to drive');
// }else{
//     console.log('Someone else should drive');
// }