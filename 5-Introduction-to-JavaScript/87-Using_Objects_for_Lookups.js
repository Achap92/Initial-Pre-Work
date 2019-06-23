/*Learned to lookup using objects. Objects can be seen as key/value storage. When
you have tabular data you can use an object to lookup values rather than using
a switch statement or if/else chain. This is useful when you know that input
data is limited to a certain range.*/
// Setup
function phoneticLookup(val) {
  var result = "";

  // Only change code below this line
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  };

result = lookup[val];

  // Only change code above this line
  return result;
}

// Change this value to test
phoneticLookup("echo");
