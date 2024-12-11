const valorUsuario = parseInt(window.prompt("Digite um numero inteiro: "));

let resultado = "";

if (valorUsuario % 3 === 0) resultado += "fizz";
if (valorUsuario % 5 === 0) resultado += "buzz";

window.alert(resultado);