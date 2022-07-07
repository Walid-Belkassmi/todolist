const addToDoButton = document.getElementById("add-to-do") //Bouton pour ajouter une tâche
const toDoContainer = document.getElementById("to-do-container") //Partie dans laquelle on ajoute les tâche
const inputField = document.getElementById("input-text") //Barre de saisie des tâches

let paragraph 

const addTask = addToDoButton.onclick = () => {
    // Vérifier si l'input est vide
    if(inputField.value != ""){
        
        paragraph = document.createElement("p")
    }

    // Contenu de l'input dans le paragraphe
    paragraph.innerText = inputField.value

    // Stylisé le paragraphe
    paragraph.classList.add("paragraph-style")

    // Ajouter le paragraphe dans l'élément toDoContainer
    toDoContainer.appendChild(paragraph)

    // Vider l'input après que le paragraphe soit ajouté
    inputField.value = ""

    paragraph.addEventListener("click", () => {
        toDoContainer.removeChild(paragraph)
    })
}




