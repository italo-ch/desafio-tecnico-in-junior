class Jogador {
    constructor(nome, idade, posicao, pontuacao) {
        this.nome = nome;
        this.idade = idade;
        this.posicao = posicao;
        this.pontuacao = pontuacao;
    }
}

const time = [];

let resp;
do {
    resp = parseInt(window.prompt(`
        1 - Adicionar jogador
        2 - Buscar por posição
        3 - Listar time
        4 - Calcular pontuação média
        5 - Sair    
    `));
    
    switch (resp) {
        case 1:
            let nomeJogador = window.prompt('Nome: ');
            let idadeJogador = window.prompt('Idade: ');
            let posicaoJogador = window.prompt('Posição: ');
            let pontuacaoJogador = parseInt(window.prompt('Pontuação: '));
            adicionarJogador(nomeJogador, idadeJogador, posicaoJogador, pontuacaoJogador);
            break;
        case 2:
            let posicaoAlvo = window.prompt('Posição: ');
            console.log(buscarPorPosicao(posicaoAlvo)); 
            break;
        case 3:
            listarTime(time);
            break;
        case 4:
            window.alert("Pontuação média: " + calcularPontuacaoMedia(time));
            break;
    }
} while (resp !== 5);


function adicionarJogador(nome, idade, posicao, pontuacao) {
    const jogador = new Jogador(nome, idade, posicao, pontuacao);
    time.push(jogador);
}

function buscarPorPosicao(posicao) {
    const arrPosicao = time.filter(jogador => jogador.posicao === posicao); 
    return arrPosicao.length > 0 ? arrPosicao : 'Nenhum jogador encontrado!';
}

function listarTime(time) {
    for (let jogador of time) {
        console.log(jogador);
    }
}

function calcularPontuacaoMedia(time) {
    let tot = time.reduce((acc, curr) => {
        return acc + curr.pontuacao;
    }, 0);

    return tot / time.length;
}
