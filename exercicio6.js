const n = parseInt(window.prompt("Digite o numero de termos da sequencia de fibonacci que deseja ver: "));

function fibonacci(n, a = 0, b = 1, sequencia = []) {
    if (n<=0) {
        return sequencia;
    } 
    if (sequencia.length === 0) {
        sequencia.push(a);
    }
    sequencia.push(b);
    return fibonacci(n-1, b, a+b, sequencia);
}

console.log(fibonacci(n));
