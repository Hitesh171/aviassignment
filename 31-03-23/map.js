const arr=[1,2,3,4,1,2,3,5,7];
const map1=new Map();
for(let val of arr){
    if(map1[val]){
    
        map1[val]++;
        
    }
    else{
        map1[val]=1;
    }
}
console.log(map1);
for(let val in map1){
    
    if(map1[val]==1){
    
         console.log(val);
    }
}