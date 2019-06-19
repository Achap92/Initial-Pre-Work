/*Created a conditional if statement using the strict equality operator (===)
This operator does not do a type conversion and the value MUST be the exact
value specified in the conditional for it to return true.*/
// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict("7");
