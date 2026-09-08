(function(){
const todos=[];
const todocontiner = document.getElementById("todo");
// console.log(todocontiner);
const todoinput = document.createElement("input");

todoinput.placeholder = "enter task..."
const addbtn = document.createElement("button");
addbtn.textContent="ADD";
const todolist=document.createElement("div");
todocontiner.append(todoinput,addbtn,todolist);

// function rendertask(task){
//     const todoitem=document.createElement("div");

//     const p = document.createElement("p");
//     p.textContent=task;
//     const deletebtn = document.createElement("button");
//     deletebtn.textContent="delete";

//     deletebtn.addEventListener("click",function(){
//         const index = todos.indexOf(task);
//         todos.splice(index,1);
//         todoitem.remove();
//     });
//     todoitem.append(p,deletebtn);
//     todolist.prepend(p);
// }


function rendertask(task){
    const todoitem = document.createElement("div");
    todoitem.style.border="2px solid red";
    todoitem.style.margin = "10px";

    const p = document.createElement("p");
    p.textContent = task;

    const deletebtn = document.createElement("button");
    deletebtn.textContent = "delete";


    const editbtn = document.createElement("button");
    editbtn.textContent="Edit";

    editbtn.addEventListener("click",function(){
        const editInput = document.createElement("input");
        editInput.value=task;
        const savebtn = document.createElement("button");
        savebtn.textContent="Save";
        todoitem.prepend(editInput,savebtn);
        editInput.focus();
        savebtn.addEventListener("click",function(){
            const updatedtask = editInput.value;
            if(!updatedtask){
                return;
            }
            p.textContent=updatedtask;
            const index = todos.indexOf(task);
            todos[index] = updatedtask;
            editInput.remove();
            savebtn.remove();
            console.log(todos);
        })
    })

    deletebtn.addEventListener("click", function(){
        const index = todos.indexOf(task);
        todos.splice(index, 1);
        todoitem.remove();
    });

    todoitem.append(p, deletebtn, editbtn);
    todolist.prepend(todoitem);
}
// Add Edit button and CSS

function addtodo(){
     const task = todoinput.value;
     if(!task){
        return;
     }
     todos.unshift(task);
     rendertask(task);
    todoinput.value="";  //input field
    todoinput.focus();
}

addbtn.addEventListener("click",addtodo); // function refrence is given like addtodo only, not to be called like addtodo();
// todoinput.addEventListener("keydown",function(e)){
//     // console.log(e);
//     if(e.key==="Enter"){

//     }
// }
})();