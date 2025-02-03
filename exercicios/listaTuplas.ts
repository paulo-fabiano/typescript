/*
    Crie uma lista de tuplas para armazenar uma coleção de produtos. Cada produto deve ter nome e preço.

        - Use um array de tuplas.
        - Percorra a lista e imprima as informações de cada produto.
*/

var produtc: [string, number][];
produtc = [["Avon", 1], ["Boticário", 2], ["Eudora", 3]]

// Forma mais verbosa
for(var p of produtc) {
    console.log(`Nome: ${p[0]}, Preço: ${p[1]}`)
}

// Com forEach
produtc.forEach(p => console.log(`Nome: ${p[0]}, preço: ${p[1]}`))

/*
    Primeira saída:

        Nome: Avon, Preço: 1
        Nome: Boticário, Preço: 2
        Nome: Eudora, Preço: 3

    Segunda saída:

        Nome: Avon, preço: 1
        Nome: Boticário, preço: 2
        Nome: Eudora, preço: 3
*/


/*
        Geralmente, o for...of pode ser ligeiramente mais rápido em alguns cenários, pois é um loop nativo e 
    não envolve a criação de uma função de callback, como acontece com o forEach. Além disso, ele permite 
    o uso de break e continue, o que não é possível com forEach.
*/