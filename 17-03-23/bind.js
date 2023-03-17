let getname=function(hobby1,hobby2){
    console.log(this.name+'likes'+hobby1+','+hobby2);

}
let user={
    name:'tapas',
    address:'bangalore'
};
let hobbies=['swimming','blogging'];
let newfn=getname.bind(user,hobbies[0],hobbies[1]);
newfn();