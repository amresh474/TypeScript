function add2(input1: number, input2: number) {
  return input1 + input2;
}

function printResult(result: number): void {
  console.log("Result " + result);
}
printResult(add2(45, 78));
console.log(printResult(add2(45, 78)));

function printResults(result: number): undefined {
  console.log("Result " + result);
  return;
}
console.log(printResults(add2(45, 78)));

let combines: (a: number, b: number) => {};

combines = add2;
console.log(combines(5, 8));
// combines = 5;
console.log(combines(5, 8));

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const Result = n1 + n2;
  cb(Result);
}

addAndHandle(10, 20, Result => {
  console.log(Result);
});
