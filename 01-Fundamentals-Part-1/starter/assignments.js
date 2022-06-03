// //Values and Variables

// const country = 'United States';
// const continent = 'North America';
// let population = 100000000;
// console.log(country, continent, population);

// //data types

// const isIsland = false;
// let language;
// console.log(typeof isIsland);
// console.log(typeof population);
// console.log(typeof country);
// console.log(typeof language);

// //let, const, and var

// language = 'English';
// isIsland = true; //cannot be done to a const

// // Basic Operators

// console.log(population / 2);
// population++;
// console.log(population);
// console.log(population > 6000000);
// console.log(population < 33000000);
// let description = country + ' is in ' + continent + ' and its ' + population + ' people speak ' + language;
// console.log(description);

// // Strings and Template Literals
// let newDescription = `${country} is in ${continent} and its ${population} people speak ${language}`;
// console.log(newDescription);

// // Taking Decisions: If / Else statements
// let avgPopulation = 33000000;
// if(population>avgPopulation){
//     console.log(`${country}'s population is above average.`);
// }else{
//     console.log(`${country}'s population is ${avgPopulation-population} below average.`);
// }

// Type Conversion and Coercion
// console.log('9' - '5'); //4
// console.log('19' - '13' + '17'); //617
// console.log('19'-'13' + 17); //23
// console.log('123'<57); //false
// console.log(5+6+'4'+9-4-2); //117, actual answer is 1143

// // Equality Operators
//  let numNeighbors = Number(prompt('How many neighbor countries does your country have?'));
//  if (numNeighbors === 1){
//      console.log('Only 1 border');
//  } else if(numNeighbors > 1){
//      console.log('More than 1 border');
//  }else{
//      console.log('No Borders')
//  }

// Logical Operators
// const isCountryRight = language === 'English' && population < 50000000 && isIsland
// if(isCountryRight){
//     console.log('You should live in the United States!');
// }else{
//     console.log('You should not live in the United States.');
// }