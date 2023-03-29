function area(r){
    return Math.PI*r*r;
}
function circum(r){
    return 2*Math.PI*r;
}
function dia(r){
    return 2*r;
}
function main(arr,logic){
    const output=[];
    for(var i=0;i<arr.length;i++){
        output.push(logic(arr[i]));
    }
    return output;
}
let arr=[1,2,3,4];
console.log(main(arr,area));
console.log(main(arr,circum));

console.log(main(arr,dia));