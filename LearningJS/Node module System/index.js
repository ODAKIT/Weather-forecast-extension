console.log("Tan dep trai");

var Cat = require("./Cat");
var Mouse = require("./Mouse");


var miskey = new Mouse("black");
var jerry = new Mouse("Orange");

console.log(miskey);
console.log(jerry);

var Tom = new Cat();
Tom.eat(miskey);
console.log(Tom);

console.log(miskey);