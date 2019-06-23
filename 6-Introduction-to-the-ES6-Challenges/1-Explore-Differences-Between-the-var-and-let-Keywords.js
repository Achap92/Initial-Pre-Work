/*Learned about the difference between var and let. Since declaring variables
using var, you can override variables with the same name. This can lead to
problems later on in larger code bases. using let will catch these errors and
using the 'use strict' will help catch common coding mistakes and unsafe actions*/
let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();
