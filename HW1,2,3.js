




/* let x = 2 + '2'; // 22          JS takes easy way out so you comibe number plus string it will simply put the number and string together
let x = 2 + 2 + '2'; //42   a number plus a string will turn the number to a string '4' '2' becomes 42
let x = 2 + true; // true is boolean true=1 false=0 so this is 2+1=3
let x = 2 + true + '2'// 2+1+'2'= 32
let x = true + '2'; // this would give you true2 because its easier to convert boolean to number not vice versa
let x = Number('2'); //how to convert from string to number
                    // let x = Number('Hello'); gives you NaN cause hello isnt a number
                    // if you add concole.log(typeof(x)), it will come up a number
let x = Boolean(1); // true
let x = Boolean(5); //true
let x = Boolean(0); //false
let x = Boolean('Hello'); // ture bc if empty string gives you false
let x = Boolean('');// false
let x = Boolean(null); // false, 0, null, undefined, and emptry string come up as false

let x = '';
if((x !== undefined) || ( x !== null) || (x !== 0)){

}

if(x){

}   // if(number) is not undefined and not empty string so it will go lenth more than 0

if([]) {   // gives you true bc objects are always true
}

console.log(x); */

// HW 2 Switches //
/* 
const color = 'red';

switch(color) {   // Instead of if statement use switches
    case 'red' :   // With switches you work with cases and breaks. NOTE proper code syntax
        console.log(`Color is red`);
        break;
     case 'blue' :
        console.log(`Color is blue`);    
        break;
    default:
        console.log(`Color is not red or blue`);
        break;

}

let day; 


switch(new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';/* 
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log(`Today is ${day}`);


 */


// functions//
//Function declarations//

/* function greet(firstName = `John`, lastName = `Doe`){
/*     if(typeof firstName === `undefined`)(firstName=`John`)
    if(typeof lastName === `undefined`)(lastName=`Doe`)
    //console.log(`Hello`); */
/*     return `Hello` + firstName + '' lastName;
}
//console.log(greet(`Steve`, `Smith`));

//FUnction Expressions
const square = function(x = 3){
    return x * x;
}; */

//console.log(square(8);) // gives you 64 but if theres nothing inside yello () then gives u 9 bc 3 is default

// Immidiately invokable function expressions- iffies

/* (function(){
    console.log(`Ifie ran...`);
}) ();// with functions you want extra pair of () just syntax

 */

/* (function(name){
    console.log(`Hello + name`);
}) (`Brad`); */

// Functions inside objects PROPERTY METHODS
/* const todo= {
    add: function(){
        console.log(`Add todo...`)
    },
    edit: function(id){
        console.log(`Edit todo ${id} `);
    }
}

todo.delete = function(){
    console.log(`Delete todo`);
}


todo.add();
todo.edit(22);
todo.delete();
 */

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];


    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's, use console.table to display the results

    const prototype = age.filter( age =>)
   
 


    // Array.prototype.map()
    // 2. Give us an array of the inventor first and last names
    //console.table the results