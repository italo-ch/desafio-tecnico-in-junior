const frase = window.prompt('Digite um frase: ');

function verificarPalindromo(frase) {
    const arrFrase = frase.toLowerCase().replace(/\s+/g, "").split('');
    
    for (let i = 0; i < Math.floor((arrFrase.length / 2)); i++) {
        const primeiraPalavra = arrFrase[i];
        const ultimaPalavra = arrFrase[arrFrase.length - 1 - i];
        console.log()
        if (primeiraPalavra !== ultimaPalavra) {
            return false;
        }
    }
    return true
}

if (verificarPalindromo(frase)) {
    window.alert("A frase que você digitou é um palíndromo!");
} else {
    window.alert("A frase que você digitou não é um palíndromo!");
}
