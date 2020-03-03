function combine(
  input1: number | string,
  input2: number | string,
  showResultConversion: string
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    showResultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  // if (showResultConversion === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
  //  return result;
}

const combineAges = combine(43, 45, "as-number");
console.log(combineAges);

const combineNames = combine("amresh", "kumar", "as-text ");
console.log(combineNames);
