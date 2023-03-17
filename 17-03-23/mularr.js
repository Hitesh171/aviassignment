function mul(n,...nums){
    let m_num=[];
    nums.forEach((val) => {
        m_num.push(n*val);
    });
    return m_num
}
let arrm=mul(2,4,1,5,3);
console.log(arrm);