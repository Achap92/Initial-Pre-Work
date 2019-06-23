/*Learned to parse a string to an integer using parseInt() with a radix that
is an integer between 2 and 36 that specifies the base of the number.*/
function convertToInteger(str) {
  var i = parseInt(str, 2);
  return i;
}

convertToInteger("10011");
