/*
    Crie uma aplicação simples que simule uma lista de tarefas:
        - Cada tarefa deve ter um `id`, uma `descricao` e um `status` (`PENDENTE`, `CONCLUIDA` ou `CANCELADA`).

        Implemente funções para:
        - Adicionar uma tarefa
        - Remover uma tarefa
        - Marcar uma tarefa como concluída
        - Listar todas as tarefas
*/

enum Status {
    PENDENTE=("Pendente"),
    CONCLUIDA=("Concluída"),
    CANCELADA=("Cancelada")
}

type Tarefa = {
    id: number,
    descricao: string,
    status: Status
}

const tarefas : Tarefa[] = [];

function adicionarTarefa(tarefa: Tarefa) {
    tarefas.push(tarefa);
    console.log("Tarefa adicionada com sucesso!")
}

function removerTarefa(id: number){
    const index = tarefas.findIndex(tarefa => tarefa.id === id)
    tarefas.splice(index)
    console.log("Tarefa removida com sucesso!")
}

function marcarTarefaComoConcluida(id: number, status: Status) {
    try {
        
        const index = tarefas.findIndex(tarefa => tarefa.id === id);
        tarefas[index] = {...tarefas[index], status: status}
        console.log("O status da tarefa foi alterada com sucesso!")
    } catch (error) {
        console.error("Erro: " + error)
    }
}

function listarTarefas() {
    console.log("--- Listando Tarefas ---")
    tarefas.forEach(tarefa => console.log(`Tarefa = id: ${tarefa.id}, descrição: ${tarefa.descricao}, status da tarefa: ${tarefa.status}`))
    console.log("--- Fim! ---")
}


const tarefa1 : Tarefa = {
    id: 1,
    descricao: "Limpar a casa",
    status: Status.PENDENTE
}
console.log(adicionarTarefa(tarefa1))
const tarefa2 : Tarefa = {
    id: 2,
    descricao: "Estudar",
    status: Status.PENDENTE
}
console.log(adicionarTarefa(tarefa2))

console.log(listarTarefas())

console.log(removerTarefa(2))

console.log(listarTarefas())

console.log(marcarTarefaComoConcluida(1, Status.CONCLUIDA))

console.log(listarTarefas())
