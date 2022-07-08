const submitButton = document.getElementById("submit-button") //Bouton pour ajouter une tâche
const toDoContainer = document.getElementById("to-do-container") //Partie dans laquelle on ajoute les tâche
const taskInput = document.getElementById("input-text") //Barre de saisie des tâches


let taskWrapper = []

const submitText = submitButton.onclick = (e) => {
    e.preventDefault()

    if (!taskInput.value) {
        alert("entrer un text")
    } else {

        let objet = {
            name: taskInput.value,
            status: "To do",
            id : taskWrapper.length || 0
        }
        taskWrapper.push(objet)

        let display = ""

        taskWrapper.forEach((task) => {
            display += `

            <div class="task" id="paragraph-${task.id}">
                <input type="checkbox" class="checkbox" id="checkbox${task.id}">
                <div class="entered-text">
                    <p>${task.name}</p>
                    <button class="btn-pencil" id="btn-pencil" onclick="modify('select-${task.id}')">
                        <task.id class="fa-solid fa-pencil icon-pencil "></task.id>
                    </button>
                    <select name="select" class="select-list" id="select-${task.id}">
                        <option value="todo" class="select-todo">To do</option>
                        <option value="doing" class="select-doing">Doing</option>
                        <option value="edit" class="select-edit">Edit</option>
                    </select>
                    <button class="btn-x" id="${task.id}" onclick="removeTask('paragraph-${task.id}')"><i
                            class="fa-solid fa-xmark  icon-x"></i></button>
                </div>
            </div>
            `
        })
        document.querySelector("#list").innerHTML = display
        taskInput.value = ""
    }

}


// ici les fonction pour pencil et X

const modify = (id) => {
    let element = document.getElementById(id)
    if (element.style.display === "none") {
        element.style.display = "block"
    } else {
        element.style.display = "none"
    }
}


const removeTask = (deleteId) => {
    // let deleteButton = document.getElementsById(id)
    // deleteButton.parentElement.parentNode.remove(deleteButton)
    taskWrapper.splice(deleteId, 1)
    let display = ""
    taskWrapper.forEach((task) => {
            display += `

            <div class="task" id="paragraph-${task.id}">
                <input type="checkbox" class="checkbox" id="checkbox${task.id}">
                <div class="entered-text">
                    <p>${task.name}</p>
                    <button class="btn-pencil" id="btn-pencil" onclick="modify('select-${task.id}')">
                        <task.id class="fa-solid fa-pencil icon-pencil "></task.id>
                    </button>
                    <select name="select" class="select-list" id="select-${task.id}">
                        <option value="todo" class="select-todo">To do</option>
                        <option value="doing" class="select-doing">Doing</option>
                        <option value="edit" class="select-edit">Edit</option>
                    </select>
                    <button class="btn-x" id="task-${task.id}" onclick="removeTask('paragraph-${task.id}')"><i
                            class="fa-solid fa-xmark  icon-x"></i></button>
                </div>
            </div>
            `
        })
    console.log(taskWrapper)
    document.querySelector("#list").innerHTML = display

}







