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
    hobbies: ['sport', 'reading', 'listeners'],
    role: [1, 'author']
};
person.role.push('admin');
// person.role[1]=10;
console.log(person);
console.log(person.role);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var Hobby = _a[_i];
    console.log(Hobby);
}
