/*Learned about local scope in that variables declared inside a function are part
of the local scope of that function. Trying to use a variable that is local scope, in
another part of your code, will throw an undefined error.*/
function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "Hello World";
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope


// Now remove the console log line to pass the test
