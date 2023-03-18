const apples={name:'apples'};
const bananas={name:'bananas'};
const oranges={name:'oranges'};
const fruits=new Map();
fruits.set(apples,500);
fruits.set(bananas,300);
fruits.set(oranges,200);
console.log(fruits.get(apples));
console.log(fruits.get(oranges));