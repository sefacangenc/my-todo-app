const inputBox = document.getElementById('input');
const listContainer = document.getElementById('list-container');

function addTask(){
    if(inputBox.value === ""){
        alert("Please Enter a Task")
    }
    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "X";
        li.appendChild(span);
    }
    inputBox.value = "";

}
listContainer.addEventListener('click', function(event){
    if(event.target.tagName === 'LI'){
        event.target.classList.toggle('checked');
    }
    else if(event.target.tagName === 'SPAN'){
        event.target.parentNode.remove();
    }
    
},false);
