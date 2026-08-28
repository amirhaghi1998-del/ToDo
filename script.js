let taskInput= document.getElementById("taskInput");
let addBtn= document.getElementById("addBtn");
let taskList= document.getElementById("taskList");


function addTask(){
    let taskText = taskInput.value
 console.log(taskText);
 if(taskText===""){
    alert("Please write something.");
    return
 }  

const li=document.createElement("li");
const span=document.createElement("span");
span.className="task-text";
span.textContent=taskText;

const deleteBtn= document.createElement("button");
 deleteBtn.className="delete-btn";
 deleteBtn.textContent ="Delete";

li.appendChild(span);
li.appendChild(deleteBtn);


taskList.appendChild(li);

taskInput.value="";


deleteBtn.addEventListener("click",function(){
    taskList.removeChild(li)
})
}

addBtn.addEventListener("click",addTask);
    