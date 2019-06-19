/*Created a conditional using an if statment. This tell JavaScript to execute
the code in the curly braces under certain conditions which are defined in the
parentheses. When the condition is true then the code in the curly braces will
execute and if the condition is not true then the code inside the braces will
not execute.*/
// Example
function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
}

// Setup
function trueOrFalse(wasThatTrue) {

  // Only change code below this line.

  if(wasThatTrue) {
      return "Yes, that was true";
  }
  return "No, that was false";

  // Only change code above this line.

}

// Change this value to test
trueOrFalse(false);
