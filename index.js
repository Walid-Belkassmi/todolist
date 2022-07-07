const submitButton = document.getElementById("submit-button") //Bouton pour ajouter une tâche
const toDoContainer = document.getElementById("to-do-container") //Partie dans laquelle on ajoute les tâche
const taskInput = document.getElementById("input-text") //Barre de saisie des tâches

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
    const addTask = () => {

        document.querySelector("#list").innerHTML = `


        <div class="task" id="paragraph-1">
        <input type="checkbox" class="checkbox">
        <div class="entered-text">
            <p class="">${taskWrapper.name}</p>
            <button class="btn-pencil" id="btn-pencil" onclick="modify('select-1')">
                <i class="fa-solid fa-pencil icon-pencil "></i>
            </button>
            <select name="select" class="select-list" id="select-1">
                <option value="todo" class="select-todo">To do</option>
                <option value="doing" class="select-doing">Doing</option>
                <option value="edit" class="select-edit">Edit</option>
            </select>
            <button class="btn-x" onclick="disappear('paragraph-1')"><i
                    class="fa-solid fa-xmark  icon-x"></i></button>
        </div>
    </div>


        `



    }


    addTask()

    taskInput.value = ""



}


// let paragraph

// const addTask = addToDoButton.onclick = () => {
//     // Vérifier si l'input est vide
//     if (inputField.value != "") {

//         paragraph = document.createElement("p")
//     }

//     // Contenu de l'input dans le paragraphe
//     paragraph.innerText = inputField.value

//     // Stylisé le paragraphe
//     paragraph.classList.add("paragraph-style")

//     // Ajouter le paragraphe dans l'élément toDoContainer
//     toDoContainer.appendChild(paragraph)

//     // Vider l'input après que le paragraphe soit ajouté
//     inputField.value = ""

//     paragraph.addEventListener("click", () => {
//         toDoContainer.removeChild(paragraph)
//     })
// }




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





