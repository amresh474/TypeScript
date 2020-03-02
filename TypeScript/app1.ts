// const person:object={
//     name:"amresh kumar ",
//     age:25,
//     id:1111111111111111,
// }
// console.log(person.name);

const person:{
    name: string;
    age:number;
    id:number;
    hobbies:String[];
    role:[number,string]
}={
    name:"amresh kumar ",
    age:25,
    id:1111111111111111,
    hobbies:['sport','reading','listeners'],
    role:[1,'author']
}
person.role.push('admin')
// person.role[1]=10;
console.log(person);
console.log(person.role);

for(const Hobby of person.hobbies){
    console.log(Hobby);
    
}