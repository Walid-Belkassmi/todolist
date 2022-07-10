const submitButton = document.getElementById("submit-button") //Bouton pour ajouter une tâche
const toDoContainer = document.getElementById("to-do-container") //Partie dans laquelle on ajoute les tâche
const taskInput = document.getElementById("input-text") //Barre de saisie des tâches
const checkboxArea = document.getElementById('checkbox-1')
const valueButon = document.querySelectorAll(".value-btn")
const dice = document.getElementById("btn-dice") // Récupération du Dé qui génère aléatoirement une task
const doingButton = document.getElementById("doing") // Récupération du boutton To Do




let taskWrapper = []
let y = ""


const submitText = submitButton.onclick = (e) => {


    e.preventDefault()

    if (!taskInput.value) {
        alert("enter your text")
    } else if (taskInput.value.length >= 55) {
        alert("not more than 55 characters")
        taskInput.value = ""
    } else {

        let objet = {
            name: taskInput.value,
            status: "To do",
            id: taskWrapper.length || 0,
            value: y
        }
        taskWrapper.push(objet)

        let display = ""




        taskWrapper.forEach((task) => {



            display += `
            <div class="status-buttons">
              <button type="button" class="btn-todo-2" id="btn-todo" onclick="todoStatus()">to do</button>
              <button type="button" class="btn-doing-2" id="btn-doing" onclick="doingStatus()">doing</button>
            </div> 

            <div class="task" id="${task.id}">
                <input type="checkbox" class="checkbox" id="checkbox${task.id}">
                <div class="entered-text">
                    <p id="main-task">${task.name}</p><span class="span">${task.value}</span>
                    
                    <button class="btn-pencil" id="btn-pencil" onClick="editText()">
                        <i class="fa-solid fa-pencil icon-pencil"></i>
                    </button>

                    <button class="btn-x" onclick="removeTask(${task.id})"><i
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

const todoStatus = () =>{
    taskWrapper.status= "To Do"
}

const doingStatus = () => {
    taskWrapper.status = "Doing"
}


doingButton.addEventListener("click", () => {
    taskWrapper.filter((task) => {
        if(task.status === "Doing"){

            let display = ""
            taskWrapper.forEach((task) => {
            display += `
                <div class="status-buttons">
                <button type="button" class="btn-todo-2" id="btn-todo" onclick="todoStatus()">to do</button>
                <button type="button" class="btn-doing-2" id="btn-doing" onclick="doingStatus()">doing</button>
                </div> 

                <div class="task" id="${task.id}">
                    <input type="checkbox" class="checkbox" id="checkbox${task.id}">
                    <div class="entered-text">
                        <p id="main-task">${task.name}</p><span class="span">${task.value}</span>
                        
                        <button class="btn-pencil" id="btn-pencil" onClick="editText()">
                            <i class="fa-solid fa-pencil icon-pencil"></i>
                        </button>

                        <button class="btn-x" onclick="removeTask(${task.id})"><i
                                class="fa-solid fa-xmark  icon-x"></i></button>
                    </div>
                </div>
                `
            y = ""

        })

        document.querySelector("#list").innerHTML = display
        }
    })
})


const editText = () => {
    // e.preventDefault()
    if (!taskInput.value) {
        alert("enter your text")
    } else if (taskInput.value.length >= 55) {
        alert("not more than 55 characters")
        taskInput.value = ""
    } else {

        let objet = {
            name: taskInput.value,
            status: "To do",
            id: taskWrapper.length || 0,
            value: y
        }
        taskWrapper.push(objet)

        let display = ""
        
        taskWrapper.forEach((task) => {
            
            display = `
            <div class="status-buttons">
                <button type="button" class="btn-todo-2" id="btn-todo">to do</button>
                <button type="button" class="btn-doing-2" id="btn-doing">doing</button>
            </div> 
            
            <div class="task" id="${task.id}">
                <input type="checkbox" class="checkbox" id="checkbox${task.id}">
                <div class="entered-text">
                    <p id="main-task">${task.name}</p><span class="span">${task.value}</span>
                    <button class="btn-pencil" id="btn-pencil" onClick="editText()">
                         <i class="fa-solid fa-pencil icon-pencil"></i>
                    </button>
            
                    <button class="btn-x" onclick="removeTask(${task.id})"><i
                        class="fa-solid fa-xmark  icon-x"></i>
                    </button>
            </div>
            </div>
            `
            y = ""
            
        })
        
        document.querySelector("#list").innerHTML = display
        taskWrapper.splice(objet.id - 1, 1)

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

    
const removeTask = (deleteId) => {
    // let deleteButton = document.getElementsById(id)
    // deleteButton.parentElement.parentNode.remove(deleteButton)
    // deleteId.parentNode.remove(deleteId)
    // console.log(deleteId)
    taskWrapper.splice(deleteId, 1)
    let display = ""
    taskWrapper.forEach((task) => {
        display += `

        <div class="status-buttons">
        <button type="button" class="btn-todo-2" id="btn-todo">to do</button>
        <button type="button" class="btn-doing-2" id="btn-doing">doing</button>
      </div> 

      <div class="task" id="${task.id}">
          <input type="checkbox" class="checkbox" id="checkbox${task.id}">
          <div class="entered-text">
              <p id="main-task">${task.name}</p><span class="span">${task.value}</span>
              
              <button class="btn-pencil" id="btn-pencil" onClick="editText()">
                  <i class="fa-solid fa-pencil icon-pencil"></i>
              </button>

              <button class="btn-x" onclick="removeTask(${task.id})"><i
                      class="fa-solid fa-xmark  icon-x"></i></button>
          </div>
      </div>
            `
    })
    console.log(taskWrapper)
    document.querySelector("#list").innerHTML = display
}


const randomTask = ["Faire la vaisselle", "Faire les courses", "Terminer de coder", "Commencer le projet"] 
dice.addEventListener("click", () => {
    const min = 0
    const max = randomTask.length
    const randomTaskNumber = Math.floor(Math.random() * max) + min

    let objet = {
        name: randomTask[randomTaskNumber],
        status: "To do",
        id : taskWrapper.length || 0,
        value: y
    }

    taskWrapper.push(objet)

        let display = ""

        taskWrapper.forEach((task) => {

            display += `

            <div class="status-buttons">
        <button type="button" class="btn-todo-2" id="btn-todo">to do</button>
        <button type="button" class="btn-doing-2" id="btn-doing">doing</button>
      </div> 

      <div class="task" id="${task.id}">
          <input type="checkbox" class="checkbox" id="checkbox${task.id}">
          <div class="entered-text">
              <p id="main-task">${task.name}</p><span class="span">${task.value}</span>
              
              <button class="btn-pencil" id="btn-pencil" onClick="editText()">
                  <i class="fa-solid fa-pencil icon-pencil"></i>
              </button>

              <button class="btn-x" onclick="removeTask(${task.id})"><i
                      class="fa-solid fa-xmark  icon-x"></i></button>
          </div>
      </div>
            `
            y = ""
        })


        document.querySelector("#list").innerHTML = display
        taskInput.value = ""
    console.log(randomTaskNumber)
})



