/*Learned to chain if statements using else if so that we can address the need
for multiple condition to be met.*/
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  }

 else if (val < 5) {
    return "Smaller than 5";
  }
  else {
    return "Between 5 and 10";
  }
}

// Change this value to test
testElseIf(7);
