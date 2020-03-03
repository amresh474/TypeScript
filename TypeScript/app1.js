// const person:object={
//     name:"amresh kumar ",
//     age:25,
//     id:1111111111111111,
// }
// console.log(person.name);
var person = {
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
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var Hobby = _a[_i];
    console.log(Hobby);
}
var ADMIN = 0;
var READ_ONLY = 1;
var AUTHOR = 2;
var boy = {
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
var girl = {
    name: "amresh",
    age: 45,
    id: 45635634,
    role: Role.ADMIN
};
if (girl.role === Role.ADMIN) {
    console.log("girl is admin ");
}
