/*When you store value with the assignment operator (=) everything to the right
is processed first before the value is assigned. Using this we can take a return
value from a function and assign it to a variable.*/
// Example
var changed = 0;

function change(num) {
  return (num + 5) / 3;
}

changed = change(10);

// Setup
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line

processed = processArg(7);
