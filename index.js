const submitButton = document.getElementById("submit-button") //Bouton pour ajouter une tâche
const toDoContainer = document.getElementById("to-do-container") //Partie dans laquelle on ajoute les tâche
const taskInput = document.getElementById("input-text") //Barre de saisie des tâches
const checkboxArea = document.getElementById('checkbox-1')
const valueButon = document.querySelectorAll(".value-btn")

console.log(valueButon);
let taskWrapper = []
let y = ""

const submitText = submitButton.onclick = (e) => {

    e.preventDefault()

    if (!taskInput.value) {
        alert("entrer un text")
    } else {

        let objet = {
            name: taskInput.value,
            status: "To do",
            value: y
        }
        taskWrapper.push(objet)

        let display = ""

        taskWrapper.forEach((task, i) => {

            display += `

            <div class="task" id="paragraph-${i}">
                <input type="checkbox" class="checkbox" id="checkbox">
                <div class="entered-text">
                    <p>${task.name}  </p><span class="span">${task.value}</span>
                    <button class="btn-pencil" id="btn-pencil" onclick="modify('select-${i}')">
                        <i class="fa-solid fa-pencil icon-pencil "></i>
                    </button>
                    <select name="select" class="select-list" id="select-${i}">
                        <option value="todo" class="select-todo">To do</option>
                        <option value="doing" class="select-doing">Doing</option>
                        <option value="edit" class="select-edit">Edit</option>
                    </select>
                    <button class="btn-x" onclick="removeTask('paragraph-${i}')"><i
                            class="fa-solid fa-xmark  icon-x"></i></button>
                </div>
            </div>
            `
            y = ""
        })


        document.querySelector("#list").innerHTML = display
        taskInput.value = ""

    }


}


const importence = (id) => {

    if (id === "value-0") {
        y = "0"
    } else if (id === "value-1") {
        y = "1"
    }
    else if (id === "value-2") {
        y = "2"
    } else if (id === "value-3") {
        y = "3"
    } else if (id === "value-4") {
        y = "4"
    } else if (id === "value-5") {
        y = "5"
    }

}









// checkbox -change status

const changeStatus = (element) => {
    if (element.checked) {

        taskWrapper.status = "Done"

        console.log(taskWrapper.status);
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

const removeTask = (id) => {
    document.getElementById(id).style.display = "none"
}





