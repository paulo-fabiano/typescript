    /*
        Crie um `type` chamado `Usuario` para um objeto com os campos:

            - `id` (number)  
            - `username` (string)  
            - `email` (string)

            - Crie um array de usuários.
            - Escreva uma função para imprimir o nome de usuário de cada um.

    */

    type Usuario = {
        id: number;
        username: string,
        email: string
    }

    var usuarios = new Array<Usuario>();

    let u1: Usuario = {id: 1, username: "Paulo", email: "p@gmail.com"};
    usuarios.push(u1)
    let u2: Usuario = {id: 2, username: "Fabiano", email: "r@gmail.com"};
    usuarios.push(u2)

    function imprimirNome() {
        console.log(`A lista têm ${usuarios.length} objetos.`)
        usuarios.forEach(u => console.log(`Nome: ${u.username}`))
    }

    imprimirNome();

    /*  
        Saída:
        
        A lista têm 2 objetos.
        Nome: Paulo
        Nome: Fabiano
    */