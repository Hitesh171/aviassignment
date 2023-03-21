const reverse= (str1,str2) => {
    let rev1=[...str1].reverse();
    let rev2=[...str2].reverse();
    return rev1.join("")+rev2.join("");
};
let name1="Hitesh";
let name2="Singh";
console.log(reverse(name1,name2));