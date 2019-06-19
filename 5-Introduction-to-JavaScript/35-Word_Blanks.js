/*Created a "Mad Libs" style game using the string concatenator and provided
variables to create a string.*/
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  // Your code below this line
  var result = "";
  result += "My "+myAdjective+" "+myNoun+" "+myVerb+" extremly "+myAdverb+".";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("snake", "huge", "crawled", "fiercely");
