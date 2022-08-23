const content = document.getElementById("content");
const date = document.getElementById("date");
const addedBtn = document.getElementById("addedBtn");
const deletedBtn = document.getElementById("deletedBtn");
const list = document.getElementById("list");

const listContent = []

function render() {
    let htmlStr = ''
    listContent.forEach(function (item) {
        htmlStr = htmlStr + `
        <div class="item">
            <div>
                <p>Task：${item.content}</p>
                <p>Time：${item.date} ${item.time}<p>
            </div>
        </div>
        `
    })
    list.innerHTML = htmlStr
}

addedBtn.addEventListener('click', function() {
    
    if(content.value || date.value || time.value) {
        listContent.unshift({
            content: content.value,
            date: date.value,
            time: time.value
        })
        render()
        content.value = ''
        time.value = ''
        date.value = ''
    }
    
})

deletedBtn.addEventListener('click', function() {
    listContent.pop()
    render()
})
