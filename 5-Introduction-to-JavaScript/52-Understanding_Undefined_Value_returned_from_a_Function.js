/*Learned about undefined values returned from a function. A function can include
a return statement but doesn't have to and in the case that the function does
not have a return statement, when you call the function it will process the
inner code but the returned value is undefined.*/
// Example
var sum = 0;
function addThree() {
  sum = sum + 3;
}

// Only change code below this line

function addFive() {
  sum += 5;
}

// Only change code above this line
var returnedValue = addFive();
