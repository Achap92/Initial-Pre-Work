/*Learned to add a default case for the switch statement. In the event that no
case is evaluated, adding a default statement will then allow the switch statement
to execute the default statement. This can be thought of as the final else statement
in an if/else chain.*/
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case "a":
    return "apple";
    break;

    case "b":
    return "bird";
    break;

    case "c":
    return "cat";
    break;

    default:
    return "stuff"
    break;
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff(1);
