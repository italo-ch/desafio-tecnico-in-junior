const arrayAnoNasc = [2015, 1999, 1950, 2020, 2005, 2004];
const anoAtual = parseInt(window.prompt('Ano atual: '));

verificarIdades(arrayAnoNasc, anoAtual);


function verificarIdades(arrayAnoNasc, anoAtual) {
    const arrayResultado = arrayAnoNasc.map(ano => (anoAtual - ano) >= 18 ? 'Maior' : 'Menor');
    arrayResultado.forEach((maioridade, index) => {
        console.log(`Pessoa ${index+1}: ${maioridade} de idade`);
    });
    return arrayResultado;
}