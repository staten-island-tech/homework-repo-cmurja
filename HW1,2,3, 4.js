




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




// 

/* const inventors = [
    { first: 'Albert',  last: 'Einstein', year: 1879, passed: 1955 },
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
  ]; */


    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's, use console.table to display the results

/* let limitBirth = inventors.filter(function (b) {
    return b.year > 1500 && b.year < 1600;
});
console.table(limitBirth);
 */

    // Array.prototype.map()
    // 2. Give us an array of the inventor first and last names
    //console.table the results

/* let fullName = inventors.map (function (n) {
    return n.first  + n.last;
}); 
console.table(fullName); */


// HW 5

//Global SCope
//var a = 1;
//let b = 2;
//const c = 3;

/* function test (){   // this wont change the variable already stated it just adds a new scope
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope: ', a, b, c);
}

test(); */

//Block Scope
/* if(true){
    var a = 4;      // this will get your global scope to change so var a will not equal 1, it will = 4
    let b = 5;
    const c = 6;
    console.log('If Scope: ', a, b, c);
} */


//Loop   
//for(var a = 0; a < 10; a++){    // var a stayed 1 in global scope  when use let 
    //console.log(`Loop: ${a}`);


// if instead of let you put var, the value of a in global scope would be 10

//console.log('Global Scope: ', a, b, c);



/* const num1= 100;
const num2 = 50;
let val; 
//simple math w numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2;
// math object 
val= Math.PI;
val = Math.E; 
val = Math.round(2.8); 
val = Math.cell(2.4); //round up 
val = Math.floor(2.4); //round down
val = Math.sqrt(64);
val = Math.abs(-3); 
val = Math.pow(8,2); //powers
val = Math.min(2,3,5,6,7,8); //and max too
val = Math.random(); //gives u random decimal 
val = Math.floor(Math.random() * 20 + 1); // random num btw 1-20 but no decimals  
console.log(val);  */


//HW 6

/* const list = Array.from(document.querySelectorAll('li'));

    console.log(list);  //// Select all the list items on the page and convert to array (array from)

    

  



    const listFlexbox = list.filter(item => item.textContent == "Flexbox Video");



    console.log(listFlexbox);   // Filter for only the elements that contain the word 'Flexbox' hint use textContent (filter method)



  



    const listTime = listFiltered.map(obj => {

      return obj.dataset.time;

    });



    console.log(listTime); // map down to a list of time strings Hint look up dataset mdn and think 'time'... you will need to create a new variable called filtered 

  

  

    

    const listTimeSeconds = listTime.map(timeCode => {

      const parts = timeCode.split(':');

      //console.log(parts);

      return (parseIntr(code[0]*60)) + parsInt(code[1]);

      

    })    // map to an array of seconds, 

.reduce((acc, val) => {
          return acc+val;
      })
/* 
    console.log(listTimeSeconds); */
    //Hw 7
   /*  const featured = ['deep', 'pepper', 'hawaiian'];
const specialty = ['meaty', 'spicy', 'marge'];

const pizzas = [...featured, 'veg', ...specialty];
const fridayPizzas = [...pizzas];
//console.log(pizzas); */
/* const heading = document.querySelector('.jump');
heading.innerHTML = sparanWrap(heading.textContent);


function sparanWrap(word) {
/*     return [...word].map(letter => `<span>${letter}</span>`).join('');
} */

/* class Album {
    constructor(title, artist, yearReleased){

    
    this.title= title;
    this.artist= artist;

    this.yearReleased = yearReleased;
} */
/* calculateAge: (){
    return (new Date().getFullYear() - this.yearReleased); 
}

}
const abbeyRoad = new Album('Abbey Road', 'The Beatles', 1969) // instantiate new album

class CD extends Album {
    constructor(title, artist, yearReleased){

        super(title,artist,yearReleased);
        this.digital = digital;
    }
} */
 

/* class Movie {
    constructor(title, princess, yearReleased){

    
    this.title= title;
    this.artist= princess;

    this.yearReleased = yearReleased;
}
calculateAge: (){
    return (new Date().getFullYear() - this.yearReleased); 
}

}
 */ 

 /* class Person {
     constructor (age, fullName){
         this.age = age;
         this.fullName= fullName;
     }
     calculateBirthYeaR:(){
        return (new Date().getFullYear() - this.age); 
     }
        
 }
 const Winny= new Person (17, 'Winny');
 console.log(winny.calculateBirthYeaR());
 
  */
/*  class Movie {
    constructor(title, princess, yearReleased){

    
    this.title= title;
    this.artist= princess;

    this.yearReleased = yearReleased;
}
calculateAge (){
    return (new Date().getFullYear() - this.yearReleased); 
}
 } */

 //view class for the UI which contains methods
//clearfield method 
//remove smth
//creates the html for UI DISPLAY +++new html thing and insert it 



 //controller combines ui and model // so theres an event 
 // get values  querey thing
 // pass the values into the class its called instantiate //instantiate new class/object with variable name 

 // instantiate a new UI const ui= new UI()

 // call relevant methods

 //seperate event handler for removing 

/* 
 <script>
 const comments = [
 { text: 'Love this!', id: 523423 },
 { text: 'Super good', id: 823423 },
 { text: 'You are the best', id: 2039842 },
 { text: 'Ramen is my fav food ever', id: 123523 },
 { text: 'Nice Nice Nice!', id: 542328 }
];
{/* 
 Array.prototype.find()
 // Find is like filter, but instead returns just the one you are looking for
 // find the comment with the ID of 82342*/
   
   
/*     
    let textFilter= comments.find(function(e){
        return e.id === 823423;

    });
    console.log(textid);



</script> */ 


//Hw 8
/* const alphabet = ['A', 'B', 'C', 'D', 'E', 'F']
const numbers = ['1', '2', '3', '4', '5', '6']

const newArray =[ ...alphabet, ...numbers]

const [a, b] = alphabet   // const [a,, c, ...rest] = alphabet  skip 2nd element
console.log(a)
console.log(b)
//console.log(rest)
//console.log(newArray)

function sumAndMultiply (a,b) {
    return [a+b, a*b, a/b]
    }
  
  const [sum, multiple, division = 'No division'] = sumAndMultiply(2,3)
  console.log(sum)
  console.log(multiple)
  console.log(division)

//Object Destructuring 
  const personOne = {
    name: 'Kyle',
    age: 24,
    favoriteFood: 'Watermelon', //added in
    address: {
        city: 'Somewhere', 
        state: 'One of them'
    }
}

const personTwo = {
    name: 'Sally',
    age: 32,
    address: {
        city: 'Somewhere else',
        state: 'Another one of them'
    }
}
  
const { name, age } = personTwo 

console.log(name) //Sally
console.log(age) //32

const { name: firstName, age, favoriteFood = 'Rice', ...rest} = personTwo 

console.log(firstName) //Still get Sally
console.log(age)
console.log(favoriteFood) //Rice until favoriteFood variable added 
console.log(rest) 

const { name: firstName, address: { city } } = personTwo 

function printUser(user) {
    console.log(`Name is: ${user.name}.  Age is ${user.age}`)
}


//MOST IMPORTANT!!!
function printUser({ name, age, favoriteFood = 'Watermelon' }) {
    console.log(`Name is: ${name}.  Age is ${age}.  Food is ${favoriteFood}`)
}

printUser(personOne)
 */








/* 

class Movie {
    constructor(title, princess, yearReleased){

    
    this.title= title;
    this.artist= princess;
    this.yearReleased = yearReleased;
}

calculateAge (){
    return (new Date().getFullYear() - this.yearReleased); 
}
}



class UI {
    addMovie(e) {
        if (userTitle.value || userPrincess|| useryearReleased === ''){
            alert ('Error: MIssing Info')
        } else {

                let html = 
                let newHtml = html.replace ('') */








        


/* function eventListeners(){
    form.addEventListener('submit', displayMovie);
    display.addEventListener('click', removeMovie);
    /* form.addEventListener('submit', function(){
       console.log('test');
   });  */
/* }
eventListeners();

function displayDisney(e) {

const form = document.querySelector('#movie-form'); 
const userAlias = document.querySelector('#title');
const userPowers = document.querySelector('#princess');
const useryearReleased = document.querySelector('#yearReleased'); 
const display = document.querySelector('.display'); 
   
let html = '<div class="display-disney"><div class="display-title">%title%</div><div class="display-princess">%powers%</div><div class="display-name">%name%</div><div class="first-appearance">%years%</div><div class="display-image"><img src="%url%" alt=""></div><div class="remove-avenger"><p class="remove-avenger">Remove Avenger &#10006; </p></div></div>';

    let newHtml = html.replace('%title%', userTitle.value);
    newHtml = newHtml.replace('%powers%', userPowers.value);
    newHtml = newHtml.replace('%name%', userFullName.value);
    newHtml = newHtml.replace('%years%', userFirstAppearance.value);
    newHtml = newHtml.replace('%url%', userImage.value);
    display.insertAdjacentHTML('beforeend', newHtml); */
    //console.log('is the vebnt firing?');
 /*    e.preventDefault();

}

function removeAvenger(e) {
    if(e.target.parentElement.classList.contains('remove-avenger')){ */
        //e.target.parentElement.parentElement.remove();
 /*        console.log(e.target.parentElement);
    }
}


doc .get elemtbyid

<ins>const new alnum = new Album(title,princes</ins>

const ui = new UI();

ui.addAlbumToList(album);
ui.clearFields();
e.preventDefault(); */ 

// /* const second = () => {
//     setTimeout(() => {
//         console.log('Async Hey there');
//     },2000);
    
// }
// const first = () => {
//     console.log('hey there');
//     second();
//     console.log('The ends');
// }

// first (); */
/* 

function getPkmn(){
    fetch ('https://pokeapi.co/api/v2/pokemon/ditto/')
    .then(result=> {
        return result.json()
    }).then(data => console.log(data.sprites));
   
}
getPkmn();
 */

 // class notes
/*  async function getPkmn(){
    await fetch ('https://pokeapi.co/api/v2/pokemon/ditto/');
    try {
            const result = await fetch('https://pokeapi.co/api/v2/pokemon/ditto/')
            const data = await result.json;
            console.log(data);

    }catch (err){
        console.log(err);
    }

} 
getPkmn(); */

async function go() {
    const p1 = fetch(''); 
    const p2 = fetch ('').then(r => r.json()); //await waits for the one previous 
    const res = Promise.all;;(p1, p2); 
    console.log(res); 
    const dataPromises = res.map(r => r.json()); 
}

go(); 

async function getData() {

}

getData['wesbo', 'stolinski']; 

// async function go() {
        //     const p1 = fetch('https://api.github.com/users/wesbos')
        //     const p2 = fetch('https://api.github.com/users/stolinski')
        //     // Wait for btoh of them to come back
        //     const res = await  Promise.all([p1,p2]);
        //     const dataPromise = res.map(r => r.json());
        //     const wesAndScott = await Promise.all(dataPromises);
        //     console.log(wesAndScott);
        // }
        // go();
        
        async function getData(names) {
            const promises = names.map(name => fetch(`https://github.com/users/${name}`).then(r => r.json()));
            const [wes, scott] = await Promise.all(promises);
            console.log(people);
        }
        getData(['wesbos','stolinski','darcyclarke']);