/*
    Crie uma interface Pessoa com os campos:
    - nome : string
    - idade : number
    - endereco : (optional, string)

    Depois, crie um objeto que siga essa interface e uma função que receba um objeto do tipo Pessoa e imprima uma mensagem formatada.
*/

interface Pessoa {
    nome : string;
    idade : number;
    endereco? : string 
}

function imprimirPessoa(pessoa: Pessoa) {

    if (pessoa.endereco === undefined) {
        console.log("Sem endereço!")
        return `Nome: ${pessoa.nome}, idade: ${pessoa.idade}`
    }

    console.log("Com endereço!")
    return `Nome: ${pessoa.nome}, idade: ${pessoa.idade}, endereço: ${pessoa.endereco}`

}

const pessoaSemEndereco: Pessoa = {
    nome : "Paulo", 
    idade : 25}
console.log(imprimirPessoa(pessoaSemEndereco))
/*
    Pessoa sem endereço!
    Nome: Paulo Fabiano, idade: 25
*/

const pessoaComEndereco: Pessoa = {
    nome : "Paulo Fabiano",
    idade : 25,
    endereco : "Brasil"
}
console.log(imprimirPessoa(pessoaComEndereco))

/*
    Pessoa com endereço!
    Nome: Paulo Fabiano, idade: 25, endereço: Brasil
*/


/*
    null x undefined => verificar diferenças
*/