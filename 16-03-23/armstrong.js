function isarmstrong(num){
    let sum=0;
    let n=num;
    while(n!=0){
        sum+=(n%10)**3;
        n=parseInt(n/10);
    }
    return (sum===num)?"yes":"no";
}
console.log(isarmstrong(371));
console.log(isarmstrong(321));