function miFuncion(lista) {
    let res = { may: lista[0], men: lista[0] };

    for (let i = 1; i < lista.length; i++) {
        if (lista[i] > res.may) {
            res.may = lista[i]; 
        }
        if (lista[i] < res.men) {
            res.men = lista[i]; 
        }
    }
    return res;
}

let obj = miFuncion([3, 1, 5, 4, 2]);
console.log(obj);
