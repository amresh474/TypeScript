"use strict";
function add2(input1, input2) {
    return input1 + input2;
}
function printResult(result) {
    console.log("Result " + result);
}
printResult(add2(45, 78));
console.log(printResult(add2(45, 78)));
function printResults(result) {
    console.log("Result " + result);
    return;
}
console.log(printResults(add2(45, 78)));
let combines;
combines = add2;
console.log(combines(5, 8));
// combines = 5;
console.log(combines(5, 8));
function addAndHandle(n1, n2, cb) {
    const Result = n1 + n2;
    cb(Result);
}
addAndHandle(10, 20, Result => {
    console.log(Result);
});
//# sourceMappingURL=union-aliases.js.map