const a={
    name : "Sakssham",

    city : "Ambala",
};

Object.keys(a).forEach((item)=>console.log(a[item]));

Object.keys(a).forEach((item,index)=>console.log(a[item]));

Object.keys(a).forEach((_,index)=>console.log(a[index]));

const {name,city} = a;
console.log(a);

console.log();

