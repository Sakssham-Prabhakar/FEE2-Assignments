function sum(a,b){
    return a+b;
    //console.log("Hi");/

}

console.log(sum(2,3));

const a = function sum(a,b){
    return a+b;
}

const b = (a,b) =>a+b;
// by using curly braces using return statement is required
// const b = (a,b) => {return a+b};
// const a => b =>b; in it paranthese b / (b) is not required due to only one parameter

const c =()=> ({a:1,b:2})
console.log(c());

function ar(){
    console.log("\n")
    console.log(arguments);
    console.log(arguments[0]+arguments[1]);
}
ar(2,3,10);

const restOp = (...number)=>{
    console.log(number);
}

restOp(1,2,3,4,5,6);

ar = [1,2,3,4,5,6,7,8];
console.log(...ar);
console.log(Math.max(...ar));
const d = [...ar,7,8,9];
console.log(d);

// call back function
function e(){
    f();
}
function f(){ // f is behaving as a call back function
    console.log("Hello");
}
e(f);

console.log("\n")

// Lexical scope
// What is Lexical scope
function outer(){
    var a =3;

    function inner(){
        a++;
        console.log(a);
    }
    inner();
}
outer();
outer();

// what is closer (important)
// when inner function remembers the variables of outer scope and is able to access and upgrade is

// What are default parameters


// Arrays in JavaScript
arr = [1,2,3,4];
const g = new Array(2,3,4,5,6,7,8);
console.log(g)
console.log(g.at(-1));
for(item in arr){
    console.log(item);
}
//forEach
console.log("\n");
br = arr.map((item)=>item*item)
console.log(br)

console.log("\n");
br = arr.filter((item)=>item%2==0);
console.log(br)

const student = {
    key: "value",
    name: "Sakssham",
    age: "20",
    address: "Ambala",
    greet:function(){
        console.log("hello");
    }
}

console.log(student["name"]);
student.name ="name";
console.log(student.name);
console.log(student.greet());

const person = new Object();
person.name = "Name";

// this will not work in arrow
