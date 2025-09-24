function miFuncion(lista) {
    const res = { pares: [], impares: [] };

    for (let i = 0; i < lista.length; i++) {
        let num = lista[i];
        if (num % 2 === 0) {
            res.pares.push(num);  
        } else {
            res.impares.push(num); 
        }
    }
    return res;
}

let obj = miFuncion([1, 2, 3, 4, 5]);
console.log(obj); 

