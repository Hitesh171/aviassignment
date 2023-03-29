const logger=(message)=>console.log(message);
function loggerDecorator(logger){
    return function(message){
        logger.call(this,message)
        console.log("message logged at:",new Date().toLocaleString());
    }
}
const decoratedLogger=loggerDecorator(logger);
logger("Hitesh logged in:logger");
decoratedLogger("Hitesh logged in:decoratedLogger");