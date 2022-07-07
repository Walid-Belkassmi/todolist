const submitButton = document.getElementById("submit-button") //Bouton pour ajouter une tâche
const toDoContainer = document.getElementById("to-do-container") //Partie dans laquelle on ajoute les tâche
const taskInput = document.getElementById("input-text") //Barre de saisie des tâches


let taskWrapper = []

const onTaskSubmit = submitButton.onclick = (e) => {
    e.preventDefault()
    let task = taskInput.value

    if(!task){
        alert("Saisir une tâche ! ")
    }

    let taskInfo = {
        name: task,
        status: "To do"
    }

    taskWrapper.push(taskInfo)
    console.log(taskInfo)

    const addTask = () => {
        
    }

    taskInput.value = ""
}



