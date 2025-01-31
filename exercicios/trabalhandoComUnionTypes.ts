/*
    Crie uma função que receba um parâmetro que pode ser uma string ou um número. 
    Se for um número, retorne o dobro; se for uma string, retorne a string em maiúsculas.
*/

function retorno(input : string | number ) : string | number {

    if (typeof input === 'string') {
        return input.toUpperCase();
    }
    if (typeof input === 'number') {
        return input * 2;
    }
    else {
        throw new Error("Erro inesperado!")
    }

}

const texto: string = "É uma string";
console.log(retorno(texto));
/*
    É UMA STRING
*/

const numero: number = 5;
console.log(retorno(numero));
/*
    10
*/