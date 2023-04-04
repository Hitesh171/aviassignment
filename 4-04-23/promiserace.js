const promise1=new Promise((resolve,reject)=>{
    setTimeout(resolve,500,'hi');
});
const promise2=new Promise((resolve,reject)=>{
    setTimeout(resolve,100,'hello');
});
Promise.race([promise1,promise2]).then((value)=>{
    console.log(value);
});