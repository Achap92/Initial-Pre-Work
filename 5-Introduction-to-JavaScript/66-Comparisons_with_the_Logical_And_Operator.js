/*Learned to test more than one comparison using the logical and operator (&&).
this will return true only if the operands to the left and right are true.*/
function testLogicalAnd(val) {
  // Only change code below this line


    if (val <= 50 && val >= 25) {
      return "Yes";
    }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(34);
