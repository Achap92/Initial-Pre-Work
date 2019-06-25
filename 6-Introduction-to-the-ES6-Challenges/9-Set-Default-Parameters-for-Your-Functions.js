/*Learned to add a default value when there are no parameters given when
computing a function with parameters.*/
const increment = (function(value) {
  "use strict";
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2)); // returns 7
console.log(increment(5)); // returns 6
