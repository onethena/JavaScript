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


//Inheritance in ES5
function ParentClass(length, breadth, height) 
{
    this.length = length;
    this.breadth = breadth;
    this.height = height;
};
ParentClass.prototype.getArea = function()
{
    return this.length*this.breadth;
};
ParentClass.prototype.getVolume = function()
{
    return this.length*this.breadth*this.height;
};
function ChildClass(side) {
    ParentClass.call(this, side, side, side);
};
ChildClass.prototype = Object.create(ParentClass.prototype);
ChildClass.prototype.constructor = ParentClass;
const o = new ChildClass(5);
console.log(o.getArea());
