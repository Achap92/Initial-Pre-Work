/*Learned to override a global variable by using the same name as the global
variable inside a function creating a local variable. Local variables take
precedence over global variables.*/
// Setup
var outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line

  var outerWear = "sweater";

  // Only change code above this line
  return outerWear;
}

myOutfit();
