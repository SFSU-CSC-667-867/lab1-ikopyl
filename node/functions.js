// Declaring with the function keyword
function hi() {
  console.log('Say Hello');
}
// try to avoid using function, use arrow functions instead

hi();

// arrow functions
const arrow = (test) => {
  console.log(test);
}

arrow('hi')

// for practice

// make an arrow function with no block body
const myArrow = (y) => y + 1;
const myArrow2 = (y) => {};

console.log(myArrow(252));
console.log(myArrow2(252));

// make a function that returns a function
const functionFactory = () => () => console.log('Hello, world!');

const a = functionFactory();
a();

// or so, albeit not recommended
const b = functionFactory()();


const anotherFunction = functionFactory;
anotherFunction()();

// good practice – declare your functions with const

let d = 7;
let c = d;
c++;
console.log(d);



