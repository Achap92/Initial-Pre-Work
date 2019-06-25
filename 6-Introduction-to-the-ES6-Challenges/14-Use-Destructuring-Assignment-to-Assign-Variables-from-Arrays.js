/*Learned to use destructuring to assign variables from arrays. Using the spread
operator simply spread out the array to the variables and sometimes we might
want to pick and choose where we want the value to go and that is where
destructuring comes in handy.*/
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [a,b] = [b,a];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
