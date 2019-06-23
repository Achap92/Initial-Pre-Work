/*Learned to test objects for properties. This is useful
to check if the property exists or not. We can use the
.hasOwnProperty() method of ojects to check if the object
has the given property name. This will return true or false
if the property is found or not.*/
// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
 if (myObj.hasOwnProperty(checkProp) == true) {
   return myObj[checkProp];
 } else {
   return "Not Found";
 }

}

// Test your code by modifying these values
checkObj("gift");
