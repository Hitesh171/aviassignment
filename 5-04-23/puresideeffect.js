const impureDouble=(x)=>{
    console.log('doubling',x);
    return x*2;
};
const result=impureDouble(4);
console.log([result]);