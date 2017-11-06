
// Copying object using object.assign
var object1 = { a: 1, b:{c:2} };
var object2 = Object.assign({}, object1);
//console.log(object1, object2);

object1.a = 3;
object2.a = 9;
//console.log(object1, object2);

object1.b.c  = 9;               // Here deep copy is required
//console.log(object1, object2);

// Deep copy
var object1 = { a: 1, b:{c:2} };
var object2 = JSON.parse(JSON.stringify(object1));

object1.b.c  = 9;             
//console.log(object1, object2);

Object.freeze(object2);
object2.a = 0;              //does not throw error, but property is not modified
//console.log(object2);

//console.log(Object.keys(object1));


// Inheriting from multiple base classes using Object.assign
function BaseClass1(name)
{
    this.name = name;
};
BaseClass1.prototype.getName = function()
{
    return this.name;
};
function BaseClass2(age)
{
    this.age = age;
};
BaseClass2.prototype.getAge = function()
{
    return this.age;
};
function ChildClass(...args)
{
    BaseClass1.call(this, args[0]);
    BaseClass2.call(this, args[1]);
    this.property = args[2];
};
ChildClass.prototype = Object.create(BaseClass1.prototype);
Object.assign(ChildClass.prototype, BaseClass2.prototype);
ChildClass.prototype.constructor = ChildClass;
const object = new ChildClass("Vandana", 25, "Software Engineer");
// console.log(object);
// console.log(object.getAge());
console.log(object.toString());

