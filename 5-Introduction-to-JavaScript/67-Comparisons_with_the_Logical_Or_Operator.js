/*Learned to make two comparisons using the logical or operator (||).
This will return true even if only one side of the operand is true.*/
function testLogicalOr(val) {
  // Only change code below this line

  if (val > 20 || val < 10) {
    return "Outside";
  }

  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(11);
