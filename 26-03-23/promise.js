var promise=new Promise(function(resolve,reject){
    const x="geeks";
    const y="goods"
    if(x===y){
        resolve();
    }else{
        reject();
    }
});
promise.
then(function(){
    console.log('success you are a geeks');

}).
catch(function(){
    console.log('some error has occurred');
});