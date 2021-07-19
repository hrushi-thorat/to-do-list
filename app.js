const todoInput=document.querySelector(".input")
const todobutton=document.querySelector(".button")
const todolist=document.querySelector(".list")

// add event listner

todobutton.addEventListener("click", addList);
todolist.addEventListener("click",deleteCheck);

// function to create event listner
// add div 
function addList(e){
e.preventDefault();
const toDoDiv=document.createElement('div');
toDoDiv.classList.add('todo');
// add list li
const item=document.createElement("li")
item.innerText=todoInput.value;
item.classList.add("list-style")
toDoDiv.appendChild(item);
// add check button
const checked=document.createElement("button");
checked.innerHTML="<i class='bx bx-check-circle' ></i>"
checked.classList.add("check-btn");
toDoDiv.appendChild(checked);
// add delete button
const remove=document.createElement("button");
remove.innerHTML="<i class='bx bx-trash' ></i>"
remove.classList.add("remove-btn");
toDoDiv.appendChild(remove);

todolist.appendChild(toDoDiv);
todoInput.value="";
}

function deleteCheck(e){
    const item=e.target;
     if(item.classList[0]==="remove-btn"){
         const del=item.parentElement;
         del.classList.add("fall");
         del.addEventListener("transitionend",function(){
             del.remove();
         })
         
     }
     if(item.classList[0]==="check-btn"){
         const che=item.parentElement;
         che.classList.toggle("check");
         che.checked();
     }
}



