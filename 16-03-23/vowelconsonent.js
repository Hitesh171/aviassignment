function countvowelsandconsonents(str){
    const vowels='aeiouAEIOU';
    let vowelcount=0;
    let consonentcount=0;
    for(let char of str){
        if(vowels.includes(char)){
            vowelcount++;
        }else if(char.match(/[a-z]/i)){
            consonentcount++;
        }
        
    }

return {
    vowelcount:vowelcount,
    consonentcount:consonentcount
};
}
const sentence="how many vowels in a given sentence";
const counts=countvowelsandconsonents(sentence);
console.log(`number of vowels:${counts.vowelcount}`);
console.log(`number of consonents:${counts.consonentcount}`);

