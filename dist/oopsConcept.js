"use strict";
class Greeter {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter("world");
console.log(`Greeting !!!`, greeter);
// Inheritance #
class Animal {
    move(distanceInMeters = 0) {
        console.log(`Animal moved ${distanceInMeters}m.`);
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof! Woof!");
    }
}
const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();
class Animals {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
class Snake extends Animal {
    constructor(name) {
        super();
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}
class Horse extends Animal {
    constructor(name) {
        super();
    }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}
let sam = new Snake("Sammy the Python");
let tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
// console.log(sam.move());
// console.log(tom.move(45));
class Animal1 {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
let animal = new Animal1("amresh kumar");
console.log(animal);
console.log(animal.move(34));
class Animal2 {
    constructor(theName) {
        this.name = theName;
    }
}
// new Animal("Cat").name; // Error: 'name' is private;
// Understanding TypeScript’s private #
class Animal4 {
    constructor(theName) {
        this.name = theName;
    }
}
class Rhino extends Animal {
    constructor() {
        super();
    }
}
class Employee {
    constructor(theName) {
        this.name = theName;
    }
}
let animal4 = new Animal4("Goat");
let rhino = new Rhino();
let employees = new Employee("Bob");
// animal4 = rhino;
// anima6 = employee;
// Understanding protected #
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Employees extends Person {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howard = new Employees("Amresh Kumar ", "Software Engineeer");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error
class Persons {
    constructor(theName) {
        this.name = theName;
    }
}
// Employee can extend Person
class Employee1 extends Persons {
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}
let howards = new Employee1("Howard", "Sales");
// let john = new Person("John"); // Error: The 'Person' constructor is protected
// Accessors #
const fullNameMaxLength = 10;
class Employee3 {
    constructor() {
        this.fullNames = "";
    }
    get fullName() {
        return this.fullNames;
    }
    set fullName(newName) {
        if (newName && newName.length > fullNameMaxLength) {
            throw new Error("fullName has a max length of " + fullNameMaxLength);
        }
        this.fullNames = newName;
    }
}
let employee = new Employee3();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
// Static Properties #
class Grid {
    constructor(scale) {
        this.scale = scale;
    }
    calculateDistanceFromOrigin(point) {
        let xDist = point.x - Grid.origin.x;
        let yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}
Grid.origin = { x: 0, y: 0 };
let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
// Abstract Classes #
class Man {
    move() {
        console.log("roaming the earth...");
    }
}
class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log("Department name: " + this.name);
    }
}
class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // constructors in derived classes must call super()
    }
    printMeeting() {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports() {
        console.log("Generating accounting reports...");
    }
}
let department; // ok to create a reference to an abstract type
// department = new Department();  // error: cannot create an instance of an abstract class
department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
department.printName();
department.printMeeting();
// department.generateReports(); // error: method doesn't exist on declared abstract type
// Advanced Techniques #
// Constructor functions #
class Greeters {
    constructor(message) {
        this.greeting = message;
    }
    greet() {
        return " Hello ," + this.greeting;
    }
}
let greeters;
greeters = new Greeters("World");
console.log(greeters.greet());
// let Greeter = (function () {
//   function Greeter(message) {
//       this.greeting = message;
//   }
//   Greeter.prototype.greet = function () {
//       return "Hello, " + this.greeting;
//   };
//   return Greeter;
// })();
// let greeter;
// greeter = new Greeter("world");
// console.log(greeter.greet()); // "Hello, world"
class Product {
    constructor() {
        this.productItem = "";
    }
    greet() {
        if (this.productItem) {
            return "Hello, " + this.productItem;
        }
        else {
            return Product.standardProduct;
        }
    }
}
Product.standardProduct = "Hello, there";
let product;
product = new Product();
console.log(product.greet());
let productMarker = Product;
productMarker.standardProduct = "hello amresh kumar .he is good boy ";
let productNo = new productMarker();
console.log(productNo.greet());
// Using a class as an interface #
class Points {
    constructor() {
        this.A = 0;
        this.B = 0;
    }
}
let point3d = { A: 1, B: 2, z: 3 };
//# sourceMappingURL=oopsConcept.js.map