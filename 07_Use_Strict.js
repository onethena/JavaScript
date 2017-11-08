"use strict";

//a = 9;                    // Throws error

var a =  {};
Object.defineProperty(a, "color", {value : "red", configurable : false})
console.log(a.color);

//a.color = "blue";         // Throws error - cannot change non-configurable attribute

(function myFunction()
{
    this.value = 5;         // Throws error - this is not defined
})();