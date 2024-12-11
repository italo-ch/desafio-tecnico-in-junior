const fila = ['João', 'Maria', 'André'];


let resp = 0;

do {
    const filaStr = fila.length > 0 ? imprimirFila(fila) : 'Sem Clientes';
    resp = parseInt(window.prompt(`${filaStr}
        Digite uma das opções para prosseguir
        1 - Novo Cliente
        2 - Atender Cliente
        3 - Sair    
    `));

    switch (resp) {
        case 1:
            const novoCliente = window.prompt("Digite o nome do novo cliente: ");
            fila.push(novoCliente);
            break;
        case 2:
            if (fila.length === 0)
                continue;
            window.alert(`${fila[0]} está sendo atendido...`);
            fila.shift();
            break;
    }
} while (resp !== 3); 


function imprimirFila(fila) {
    let resultado = '';
    let i = 0;
    for (let nome of fila) {
        i++;
        resultado += `${i}º ${nome}\n`;
    } 
    return resultado;
}

