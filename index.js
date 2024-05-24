const {constant} = require("lodash");

const a = require("lodash");



console.log("--------------");
console.log("--------------");
console.log("It's alive !!!");
console.log("--------------");
console.log("--------------");


function getType(vrijednost) {
    console.log(`Ulazna vrijednost za provjeru je '${vrijednost}'`);
   if (a.isNumber(vrijednost)) {
    console.log(`>> Ulazna vrijednost je broj`);
   } 
   if (a.isString(vrijednost)) {
    console.log(`>> Ulazna vrijednost je string`);
   }
   if (a.isArray(vrijednost)) {
    console.log(`>> Ulazna vrijednost je array`);
   } 
   if (a.isObject(vrijednost)) {
    console.log(`>> Ulazna vrijednost je objekt`);
   }
}



const myNumber = [1, 9, 4, 7, 3, 8];
const myObject = { ime: "Marko"};

getType (1);
getType ("neka rijec");

getType (myNumber); // ulazna vrijednost je array
getType (myObject); // ulazna vrijednost je objekt

const sortedNumbers = a.sortBy(myNumber);
console.log(sortedNumbers);

