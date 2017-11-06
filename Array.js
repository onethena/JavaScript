var myArray = new Array(10);
myArray.fill(0);                // Initializes/Sets all values to 0
//console.log(myArray);

myArray.pop();
//console.log(myArray);

myArray.push(9);
//console.log(myArray);

myArray.reverse();
//console.log(myArray);

var a = myArray.shift();
//console.log(a, myArray);

myArray.push(5, 1, 9);
myArray.sort();
//console.log(myArray);

myArray.splice(0, 8);
//console.log(myArray);

myArray.unshift(-1, -2);
//console.log(myArray);

var newArray = ['a', 'b', 'c'];
//console.log(myArray.concat(newArray));

//console.log(myArray.includes(0));

myArray.push(-2);
//console.log(myArray.lastIndexOf(-2));

//console.log(myArray.slice(0, 2));


myArray.unshift('a', 'x', 'r');
var iter = myArray.entries();
for(let e of iter)
{
    //console.log(e);
}

//console.log(myArray.every(isNaN));

//console.log(myArray.filter(isNaN));

// console.log(myArray.find(isNaN));
// console.log(myArray.findIndex(isNaN));

myArray.splice(0, 3);
const sum = myArray.reduce(function(sum, value)
{
    return sum + value;
}, 0)
//console.log(newArray);


var isTrue = myArray.some(function(value)
{
    return value > 10;
});
//console.log(isTrue);

myArray.forEach(function (value)
{
    console.log(++value);
});
