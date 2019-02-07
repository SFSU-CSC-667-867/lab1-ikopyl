// Arrays in js

// arrays can be delared explicitly
const array = [9, 3, 4];


const arrayTest = [9, 3, 4];
arrayTest[5] = 9;
console.log(arrayTest);

// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(array[0]);

// change elements
array[1] = 'hello';

// for practice

// use forEach
array.forEach((n) => {
    console.log(n);
});

console.log('------------');
// use map
const newArray = arrayTest.map((i) => i + 1);

newArray.forEach((n) => {
    console.log(n);
});

// use pop
newArray.pop();
console.log(newArray);

newArray.pop();
newArray.pop();
console.log(newArray);

console.log('---- push: --------');

// use push
newArray.push(6);
console.log(newArray);

console.log('---- shift: --------');
// use shift
newArray.shift();
console.log(newArray);

// use unshift

// use filter