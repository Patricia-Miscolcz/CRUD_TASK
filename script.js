const inputTarefa = document.getElementById("tarefa");
const botaoAdicionar = document.querySelector("button");
const listaTarefas = document.getElementById("listaTarefas");

// Evento de clique
botaoAdicionar.addEventListener("click", () => {
    const textoTarefa = inputTarefa.value.trim();

if (textoTarefa === "") {
    alert("Digite uma tarefa.");
    return;
}

if (listaTarefas.textContent.includes("Nenhuma tarefa")) {
    listaTarefas.innerHTML = "";
}

const novaTarefa = document.createElement("div");
novaTarefa.classList.add("tarefa");

const texto = document.createElement("span");
texto.textContent = textoTarefa;

const botaoEditar = document.createElement("button");
botaoEditar.innerHTML = "✏️";
botaoEditar.title = "Editar tarefa";

botaoEditar.addEventListener("click", () => {

    const novoTexto = prompt("Edite a tarefa:", texto.textContent);

    if (novoTexto === null) {
        return;
    }

    const textoAtualizado = novoTexto.trim();

    if (textoAtualizado === "") {
        alert("A tarefa não pode ficar vazia.");
        return;
    }

    texto.textContent = textoAtualizado;

});


const botaoExcluir = document.createElement("button");
botaoExcluir.innerHTML = "🗑️";
botaoExcluir.title = "Excluir tarefa";

botaoExcluir.addEventListener("click", () => {

    novaTarefa.remove();

});


novaTarefa.appendChild(texto);
novaTarefa.appendChild(botaoEditar);
novaTarefa.appendChild(botaoExcluir);

listaTarefas.appendChild(novaTarefa);

inputTarefa.value = "";
inputTarefa.focus();
});