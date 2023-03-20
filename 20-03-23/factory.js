function cPerson(firstName,lastName){
    return{
        firstName:firstName,
        lastName:lastName,
        getFullName(){
            return firstName+' '+lastName;
        }
    };
}
let person1=cPerson('Peter','Parker');
let person2=cPerson('John','Cena');
console.log(person1.getFullName());
console.log(person2.getFullName());