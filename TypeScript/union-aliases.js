function add(input1, input2) {
    return input1 + input2;
}
function printResult(result) {
    console.log("Result " + result);
}
printResult(add(45, 78));
console.log(printResult(add(45, 78)));
function printResults(result) {
    console.log("Result " + result);
    return;
}
console.log(printResults(add(45, 78)));
var combines;
combines = add;
console.log(combines(5, 8));
// combines = 5;
console.log(combines(5, 8));
function addAndHandle(n1, n2, cb) {
    var Result = n1 + n2;
    cb(Result);
}
addAndHandle(10, 20, function (Result) {
    console.log(Result);
});
