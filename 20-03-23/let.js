let a=10;
function getno(){
    a=20;
    console.log("inner =",a);
}
console.log("outer=",a);
getno(a);

let b=10;
function get(){
    b=20;
    console.log("inner=",b);
}
getno();
console.log("outer=",b);