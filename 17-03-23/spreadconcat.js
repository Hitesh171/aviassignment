function concatstr(arr){
    return [...arr,...arr];
}
console.log(concatstr([1,2,1]));