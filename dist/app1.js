"use strict";
// const person:object={
//     name:"amresh kumar ",
//     age:25,
//     id:1111111111111111,
// }
// console.log(person.name);
const person = {
    name: "amresh kumar ",
    age: 25,
    id: 1111111111111111,
    hobbies: ["sport", "reading", "listeners"],
    role: [1, "author"]
};
person.role.push("admin");
// person.role[1]=10;
console.log(person);
console.log(person.role);
for (const Hobby of person.hobbies) {
    console.log(Hobby);
}
const ADMIN = 0;
const READ_ONLY = 1;
const AUTHOR = 2;
const boy = {
    name: "amresh",
    age: 45,
    id: 45635634,
    role: ADMIN
};
if (boy.role === ADMIN) {
    console.log("is admin ");
}
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const girl = {
    name: "amresh",
    age: 45,
    id: 45635634,
    role: Role.ADMIN
};
if (girl.role === Role.ADMIN) {
    console.log("girl is admin ");
}
//# sourceMappingURL=app1.js.map