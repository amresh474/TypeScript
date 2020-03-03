"use strict";
function printLabel(labelObject) {
    console.log(labelObject.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);
function printLabels(labeledObj) {
    console.log(labeledObj.label);
}
let myObjs = {
    size: 10,
    label: `Size 10 Object and this is same code above code  `
};
printLabels(myObjs);
function createSquare(config) {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
        console.log(`Color------`, newSquare.color);
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
        console.log(`width |||||| `, newSquare.area);
    }
    return newSquare;
}
let mySquare = createSquare({ color: "black" });
console.log(mySquare);
let p1 = { x: 10, y: 20 };
// p1.x = 5; // error!
console.log(p1.x, ` and `, p1.y);
let mySearch;
mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
    //   return "String";   // Type 'string' is not assignable to type 'boolean'.
};
let myArray;
myArray = ["Bob", "Fred"];
let myStr = myArray[0];
console.log(myStr);
let myArrays = ["Alice", "Bob"];
// myArray[2] = "Mallory"; // error!
console.log(myArrays[0]);
class Clock {
    constructor(h, m) {
        this.currentTime = new Date();
    }
}
class Clocks {
    constructor(h, m) {
        this.currentTime = new Date();
    }
    setTime(d) {
        this.currentTime = d;
    }
}
let square = {};
square.color = "blue";
square.sideLength = 10;
let squares = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
console.log(square.color, `  `, square.penWidth, ` `, square.sideLength);
//# sourceMappingURL=interface.js.map