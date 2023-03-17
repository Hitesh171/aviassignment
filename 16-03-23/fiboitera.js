function fibonacci(n){
    let fibseries=[];
    if(n===0){
        return [0];
    }
    else if (n===1){
        return [0,1];
    }
    else{
        fibseries=[0,1];
        for(let i=2;i<=n;i++){
            let nextfib=fibseries[i-1]+fibseries[i-2];
            fibseries[i]=nextfib;
        }
        return fibseries
    }
}
console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(5));
console.log(fibonacci(10));