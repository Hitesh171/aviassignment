let getname=function(){
    console.log(this.name);
}
let user={
    name:"hitesh",
    address:"xyz"
};
getname.call(user);