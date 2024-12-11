const arr = [1,1,2,2,3,4,4,5,5];

console.log(encontrarElementoUnico(arr));

function encontrarElementoUnico(arrDuplicado) {
    let arrOrdenado = ordenarArr([...arrDuplicado]);
    
    for (let i = 0; i < arrOrdenado.length - 1; i++) {
        if (arrOrdenado[i] !== arrOrdenado[i+1]) return arrOrdenado[i];
    }
    
    return -1;
}

function ordenarArr(arr) {
    let length = arr.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
            if (arr[j] > arr[j+1]) {
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}