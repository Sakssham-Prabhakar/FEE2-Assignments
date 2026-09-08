todo = [];
const todocontiner = document.getElementById("todo")[0];
const inputtask = document.createElement("input");
inputtask.type="text";
inputtask.placeholder="enter task...";
const btn = document.createElement("button");
btn.textContent = "Add";
console.log(todocontiner);
todocontiner.append(inputtask,btn);

function addtodo(){
    const task = inputtask.value;
    todo.unshift(task);
    inputtask.value="";
    console.log(todo);
    rendertask();
}

function rendertask(task){
    
}

btn.addEventListener("click",addtodo);