// Campo onde o usuário digita a tarefa
const inputTarefa = document.getElementById("tarefa");

// Botão Adicionar
const botaoAdicionar = document.querySelector("button");

// Área onde as tarefas serão exibidas
const listaTarefas = document.getElementById("listaTarefas");

// Evento de clique
botaoAdicionar.addEventListener("click", () => {
    const textoTarefa = inputTarefa.value.trim();

if (textoTarefa === "") {
    alert("Digite uma tarefa.");
    return;
}

// Remove a mensagem inicial
if (listaTarefas.textContent.includes("Nenhuma tarefa")) {
    listaTarefas.innerHTML = "";
}

const novaTarefa = document.createElement("p");
novaTarefa.textContent = textoTarefa;

listaTarefas.appendChild(novaTarefa);

inputTarefa.value = "";
inputTarefa.focus();
});