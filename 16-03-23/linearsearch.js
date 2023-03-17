function linearsearch(arr,val){
    let result={
        index:-1,
        iteration:0
    };
    for (let i=0;i<arr.length;i++){
        result.iterations++;
        if(arr[i]=== val){
            result.index=i;
            break;
        }
    }
    return result;
}
const arr=[1,4,7,2,9,8];
const val=2;
const searchresult=linearsearch(arr,val);
if(searchresult.index===-1){
    console.log(`${val} not found in the array.`);
}else{
    console.log(`${val} found at index ${searchresult.index} after  iterations.`);
}