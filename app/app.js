// Escopo global
let cartela
let cartela2
let valor
let valor2
let board
let valorGerado
let valorEscolhido
let resultado
let figura1
let figura2
let botao
/*
function queroJogar()
    {
    tabuleiro = []
    valor = 1
    for(let i=0; i<3; i++){
        tabuleiro[i] = [] // cria a linha
        for(let j=0; j<3; j++){
            tabuleiro[i][j] = valor // atribui o valor impar
            valor += 2 // incrementa em 2 para o próximo número impar
        }
    }
    console.table(tabuleiro)
    exibir()
    }
*/
function queroJogar()
{
    // --> Aviso <--
    document.getElementById("aviso1").innerHTML = "Escolha um número aleatório, pode ser que seja o númeor vencedor"

    board = document.getElementById("board") // armazena esse valor para facilitar a manipulação e a exibição da tabela
    // Inicia uma matriz vazia 
    cartela = [] 
    cartela2 = []
    //valores mín. e máx. 
    const min = 1 
    const max = 49
    // Conjunto que armazenar os números gerados, garante que não haja duplicatas, não permite valores repetidos.
    const numb = new Set()

    for(let i=0; i<4; i++){
        cartela[i] = [] // cria a linha da matriz
        for(let j=0; j<4; j++){
            valor = Math.floor(Math.random() * ((max - min + 1) / 2)) * 2 + min + 1 // Gera um número
            while(numb.has(valor)){ // enquanto o valor gerado já estive no conjunto ele gera outro valor
                valor = Math.floor(Math.random() * ((max - min + 1) / 2)) * 2 + min + 1 // Gera um novo número
            }
            // Adiciona o número na cartela e ao conjunto (numb = new Set())
            numb.has(valor) ? null : (cartela[i][j] = valor, numb.add(valor))
            
            cartela[i][j] = valor // atribui o valor aleatório 
        }
    }
    console.table(cartela)
    
    // cartel 2 para Valor aleatório que o jogador precisa adivinhar
    const numb2 = new Set()
    for(let i=0; i<4; i++){
        cartela2[i] = [] // cria a linha da matriz
        for(let j=0; j<4; j++){
            valor2 = Math.floor(Math.random() * ((max - min + 1) / 2)) * 2 + min + 1 // Gera um número
            while(numb2.has(valor2)){ // enquanto o valor gerado já estive no conjunto ele gera outro valor
                valor2 = Math.floor(Math.random() * ((max - min + 1) / 2)) * 2 + min + 1 // Gera um novo número
            }
            // Adiciona o número na cartela e ao conjunto (numb = new Set())
            numb.has(valor2) ? null : (cartela2[i][j] = valor2, numb.add(valor2))
            
            cartela2[i][j] = valor2 // atribui o valor aleatório 
        }
    }
    console.table(cartela)
    escolheValorAleatorio()
    exibir()

}

function escolheValorAleatorio()
{
    const indiceAleatorio = Math.floor(Math.random() * 4); // Escolhe um índice aleatório entre 0 e 3
    const valorAleatorio = cartela2[indiceAleatorio][Math.floor(Math.random() * 4)]; // Escolhe aleatoriamente um número da cartela2
    valorEscolhido = valorAleatorio; // Armazena o número escolhido
    console.log("Valor escolhido aleatoriamente para comparação:"+valorEscolhido); // Para verificar no console

}

function exibir()
{
    //criando uma tabela
    let tabela = '<table class="table table-borderless table-responsive"><thead>'

        for (let i = 0; i < 4;i++){
            tabela += '<tr>'
            for(let j = 0; j < 4; j++){
                tabela += '<td><button type="button" class="btn btn-primary" id="botao" onclick="numbEscolhido('+cartela[i][j]+')">' + cartela[i][j] + '</button></td>';
            }
            tabela +='</tr>'
        }

    tabela += '</thead></table>'
    
    document.getElementById('board').innerHTML = tabela
    console.log('chamou a função')
}

function naoQueroJogar()
{
    figura2 = '<figure><img src="/imagen/meninajulgando.jpeg" style="width:60%"></figure>'
    document.getElementById("aviso1").innerHTML = 'Está com medo de perder?'
    
    console.log("chamou a função")
    document.getElementById('board').innerHTML = figura2

}

function numbEscolhido(valorJogador)
{
    document.getElementById('container').innerHTML = ""
    // Verifica se o valor escolhido é igual ao valor gerado
    if (valorJogador === valorEscolhido){
        resultado = '<h1 style="font-size: 45px;">💰💰Você ganhou 💰💰</h1>'
        figura1 = '<figure><img src="/imagen/fogosdeartificio.gif" style="width:1300px; height: 800px;"></figure>'
        botao= '<button type="button" class="btn btn-success" id="recomecar" onclick="location.reload()">Recomeçar</button>'

        
    } else{
        resultado = '<h1 style="font-size: 45px;">💩 Você perdeu!!!</h1>'
        figura1 = '<figure><img src="/imagen/haha.jpg" style="width:60%"></figure>'
        botao= '<button type="button" class="btn btn-success" id="recomecar" onclick="location.reload()">Recomeçar</button>'
    }
    document.getElementById('container').innerHTML = resultado+figura1+botao
    
}

function recarregarPagina() {
    location.reload();
}