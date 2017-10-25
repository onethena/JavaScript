class Vehicle
{
    constructor(type, name){
        this.type = type;
        this._name = name;
    }
    set name(name){
        this._name = name;
    }
    get name()
    {
        return this._name;
    }
    getType()
    {
        return this.type;
    }
}


var myObject = new Vehicle("car", "Tesla");
// console.log(myObject.name);
// console.log(myObject.getType());
class Utils
{
    static getSpeed(distance, time)
    {
        return distance/time;
    }
}
// console.log(Utils.getSpeed(500, 5));


class Polygon
{
    constructor(length, breadth, height)
    {
        this.length = length;
        this.breadth = breadth;
        this.height = height;
    }
}
class Square extends Polygon
{
    constructor(side)
    {
        super(side, side, side);
    }

    getArea()
    {
        return this.length*this.length;
    }
}
var square = new Square(5);
// console.log(square.getArea());


function* randomNumber()
{
    yield Math.floor(Math.random()*10 + 1);
}
// console.log(randomNumber().next());
// console.log(randomNumber().next());


//hoisting is not applicable in case of let
//block scope
var myFunction = function()
{
    if(true)
    {
        var x = 10;
        let y = 20;
    }
    //console.log(x,y);   //y is  not defined
}
myFunction();


let map = new Map();
map.set("1", "One");
map.set("2", "Two");
map.forEach(function(value, key){/*console.log(value, key)*/});
// console.log(map.get("One"));  //undefined
// console.log(map.get("2"));
for(var[key,value] of map.entries())
{
   // console.log(key, value);
}