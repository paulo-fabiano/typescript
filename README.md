# Exercícios de TypeScript

Este documento fornece 10 exercícios para ajudar você a praticar os conceitos básicos de TypeScript. Eles abrangem conceitos como tuplas, enums, interfaces, aliases de tipos e estruturas de controle.

---

## **1. Tipagem Básica**
Defina uma constante do tipo string e uma variável do tipo number. Crie uma função que receba essas duas variáveis e retorne uma mensagem formatada.

### **Instruções:**
- Defina uma `const` para um nome.
- Defina uma `let` para uma idade.
- Crie uma função que retorne uma mensagem no formato: `"Olá, [nome]. Você tem [idade] anos."`.

---

## **2. Tipos Union**
Crie uma função que aceite um parâmetro que pode ser uma string ou um número. Se for um número, retorne o dobro; se for uma string, retorne a string em maiúsculas.

### **Instruções:**
- Use o `union type` do TypeScript para o parâmetro.
- Implemente a lógica condicional para lidar com ambos os tipos.

---

## **3. Interfaces e Objetos**
Crie uma interface `Pessoa` com os seguintes campos:
- `nome` (string)  
- `idade` (number)  
- `endereco` (opcional, string)

### **Instruções:**
- Crie um objeto que siga essa interface.
- Escreva uma função que receba um objeto do tipo `Pessoa` e imprima uma mensagem formatada.

---

## **4. Enum**
Defina um enum `StatusPedido` com os valores `PENDENTE`, `APROVADO`, `CANCELADO`. Escreva uma função que receba o status e imprima uma mensagem apropriada.

### **Instruções:**
- Crie o enum.
- Escreva uma função para lidar com cada status com uma mensagem específica.

---

## **5. Tuplas**
Crie uma tupla para armazenar informações de um produto:
- Nome (string)  
- Preço (number)  
- Disponibilidade (boolean)

### **Instruções:**
- Defina uma tupla.
- Imprima cada valor da tupla.

---

## **6. Lista de Tuplas**
Crie uma lista de tuplas para armazenar uma coleção de produtos. Cada produto deve ter nome e preço.

### **Instruções:**
- Use um array de tuplas.
- Percorra a lista e imprima as informações de cada produto.

---

## **7. Alias de Tipo**
Crie um `type` chamado `Usuario` para um objeto com os campos:
- `id` (number)  
- `username` (string)  
- `email` (string)

### **Instruções:**
- Crie um array de usuários.
- Escreva uma função para imprimir o nome de usuário de cada um.

---

## **8. Try...Catch**
Crie uma função que receba dois números e faça uma divisão. Se o divisor for zero, lançe um erro. Trate esse erro com `try...catch`.

### **Instruções:**
- Implemente a lógica da divisão.
- Trate a divisão por zero com lançamento e captura de erro.

---

## **9. Condicional If...Else**
Escreva uma função que receba a idade de uma pessoa e imprima se ela é "Criança", "Adolescente" ou "Adulto".

### **Instruções:**
- Use declarações `if...else` para categorizar a idade.

---

## **10. Exercício Final (Desafio)**
Crie uma aplicação simples que simule uma lista de tarefas:
- Cada tarefa deve ter um `id`, uma `descricao` e um `status` (`PENDENTE`, `CONCLUIDA` ou `CANCELADA`).

### **Instruções:**
Implemente funções para:
- Adicionar uma tarefa
- Remover uma tarefa
- Marcar uma tarefa como concluída
- Listar todas as tarefas

---

### **Bom código!** 🚀