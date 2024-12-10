const valorReal = parseFloat(window.prompt('Digite um valor monetário em reais: R$'));

const valorEuro = (valorReal / 6.1).toFixed(2);
const valorDolar = (valorReal / 5.7).toFixed(2);
const valorRealFormatado = valorReal.toFixed(2);

window.alert(`Valor em real R$${valorRealFormatado}\nValor em euro €${valorEuro}\nValor em dolar US$${valorDolar}`)