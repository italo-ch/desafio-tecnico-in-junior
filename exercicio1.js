const a = parseFloat(window.prompt("Digite o valor de a: "));
const b = parseFloat(window.prompt("Digite o valor de b: "));
const c = parseFloat(window.prompt("Digite o valor de c: "));

const discriminante = (b*b) - 4*a*c;

if (discriminante > 0) {
    const x1 = (-b + Math.sqrt(discriminante)) / (2*a);
    const x2 = (-b - Math.sqrt(discriminante)) / (2*a);
    window.alert(`X1: ${x1}\nX2: ${x2}`);
} else if (discriminante === 0) {
    const x = (-b + Math.sqrt(discriminante)) / (2*a);
    window.alert(`Apenas uma raíz real\nX: ${x}`);
} else {
    window.alert(`Equação não possui raízes reais!`);
}