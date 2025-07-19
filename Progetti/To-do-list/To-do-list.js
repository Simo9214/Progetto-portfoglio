//Seleziono gli elementi Html

const newTask = document.getElementById("newTask");
const taskList = document.getElementById("taskList");
const message = document.getElementById("message");
const addTask = document.getElementById("addTask");
const taskCount = document.getElementById("taskCount");



function aggiornaContatore() {
    // Recupero la lista degli elementi
    const elementi = taskList.querySelectorAll("li").length;

    // Imposto il testo del counter
    taskCount.textContent = `Hai ${elementi} task nella lista.`;


}
addTask.addEventListener("click", function () {
    const testo = newTask.value.trim();
    const listaVuota = taskList.children.length === 0;

    if (testo === "" && listaVuota) {
        message.textContent = "Inserisci qualcosa!!!";
        return;
    }

    if (testo === "") return;
    message.textContent = "";

    const li = document.createElement("li");
    li.textContent = testo;

    li.addEventListener("click", function () {
        taskList.removeChild(li);
        aggiornaContatore();
    });

    taskList.appendChild(li);
    newTask.value = "";
    aggiornaContatore();
});