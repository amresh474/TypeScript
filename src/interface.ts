function printLabel(labelObject: { label: string }) {
  console.log(labelObject.label);
}
let myObj = { size: 10, label: "Size 10 Object" };
printLabel(myObj);

interface LabeledValue {
  label: string;
}

function printLabels(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}

let myObjs = {
  size: 10,
  label: `Size 10 Object and this is same code above code  `
};
printLabels(myObjs);

interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): { color: string; area: number } {
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

interface Point {
  readonly x: number;
  readonly y: number;
}

let p1: Point = { x: 10, y: 20 };
// p1.x = 5; // error!

console.log(p1.x, ` and `, p1.y);

interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function(src, sub) {
  let result = src.search(sub);
  return result > -1;
  //   return "String";   // Type 'string' is not assignable to type 'boolean'.
};

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Fred"];

let myStr: string = myArray[0];
console.log(myStr);

interface NumberDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  // name: string;      // error, the type of 'name' is not a subtype of the indexer
  name: string;
}

interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArrays: ReadonlyStringArray = ["Alice", "Bob"];
// myArray[2] = "Mallory"; // error!
console.log(myArrays[0]);

// Class Types #
// Implementing an interface #

interface ClockInterface {
  currentTime: Date;
}

class Clock implements ClockInterface {
  currentTime: Date = new Date();

  constructor(h: number, m: number) {}
}

interface ClockInterfaces {
  currentTime: Date;
  setTime(d: Date): void;
}

class Clocks implements ClockInterfaces {
  currentTime: Date = new Date();
  setTime(d: Date) {
    this.currentTime = d;
  }
  constructor(h: number, m: number) {}
}

// Extending Interfaces #
interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

let square = {} as Square;
square.color = "blue";
square.sideLength = 10;

interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

let squares = {} as Square;
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;

console.log(square.color, `  `, square.penWidth, ` `, square.sideLength);
