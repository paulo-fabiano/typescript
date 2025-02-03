/*
    Crie uma função que receba dois números e faça uma divisão. Se o divisor for zero, lançe um erro. Trate esse erro com `try...catch`.

        - Implemente a lógica da divisão.
        - Trate a divisão por zero com lançamento e captura de erro.
*/

function divisao(n1: number, n2: number) {
    if (n2 === 0) {
        throw new Error("O divisor é igual a zero.");
    }
    return n1 / n2;
}

try {
    console.log(divisao(2, 0));
} catch (error) {
    console.error("Divisão por zero!");
}
