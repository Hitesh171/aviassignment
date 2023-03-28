function* fib(n){
    let a=0;
    let b=1;
    for(let i=0;i<n;i++){
        yield a;
        [a,b]=[b,a+b];
        
    }
    
}
let it=fib(5);
    console.log(it.next());