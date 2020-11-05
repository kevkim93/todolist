let tasks = [];
// Updating task list when a new entry comes in
$(document).ready(() => {
    $("#submit-button").click((event)=>{
        event.preventDefault();
        const task = { 
            checked: 0,
            content: $("input").first().val()
        };
        tasks.push(task);
        $("#task-form")[0].reset();
        // alert($("input").first().val());
        update(tasks)
        // alert(tasks)
    })

// function newEntry(toDoTask) {
//     var task = { checked: 0,
//                 content:toDoTask
//     }
//     tasks.append(task)
// }
// Deleting a task from the list when trash button is pushed

	$(".trash-button").click(() => {
        tasks = tasks.filter((el) => {
            return el.content != this.innerHTML;
        _})
        update()
        // tasks.forEach(task => {
        //     if (this.innerHTML === task.content) {
        //         tasks.splice(i)
        //     }
    //     // })
    //     this.innerHTML === 
    // alert(this.innerHTML + " Clicked\nValue = " + $(this).attr("data-desc"));
  })



// Change checkbox values with buttons

    $(".check-button").click(() => {
        tasks.forEach(task => {
            if(this.innerHTML === task.content) {
                if(task.checked === 1){
                    task.checked = 0
                } else if(task.checked === 0){
                    task.checked = 1
                }
            }
        })
        update()
    })
});

// Initiate list buttons
var unchecked_box = '<button class="check-button"><i class="far fa-square"></i></button>'
var checked_box = '<button class="check-button"><i class="far fa-check-square"></i></button>'
var trash = '<button class="trash-button"><i class="far fa-trash-alt"></i></button>'

// updating list function
function update() {
    var str = '<ul>'
    tasks.forEach(task => {
        if (task.checked === 0){
            str+= '<li>'+unchecked_box+task[content]+trash+'</li>';
        } else if (task.checked === 1){
            str+= '<li>'+checked_box+task[content]+trash+'</li>';
        }
    }); 
    str += '</ul>';

    $("#task-list").innerHTML = str;
}



// $('#task-form').addEventListener('submit', (event) => {
    //     alert('thisworked')
    //     var task = { 
    //         checked: 0,
    //         content: $("input").first().val()
    //     };
    //     alert(task)
    //     tasks.append(task);
    //     update()
    // });
    // document.getElementById('submit-button').addEventListener('click', (event)=> {
    //     event.preventDefault();
    //     const task = { 
    //         checked: 0,
    //         content: $("input").first().val()
    //     };
    //     tasks.push(task);
    //     $("#task-form")[0].reset();
    //     // alert($("input").first().val());
    //     update(tasks)
    // })


    //     update(tasks)
    //     // tasks.forEach(task => {
    //     //     if (this.innerHTML === task.content) {
    //     //         tasks.splice(i)
    //     //     }
    // //     // })
    // //     this.innerHTML === 
    // // alert(this.innerHTML + " Clicked\nValue = " + $(this).attr("data-desc"));





    // str += '</ul>';
    // createElement(str);
    // var frag = document.createDocumentFragment();
    // var elem = document.createElement('div');
    // elem.innerHTML = str;

    // while (elem.childNodes[0]) {
    //     frag.appendChild(elem.childNodes[0]);
    // }


    // $("#task-list").html(str);
    // alert('updated'+array)