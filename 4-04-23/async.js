function asychronous_operation_method(){
    let first_promise=new Promise((resolve,reject)=>resolve('Hello'));
    let second_promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("great");
        },1000);
    });

let combined_promise=Promise.all([first_promise,second_promise]);
return combined_promise;
}
async function display(){
    let data=await asychronous_operation_method();
    console.log(data);
}
display();