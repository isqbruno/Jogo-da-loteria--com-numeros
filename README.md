# Loteria dos Números

## Descrição do Projeto
O projeto "Loteria dos Números" é uma aplicação interativa desenvolvida como parte das atividades do curso de Práticas de Programação na Faculdade de Ciência da Computação. O objetivo principal deste projeto é implementar uma variedade de conceitos e técnicas estudados ao longo do curso, proporcionando uma experiência prática no desenvolvimento de software.

Neste jogo, o jogador é convidado a tentar a sorte ao escolher números aleatórios em uma cartela gerada pelo sistema. O jogo apresenta uma grade de números, onde o jogador pode selecionar um número que acredita ser o vencedor. O sistema, por sua vez, gera uma segunda cartela com um número aleatório que será comparado ao número escolhido pelo jogador. Se o jogador adivinhar corretamente, uma mensagem de vitória é exibida, acompanhada de animações e imagens festivas. Caso contrário, uma mensagem de derrota é apresentada, juntamente com uma imagem divertida.

##Tecnologias Usadas
A aplicação foi desenvolvida utilizando as seguintes tecnologias:
- **HTML**: Para estruturar o layout da página e os elementos interativos do jogo.
- **CSS**: Para estilizar a aparência da página, utilizando o Bootstrap para um design responsivo e moderno.
- **JavaScript**: Para implementar a lógica do jogo e gerenciar a interação do usuário.

## Explicações do Código JavaScript

O código JavaScript contém várias funções que controlam a lógica do jogo. Aqui estão algumas explicações sobre as linhas de código:

1. **Variáveis Globais**: O código começa declarando várias variáveis globais, como `cartela`, `valor`, `board`, entre outras, que são usadas para armazenar dados ao longo do jogo.

    ```javascript
    let cartela
    let valor
    let board
    ...

2. Função `queroJogar()`: Esta função é chamada quando o jogador decide jogar. Ela gera uma cartela de números aleatórios e armazena esses valores em uma matriz (`cartela`).

    ````javascript
      function queroJogar() {
        board = document.getElementById("board")
        cartela = []
        const min = 1
        const max = 49
        const numb = new Set()
        ...
      }

A linha `const numb = new Set()` cria um conjunto para garantir que não haja números duplicados na cartela. O loop `for` gera números aleatórios entre `min` e `max` e verifica se já foram gerados, garantindo a exclusividade.

3.Função `escolheValorAleatorio()`: Esta função seleciona aleatoriamente um número da segunda cartela que o jogador precisa adivinhar.

    ````javascript
    function escolheValorAleatorio() {
        const indiceAleatorio = Math.floor(Math.random() * 4);
        const valorAleatorio = cartela2[indiceAleatorio][Math.floor(Math.random() * 4)];
        valorEscolhido = valorAleatorio;
    }

Aqui, `Math.random()` é usado para gerar um índice aleatório para escolher um número da matriz `cartela2`.






