//let and var

const res = require("express/lib/response");

var a = 10;
if (true) {
    //if use var
    // var a = 100;
    //if use let
    let a = 100;
}

console.log(a);

//arrow function
let arr = [1, 2, 4, 6, 78];
arr.map(e => e * 2).forEach(e => console.log(e));

let add = (a, b) => a + b;
console.log(add(4, 5));

