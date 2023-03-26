var promise=new Promise(function(resolve,reject){
    reject('promise rejected')
})
promise.then(function(successMessage){
    console.log(successMessage);
},function(errorMessage){
    console.log(errorMessage);
})