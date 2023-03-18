let cal={
    val:0,
    add(c){
        this.val+=c;
        return this;
    },
    sub(c){
        this.val-=c;
        return this;

    },
    mul(c){
        this.val*=c;
        return this;
    },
    div(c){
        this.val/=c;
        return this;
    }
};
cal.add(10).sub(5).mul(3).div(2);
console.log(cal.val);