let a =[45000,56000,23000,78000,57000,67000,46000,34000,35000,65000];
for(let x of a){
    console.log(x);
}
let b = a.map(val => val+5000);
console.log(b);
let c = a.reduce((tot,val) => tot+val);
console.log(c);
let d = a.filter(val => val>60000);
console.log(d[0]);
let e = a.filter(val => val>60000);
console.log(e);
