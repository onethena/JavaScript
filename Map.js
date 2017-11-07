var map = new Map();
map.set("Monday", 6);
map.set("Tuesday", 7);
map.set("Wednesday", 8);
map.set("Thursday", 9);

// console.log(map)
// console.log(map.entries());
// console.log(map.entries().next().value);
// console.log(map.keys());
// console.log(map.values());

var array = Array.from(map);
//console.log(array);


for(value of map.values())
{
  //console.log(value);
}
//console.log(map.has("Monday"));

map.delete("Wednesday");    //You can delete using keys only
// /console.log(map);

//console.log(map.get("Monday"));

map.clear();

//console.log(map);