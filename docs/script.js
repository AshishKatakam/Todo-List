const input=document.querySelector('input');
const addbtn=document.querySelector('.addtask > button');
addbtn.addEventListener('click', addList);
function addList(e){
    const todo=document.querySelector('.todo');
    const done=document.querySelector('.done');
    const newList=document.createElement('Li');
    const checkBtn=document.createElement('button');
    const delBtn=document.createElement('button');
    checkBtn.innerHTML='<i class="fas fa-check-circle"></i>';
    delBtn.innerHTML='<i class="fas fa-minus-circle"></i>'
    if(input.value!==""){
        newList.textContent=input.value;
        input.value="";
        todo.appendChild(newList);
        newList.appendChild(delBtn);
        newList.appendChild(checkBtn);
        checkBtn.addEventListener('click',function(){
            const parent=this.parentNode;
            parent.remove();
            done.appendChild(parent);
            checkBtn.style.display="none";
        });
        delBtn.addEventListener('click',function(){
            const parent=this.parentNode;
            parent.remove();
        });
    }
}