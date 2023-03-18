const factorial=function fact(n){
    return n<2?1:n*fact(n-1);
};
console.log(factorial(3));
console.log(factorial(5));