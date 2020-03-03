var userInput;
userInput = 5;
userInput = "amresh";
console.log(userInput);
var userInput1;
userInput1 = 6;
userInput1 = "kumar";
var userName;
// if (typeof userName === "string") {
//   userName = userInput1;
// }
function genrateError(message, code) {
    throw { message: message, errorCode: code };
    while (true) {
        console.log("hello amresh kumar ! ");
    }
}
var result = genrateError("an error occured !", 500);
console.log(result);
