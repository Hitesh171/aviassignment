function check(){
    return new Promise((resolve,reject)=>{
        if(Math.random()>0.5){
            resolve('arrived');
        }
        else{
            reject(new Error('failed not arrived'));
        }
    });
}
check()
    .then((mail)=>{
        console.log(mail);
    })
    .catch((err)=>{
        console.log(err);
    })
    .finally(()=>{
        console.log('experiment complete');
    })
