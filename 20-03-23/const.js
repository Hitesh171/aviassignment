let a=10;
function getno(){
    a=20;
    console.log("inner =",a);
}
console.log("outer=",a);
getno(a);


let a=10;
function getno(){
    a=20;
    console.log("inner=",a);
}
getno(a);
console.log("outer=",a);