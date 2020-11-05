
$(document).ready(() => {
    // Updating task list when a new entry comes in
    $("#submit-button").click((event)=>{
        event.preventDefault();
        if ($("input").first().val() == ''){
            alert('Must enter a task first')
        }
        else {
            const task = { 
                checked: 0,
                content: $("input").first().val(),
                idtask: Date.now()
            };
            update(task)
            $("#task-form")[0].reset(); 
        }
    })

    $("#task-list").on("click", ".trash-button", deleteTask)

    $("#task-list").on("click", ".check-button", doneTask)
});

// Initiate list buttons
var unchecked_box = '<button class="check-button" type="button"><i class="far fa-square" id="check-button-id"></i></button>'
var checked_box = '<button class="check-button" type="button"><i class="far fa-check-square" id="check-button-id"></i></button>'
var trash = '<button class="trash-button" type="button"><i class="far fa-trash-alt" id="trash-button-id"></i></button>'

// updating list function
function update(task) {
    var li = document.createElement('li');
    li.setAttribute('id',('list-item'+task.idtask))
    if (task.checked === 0){
        li.innerHTML = unchecked_box+`<span id="${task.idtask}">`+task.content+'</span>'+trash;
        li.setAttribute('class',(`checked${task.checked}`))
    } else if (task.checked === 1){
        li.innerHTML = checked_box+`<span id="${task.idtask}">`+task.content+'</span>'+trash;
        li.setAttribute('class',(`checked${task.checked}`))
    }
    document.getElementById('list').appendChild(li);
}

// delete task in array tasks if the content matches the text next to the delete-button. 
function deleteTask() {
    var id = this.parentElement.getAttribute('id');
    var listitem = document.getElementById(id);
    listitem.remove();
}

// updating task.checked values for checkbox icons
function doneTask() {
    let checked = this.parentElement.getAttribute('class').split('checked')[1]
    if (checked == 0) {
        this.parentElement.setAttribute('class','checked1');
        this.parentElement.innerHTML = this.parentElement.innerHTML.replace('<i class="far fa-square"', '<i class="far fa-check-square"')
    }
    
    if (checked == 1) {
        this.parentElement.setAttribute('class','checked0');
        this.parentElement.innerHTML = this.parentElement.innerHTML.replace('<i class="far fa-check-square"','<i class="far fa-square"')
    }
}