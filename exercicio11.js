const n = parseInt(window.prompt('Digite quantidade de números que deseja inserir no vetor: '));

const arr = [];
let count = 0;

let val = parseInt(window.prompt(`1º numero: `));
arr.push(val);

for (let i = 1; i < n; i++) {
    val = parseInt(window.prompt(`${i+1}º numero: `));
    
    if (val > arr[i-1]) count++;

    arr.push(val);
}

window.alert(count);
