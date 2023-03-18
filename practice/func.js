function myfunc(theobject){
    theobject.make="totyota";
}
const myvar={
    make:"honda",
    model:"accord",
    year:1998
};
const x=myvar.make;
myfunc(myvar);
console.log(x);

const y=myvar.make;
console.log(y);