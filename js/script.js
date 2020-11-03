
var tasks = [];

$(document).ready(() => {
    // Updating task list when a new entry comes in
    
    $("#submit-button").click((event)=>{
        event.preventDefault();
        const task = { 
            checked: 0,
            content: $("input").first().val()
        };
        tasks.push(task);
        $("#task-form")[0].reset();
        update(tasks)
    })

    // These don't seem to get triggered so I moved onto onclick attributes in button tags

    // // Deleting a task from the list when trash button is pushed
    // // document.getElementsByClassName('trash-button').addEventListener('click', (event)=> {
    // $(".trash-button").on("click", () => {
    //     alert('triggered')
    // // $("#trash-button").on("click", (event) => {
    //     tasks = $.grep(tasks,(el) => {
    //         return el.content != this.closest("li").html();
    //         // event.target.closest("li").html()
    //     })

    // });

    // // Change checkbox values with buttons
    // $(".check-button").on("click", () => {
    //     alert('triggered')
    //     tasks.forEach(task => {
    //     if(this.html() === task.content) {
    //         if(task.checked === 1){
    //             task.checked = 0
    //         } else if(task.checked === 0){
    //             task.checked = 1
    //         }
    //     }})
    //     update(tasks)
    // })


});

// Initiate list buttons
var unchecked_box = '<button class="check-button" type="button" onClick="doneTask()"><i class="far fa-square" id="check-button-id"></i></button>'
var checked_box = '<button class="check-button" type="button" onClick="doneTask()"><i class="far fa-check-square" id="check-button-id"></i></button>'
var trash = '<button class="trash-button" type="button" onClick="deleteTask()"><i class="far fa-trash-alt" id="trash-button-id"></i></button>'

// updating list function
function update(array) {
    document.getElementById('task-list').innerHTML = '';
    var frag = document.createDocumentFragment();
    array.forEach((task,index) => {
        var li = document.createElement('li');
        li.setAttribute('id',('list-item'+index))
        
        if (task.checked === 0){
            li.innerHTML = unchecked_box+'<span>'+task.content+'</span>'+trash;
            // str+= `<li class="list-item" id="${'list-item'+index}">`+unchecked_box+task.content+trash+'</li>';
        } else if (task.checked === 1){
            li.innerHTML = checked_box+'<span>'+task.content+'</span>'+trash;
            // str+= `<li class="list-item" id="${'list-item'+index}">`+checked_box+task.content+trash+'</li>';
        }
        // alert(li.textContent);
        // alert(array)
        frag.appendChild(li);
    }); 
    document.getElementById('task-list').appendChild(frag)
}


// delete task in array tasks if the content matches the text next to the delete-button. 
function deleteTask() {
    // alert($(this).closest("li").prop('#text'))
    
    tasks = $.grep(tasks,(el) => {
        // alert(el.content)
        var textCont = $(this).siblings('span').text();
        alert(textCont)
        return el.content != $(this).closest("li").html();
        // event.target.closest("li").html()
    })
    update(tasks)
}

// updating task.checked values for checkbox icons
// todo: get id of the list, $(listID).text() == task.content 
function doneTask() {
    var listID = $(this).closest("li").prop('id') 
    // var listID = $(this).siblings("span").text() 
    alert(listID)
    tasks.forEach(task => {
        // alert(task.checked)
        if(this.closest("#list-item").text() == task.content) {
            if(task.checked === 1){
                task.checked = 0
            } else if(task.checked === 0){
                task.checked = 1
            }
    }})
    update(tasks)
}