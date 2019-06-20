/*When using an if statement, there might be times when you want something to
fire when the condition is not met. This is where the else statment comes in, you
can fire off an alternate code block depending on if the condition is met or not.*/
function testElse(val) {
  var result = "";
  // Only change code below this line

  if (val > 5) {
    result = "Bigger than 5";
  }

  else {
    result = "5 or Smaller";
  }

  // Only change code above this line
  return result;
}

// Change this value to test
testElse(6);
