function fibonacci(n) {
    if (n===0){
        return [0];
    }else if (n===1){
        return [0,1];
    }else {
        let fibseries=fibonacci(n-1);
        fibseries[n]=fibseries[n-1]+fibseries[n-2];
        return fibseries;
    
    }
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(5));
console.log(fibonacci(10));