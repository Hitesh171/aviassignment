function first(){
    console.log(1);
}
function second(){
    console.log(2);
}
var button=document.getElementById("button");
var container=document.getElementById("container");
button.addEventListener("click",first);
container.addEventListener("click",second);
function first(event){
    event.stopPropogation()
    console.log(1);
}