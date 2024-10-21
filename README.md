# 🎉 Loteria dos Números

## 📚 Sumário

1. [Descrição do Projeto](#descrição-do-projeto)
2. [Tecnologias Usadas](#tecnologias-usadas)
3. [Explicações do Código JavaScript](#explicações-do-código-javascript)
4. [Manual de Uso - Loteria dos Números](#manual-de-uso---loteria-dos-números)
5. [Requisitos](#requisitos)
6. [Dicas](#dicas)

## 1. Descrição do Projeto

O projeto "Loteria dos Números" é uma aplicação interativa desenvolvida como parte das atividades do curso de Práticas de Programação na Faculdade de Ciência da Computação. O objetivo principal deste projeto é implementar uma variedade de conceitos e técnicas estudados ao longo do curso, proporcionando uma experiência prática no desenvolvimento de software.

Neste jogo, o jogador é convidado a tentar a sorte ao escolher números aleatórios em uma cartela gerada pelo sistema. O jogo apresenta uma grade de números, onde o jogador pode selecionar um número que acredita ser o vencedor. O sistema, por sua vez, gera uma segunda cartela com um número aleatório que será comparado ao número escolhido pelo jogador. Se o jogador adivinhar corretamente, uma mensagem de vitória é exibida, acompanhada de animações e imagens festivas. Caso contrário, uma mensagem de derrota é apresentada, juntamente com uma imagem divertida.

## 2. Tecnologias Usadas

A aplicação foi desenvolvida utilizando as seguintes tecnologias:
- **HTML**: Para estruturar o layout da página e os elementos interativos do jogo.
- **CSS**: Para estilizar a aparência da página, utilizando o Bootstrap para um design responsivo e moderno.
- **JavaScript**: Para implementar a lógica do jogo e gerenciar a interação do usuário.
- **Bootstrap**: Para um design responsivo e moderno, facilitando a criação de interfaces atraentes.

## 3. Explicações do Código JavaScript

O código JavaScript contém várias funções que controlam a lógica do jogo. Aqui estão algumas explicações sobre as linhas de código:

### 3.1. Variáveis Globais

O código começa declarando várias variáveis globais, como `cartela`, `valor`, `board`, entre outras, que são usadas para armazenar dados ao longo do jogo.

        let cartela;
        let valor;
        let board;
        ...
        
### 3.2. `Função queroJogar()`
Esta função é chamada quando o jogador decide jogar. Ela gera uma cartela de números aleatórios e armazena esses valores em uma matriz (`cartela`).

    function queroJogar() {
        board = document.getElementById("board");
        cartela = [];
        const min = 1;
        const max = 49;
        const numb = new Set();
        ...
    }

A linha const `numb = new Set()` cria um conjunto para garantir que não haja números duplicados na cartela. O loop `for` gera números aleatórios entre `min` e `max` e verifica se já foram gerados, garantindo a exclusividade.

### 3.3. Função `escolheValorAleatorio()`
Esta função seleciona aleatoriamente um número da segunda cartela que o jogador precisa adivinhar.

        function escolheValorAleatorio() {
            const indiceAleatorio = Math.floor(Math.random() * 4);
            const valorAleatorio = cartela2[indiceAleatorio][Math.floor(Math.random() * 4)];
            valorEscolhido = valorAleatorio;
        }

Aqui, `Math.random()` é usado para gerar um índice aleatório para escolher um número da matriz `cartela2`.

### 3.4. `Função exibir()`
Esta função cria uma tabela na página para exibir os números gerados na cartela.

        function exibir() {
            let tabela = '<table class="table table-borderless table-responsive"><thead>';
            ...
        }
A tabela é construída concatenando strings HTML dentro de um loop, onde cada número é adicionado como um botão que, quando clicado, chama a função `numbEscolhido()`.

Esses trechos de código exemplificam como a lógica do jogo é implementada, permitindo que o jogador interaja com a aplicação e participe da "Loteria dos Números". O projeto não apenas proporciona entretenimento, mas também serve como uma plataforma para aplicar conhecimentos em lógica de programação, manipulação do DOM e interação com o usuário, contribuindo para o aprendizado prático e o desenvolvimento de habilidades essenciais na área de programação.

## 4. Manual de Uso - Loteria dos Números
## Introdução
O jogo "Loteria dos Números" é uma aplicação interativa que permite aos usuários tentar a sorte escolhendo números aleatórios. Este manual orienta sobre como usar a aplicação e explica as interações disponíveis.

## Como Jogar
### 4.1. Acessando o Jogo
- Abra a aplicação em um navegador compatível.
  
### 4.2. Iniciando o Jogo
- Ao carregar a página, você verá um título "Loteria dos Números" e duas opções:
- Quero jogar: Clique neste botão se desejar participar do jogo. 🎮
- Não quero jogar: Clique neste botão se preferir sair do jogo. Uma imagem divertida será exibida como resposta. 😅
  
### 4.3. Escolhendo um Número
- Se você escolher "Quero jogar", o jogo gerará uma cartela com números aleatórios dispostos em uma grade de 4x4.
- Escolha um número clicando no botão correspondente na tabela.

### 4.4. Verificando o Resultado
- Após escolher um número, o jogo comparará sua escolha com um número aleatório gerado pelo sistema.
- O resultado será exibido na tela, informando se você ganhou ou perdeu, juntamente com uma animação visual.

### 4.5. Recomeçando o Jogo
- Após o resultado, você terá a opção de clicar em um botão para "Recomeçar" e jogar novamente. 🔄

## 5. Requisitos
- Navegador da Web atualizado (Google Chrome, Mozilla Firefox, Microsoft Edge, etc.)
- Conexão com a Internet (para acessar a aplicação, se hospedada online)

## 6. Dicas
- Experimente diferentes números para aumentar suas chances de ganhar. 🍀
- Divirta-se e compartilhe com amigos! 🎊
