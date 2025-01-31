/*
    Defina uma constante do tipo string e uma variável do tipo number. 
    Em seguida, faça uma função que receba essas duas variáveis e retorne uma mensagem formatada.
*/

const nome: string = 'Paulo Fabiano';
const idade: number = 25;

function imprimaNomeIdade(nome: string, idade: number) {
    console.log(`Nome: ${nome}, e idade: ${idade}`);
}

imprimaNomeIdade(nome, idade);

/*
    Nome: Paulo Fabiano, e idade: 25
*/