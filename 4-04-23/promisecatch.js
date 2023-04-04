const promise1=new Promise((resolve,reject)=>{
    throw new Error('UH=OH');
});
promise1.catch((error)=>{
    console.log(error);
});