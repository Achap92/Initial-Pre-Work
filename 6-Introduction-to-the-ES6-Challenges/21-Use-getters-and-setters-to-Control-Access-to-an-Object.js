/*Learned to use getters and setters to control access to an object. With this
we can (get) the value of an object's private variable to the user without the
user directly accessing the private variable and (set) the value of an object's
 private variable based on the value passed into the setter function.
 This change could involve calculations, or even overwriting the previous value
  completely.*/
  function makeClass() {
  "use strict";
  /* Alter code below this line */
 class Thermostat {
   constructor(Fahrenheit) {
     this.Fahrenheit = Fahrenheit;
   }
   get temperature(){
     return 5 / 9 * (this.Fahrenheit - 32);
   }
   set temperature(Celsius) {
     this.Fahrenheit = Celsius * 9.0 / 5 + 32;
   }
 }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
