function makeRangeIterator(start=0,end=infinity,step=1){
    let nextIndex=start;
    let iterationCount=0;
    const rangeIterator={
        next(){
            let result;
            if(nextIndex<end){
                result={value:nextIndex,done:false};
                nextIndex+=step;
                iterationCount++;
                return result;
            }
            return {value:iterationCount,done:true};
        },
    };
    return rangeIterator;
}
const it=makeRangeIterator(1,10,2);
let result=it.next();
while(!result.done){
    console.log(result.value);
    result=it.next();
}
console.log("iterated over sequence of size",result.value);