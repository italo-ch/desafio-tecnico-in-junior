let resp = 's';

do {
    const x = window.prompt("Digite um número inteiro positivo: ");

    if (!validarNumeroInteiroPositivo(x)) {
        window.alert('Número inválido!');
        continue;
    }

    window.alert(`O fatorial de ${x} é ${calcFatorial(parseInt(x))}`);

    resp = prompt("Quer calcular o fatorial de outro número: [s/n]").toLowerCase();
} while (resp === 's');



function calcFatorial(numero) {
    if (numero === 0) {
        return 1;
    }
    return numero * calcFatorial(numero - 1);
}

function validarNumeroInteiroPositivo(numero) {
    return Number.isInteger(Number(numero)) && Number(numero) > 0;
}