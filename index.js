const submitButton = document.getElementById("submit-button") //Bouton pour ajouter une tâche
const toDoContainer = document.getElementById("to-do-container") //Partie dans laquelle on ajoute les tâche
const taskInput = document.getElementById("input-text") //Barre de saisie des tâches
const checkboxArea = getElementById("checkbox")

let taskWrapper = []

const submitText = submitButton.onclick = (e) => {
    e.preventDefault()

    if (!taskInput.value) {
        alert("entrer un text")
    }
    let objet = {
        name: taskInput.value,
        status: "To do"
    }
    taskWrapper.push(objet)
    console.log(taskWrapper);

    let display = ""
    taskWrapper.forEach((task, i) => {

        display += `

        <div class="task" id="paragraph-${i}">
        <input type="checkbox" class="checkbox" id="checkbox>
        <div class="entered-text">
            <p class="">${task.name}</p>
            <button class="btn-pencil" id="btn-pencil" onclick="modify('select-${i}')">
                <i class="fa-solid fa-pencil icon-pencil "></i>
            </button>
            <select name="select" class="select-list" id="select-${i}">
                <option value="todo" class="select-todo">To do</option>
                <option value="doing" class="select-doing">Doing</option>
                <option value="edit" class="select-edit">Edit</option>
            </select>
            <button class="btn-x" onclick="disappear('paragraph-${i}')"><i
                    class="fa-solid fa-xmark  icon-x"></i></button>
        </div>
    </div>
        `

    })
    document.querySelector("#list").innerHTML = display



    taskInput.value = ""



}

const alreadyDone = checkboxArea.onclick = () => {
    document.getElementById("list").style.display = "none"

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

const disappear = (id) => {

    document.getElementById(id).style.display = "none"
}





