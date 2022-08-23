const content = document.getElementById("content");
const note = document.getElementById("note");
const date = document.getElementById("date");
const addedBtn = document.getElementById("addedBtn");
const deletedBtn = document.getElementById("deletedBtn");
const list = document.getElementById("list");

const listContent = []
function push_data() {
    if(content.value || date.value || time.value || note.value) {
        listContent.unshift({
            content: content.value,
            date: date.value,
            note: note.value,
            time: time.value
        })
        render()
        content.value = ''
        note.value=''
        time.value = ''
        date.value = ''
    }
}
function render() {
    let htmlStr = ''
    listContent.forEach(function (item) {
        htmlStr = htmlStr + `
        <div class="item">
            <div class="item-content">
                <p>Task:${item.content}</p>
                <p>Note:${item.note}</p>
                <p>Time:${item.date} ${item.time}<p>
            </div>
        </div>
        `
    })
    list.innerHTML = htmlStr
}
content.addEventListener('keypress', function(e) {
    if(e.code == 'Enter') {
        push_data()
    }
})
note.addEventListener('keypress', function(e) {
    if(e.code == 'Enter') {
        push_data()
    }
})
date.addEventListener('keypress', function(e) {
    if(e.code == 'Enter') {
        push_data()
    }
})
time.addEventListener('keypress', function(e) {
    if(e.code == 'Enter') {
        push_data()
    }
})
addedBtn.addEventListener('click', function() {
    push_data()
})

deletedBtn.addEventListener('click', function() {
    listContent.pop()
    render()
})
