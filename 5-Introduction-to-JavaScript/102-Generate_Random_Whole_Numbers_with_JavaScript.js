/*Generated random whole numbers from 0-9 using Math.random to generate a random decimal
then multiplying that number by 10 and using Math.floor() function to round
the number down to the nearest number. Since Math.random() can never return a 1
using this knowledge we know that it is impossible to acutally get 10 so the
function only will return random whole numbers from 0 to 9.*/
var randomNumberBetween0and19 = Math.floor(Math.random() * 20);

function randomWholeNum() {

  // Only change code below this line.

  return Math.floor(Math.random() * 10);
}
