function fun_one(callback){
    console.log("one");
    setTimeout(callback,1000);
}
function fun_two(callback){
    console.log("two");
    setTimeout(callback,1000);
}
function fun_three(){
    console.log("three");
}
fun_one(function(){
    fun_two(fun_three);
});