function countevenandoddnumbers(arr){
    let evencount=0;
    let oddcount=0;
    for(let num of arr){
        if(num%2 ===0)
        {
            evencount++;

        }
        else{
            oddcount++;
        }
    }
    return {
        evencount:evencount,
        oddcount:oddcount
    };
}
const numbers=[3,6,8,7,13,98,76];
const counts=countevenandoddnumbers(numbers);
console.log(`number of even numbers:${counts.evencount}`);
console.log(`number of odd numbers:${counts.oddcount}`);