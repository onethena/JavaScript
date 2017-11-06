
// Copying object using object.assign
var object1 = { a: 1, b:{c:2} };
var object2 = Object.assign({}, object1);
console.log(object1, object2);

object1.a = 3;
object2.a = 9;
console.log(object1, object2);

object1.b.c  = 9;               // Here deep copy is required
console.log(object1, object2);

// Deep copy
var object1 = { a: 1, b:{c:2} };
var object2 = JSON.parse(JSON.stringify(object1));

object1.b.c  = 9;             
console.log(object1, object2);