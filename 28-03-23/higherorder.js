function printMessage(message){
    return function(){
        console.log(message);
    }
}
var printHello=printMessage("Hello");
printHello();
var printHi=printMessage("Hi");
printHi();