/*Learned about global scope. Variables defined outside of a function are part of
the global scope meaning they can be seen everywhere in JavaScript code. Note
that variables that don't use the var keyword are automatically created in the
global scope which can lead to unintended errors. Best practice is to always
declare your variables with the var keyword.*/
// Declare your variable here
var myGlobal = 10;

function fun1() {
  // Assign 5 to oopsGlobal Here
  oopsGlobal = 5;
}

// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
