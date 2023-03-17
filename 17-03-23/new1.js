let cartoon=function(name,character){
    this.name=name;
    this.chaacter=character;
    this.log=function(){
        console.log(this.name+'is a'+this.character)
    }
    }
let tom=new cartoon('tom','cat');
let jerry=new cartoon('jerry','mouse');
tom.log