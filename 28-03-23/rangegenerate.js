function* makeRangeIterator(start=0,end=Infinity,step=1){
    let iterationCount=0;
    for(let i=start;i<end;i+=step){
        iterationCount++;
        yield i;
    }
    return iterationCount;
}
const it=makeRangeIterator(1,12,2);
let result=it.next();
while(!result.done){
    console.log(result.value);
    result=it.next();
}
console.log("iterated over sequence of size",result.value);