let userInput: unknown;

userInput = 5;
userInput = "Mr. Amresh kumar";
console.log(userInput);

let userInput1: unknown;
userInput1 = 6;
userInput1 = "Mr. Amresh kumar";

let userName: string;
// if (typeof userName === "string") {
//   userName = userInput1;
// }

function genrateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
  //   while (true) {
  //     console.log("hello amresh kumar ! ");
  //   }
}

const result1 = genrateError("an error occured !", 500);
console.log(result1);
