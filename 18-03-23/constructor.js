function person(first,last,age,eye){
    this.firstname=first;
    this.lastname=last;
    this.age=age;
    this.eyecolor=eye;
}
const myage=new person("ripper","singh",23,"brown");
console.log(`my age is ${myage.age}.`);