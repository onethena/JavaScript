//"use strict"

//myVar = "Hello, World";  // use strict doesn't allow this
//var num  = "global";
let num = "global";
var test = function()
{
    //var num = "local";
    {let num = "local";}
    //console.log(num);
};
//console.log(num);
test();


var variableHoisting = function()
{
    //var y; //Hoisted to function scope like this
    for(var y = 0; y < 2; y++)
        //console.log(y);
        ;
    //console.log("Outside for loop", y);
};
variableHoisting();


var obj = {};
var obj1 = new Object();
var obj2 = [1, 2, 3];
//console.log(typeof(10), typeof("Hi"), typeof(true), typeof(obj), typeof(obj2));


var a = 1;
var b = 0;
//console.log(a|b, a&b, ~a);  //TODO
var restParams = function(...params)
{
    //console.log(params.length);
}
restParams(1, 2);
restParams(3, 4, 5, 6);


var constructedFunction = new Function("x", "y", "return x + y;");
//console.log(constructedFunction(10, 13));

(function()
{
    //console.log("I am calling myself");
})();


var fs = require('fs');
function readFilePromisified()
{
    return new Promise((reject, resolve) => {
        fs.readFile('/JavaScript/readThisFile.txt', 'utf8', function (err, data) {
        if (err) {
            //console.log(err);
            reject(err);
        }
        else
        {
            //console.log(data);
            resolve(data);
        }
        });
    })
};
//readFilePromisified().then((data) => {console.log(data)}).catch((err)=>{console.log(err)});

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }.bind(this)());
        //}()); without binding this.bar is undefined
    }
};
myObject.func();