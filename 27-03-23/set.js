let set1=new Set();
set1.add(1).add(2).add("hitesh");
console.log(set1);
let obj={
name:"hitesh",
lname:"pathania"
};
let set3=new Set(Object.values(obj));
console.log(set3);
let set4=new Set(Object.keys(obj));
console.log(set4);