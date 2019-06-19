/*Learned about a queue. A queue is an abstract data structure where items are
kept in order and new items can be added to the back of the queue and old items
are taken away from the front.*/
function nextInLine(arr, item) {
  // Your code here
  arr.push(item);
  var takeAway = arr.shift();
  return takeAway;  // Change this line
}

// Test Setup
var testArr = [1,2,3,4,5];

// Display Code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6)); // Modify this line to test
console.log("After: " + JSON.stringify(testArr));
