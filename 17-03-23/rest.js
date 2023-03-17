function display(a,b,c){
    console.log(a,b,c);
}
function display_another(a,b,...c){
    console.log(a,b,c);
}
display(1,2,3,4,5,6,7);
display_another(1,2,3,4,5,6,7);