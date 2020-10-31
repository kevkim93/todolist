let tasks = [{checked: 0, content:"test"}];

$(document).ready(() => {
    $("#task-form").submit((event)=>{
        var task = { 
            checked: 0,
            content: $("input").first().val()
        };
        tasks.append(task);
        update()
    })
})

// function newEntry(toDoTask) {
//     var task = { checked: 0,
//                 content:toDoTask
//     }
//     tasks.append(task)
// }

$(document).ready(() => {
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
});

// initiate list buttons
var unchecked_box = '<button class="check-button"><i class="far fa-square"></i></button>'
var checked_box = '<button class="check-button"><i class="far fa-check-square"></i></button>'
var trash = '<button class="trash-button"><i class="far fa-trash-alt"></i></button>'

// Change checkbox values with buttons
$(document).ready(() => {
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
})

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
