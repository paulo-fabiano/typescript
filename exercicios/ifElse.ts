/*
    Escreva uma função que receba a idade de uma pessoa e imprima se ela é "Criança", "Adolescente" ou "Adulto".

        - Use declarações `if...else` para categorizar a idade.
*/

function calcIdade(idade: number) : string {
    if (idade === 0 ) {
        throw new Error("Idade igual a zero!")
    }
    if (idade <= 12 ) {
        return `Criança!`
    }
    if (idade  <= 18 ) {
        return `Adolescente!`
    }
    else {
        return `Adulto!`
    }
}

// console.log(calcIdade(0))
// console.log(calcIdade(11))
// console.log(calcIdade(20))

/*
    Funcionando corretamente!
*/