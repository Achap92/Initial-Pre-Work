/*Used a for loop to run same code multiple times. For loops are declared with
three optional expression separated by semicolons(;). The first portion is the
initialization which is executed once before the loop starts and defines and
setup the loop variable. The second portion is the condiditon statement that
will be evaulated at the begining of every loop iteration and will continue
as long as it evaluates to true. The last part is the final-expression that
is executed at the end of each loop iteration prior to the next condition
check and is typically used to increment or decrement the loop counter.*/
// Example
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var j = 1; j <= 5; j++) {
    myArray.push(j);
}
