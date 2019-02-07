const promiseExample = () => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve('Hello') }, 3000);
  });
};

promiseExample()
  .then((res) => res + ' World')
  .then((res) => console.log(res))
  // .then((res) => console.log(y))
  .catch(() => console.log("NullPointerException: I am an error :("));


console.log('hi');


/** promises are very similar to callbacks. 
 * You call some sort of a function that returns a promise – 
 * that promise that the code will run some time in the future */