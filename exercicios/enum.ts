/*
    Defina um enum StatusPedido com os valores PENDENTE, APROVADO, CANCELADO.
    Faça uma função que receba o status e imprima uma mensagem apropriada.
*/

enum StatusPedido {
    PENDENTE="Pedido pendente",
    APROVADO="Pedido aprovado",
    CANCELADO="Pedido cancelado"
}

const statusPendente: StatusPedido = StatusPedido.PENDENTE;
const statusAprovado: StatusPedido = StatusPedido.APROVADO;
const statusCancelado: StatusPedido = StatusPedido.CANCELADO

function statusDoPedido(status: StatusPedido) : string {

    if (status === StatusPedido.APROVADO) {
        return "O pedido foi aprovado!";
    }
    if (status === StatusPedido.PENDENTE) {
        return "O pedido está pendente!";
    }
    else {
        return "O pedido foi cancelado!"
    }

}

console.log(statusDoPedido(statusPendente))
console.log(statusDoPedido(statusAprovado))
console.log(statusDoPedido(statusCancelado))
