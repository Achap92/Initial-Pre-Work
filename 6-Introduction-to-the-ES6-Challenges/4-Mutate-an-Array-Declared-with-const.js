/*Mutated an array that was declared with the const keyword. When using const you
can't reassign the variable created but you can mutate the data inside.*/
const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  // change code above this line
}
editInPlace();
