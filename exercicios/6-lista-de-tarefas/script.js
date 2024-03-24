let tasks = []

function addTask(event) {
    event.preventDefault()

    const descricao = document.getElementById("descricao").value
    const prioridade = document.getElementById("prioridade").value

    const newTask = {
        descricao: descricao,
        prioridade: prioridade || "Baixa",
        status: false
    }
    tasks.push(newTask)
    document.getElementById("task-form").reset()
    exibeTasks()
}

function exibeTasks() {
    const tableBody = document.getElementById("table-body");
    tableBody.innerHTML = '';

    tasks.forEach((task, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${task.descricao}</td>
            <td>${task.prioridade}</td>
            <td>${task.status ? "Concluída" : "Pendente"}</td>
            <td>
                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onclick="formEditarTask(${index})">Editar</button>
                <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded" onclick="removerTask(${index})">Remover</button>
                <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onclick="concluirTask(${index})">Concluir</button>
            </td>
        `;
        tableBody.appendChild(row);
    });
}

function removerTask(id) {
    tasks.splice(id, 1)
    exibeTasks()
}

function concluirTask(id) {
    tasks[id].status = true
    exibeTasks()
}

function formEditarTask(id) {
    const novaDescricao = document.getElementById("edit")

    novaDescricao.innerHTML = `
        <label  class="block mb-2" for="new-description">Nova descrição</label>
        <input class="border border-gray-400 rounded-md py-2 px-4 mb-2" type="text" id="new-description">
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onclick="editarTask(${id})">Confirmar</button>
    `
}

function editarTask(id) {
    const novaDescricao = document.getElementById("new-description").value

    if (novaDescricao) {
        tasks[id].descricao = novaDescricao
        exibeTasks()
    }
    document.getElementById("edit").innerHTML = ''
}

function orderByDescription() {
    tasks.sort((a, b) => {
        const descricaoA = a.descricao.toUpperCase();
        const descricaoB = b.descricao.toUpperCase();
        if (descricaoA < descricaoB) {
            return -1;
        }
        if (descricaoA > descricaoB) {
            return 1;
        }
        return 0;
    });

    exibeTasks();
}

function orderByPriority() {
    const priorityOrder = { "Alta": 3, "Média": 2, "Baixa": 1 };

    tasks.sort((a, b) => {
        const priorityA = priorityOrder[a.prioridade];
        const priorityB = priorityOrder[b.prioridade];

        return priorityB - priorityA;
    });

    exibeTasks();
}

function orderByStatus() {
    tasks.sort((a, b) => a.status - b.status);
    exibeTasks();
}