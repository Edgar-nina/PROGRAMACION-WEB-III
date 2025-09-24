function miFuncion(texto) {
    texto = texto.toLowerCase();

    let inv = "";
    for (let i = texto.length - 1; i >= 0; i--) {
        inv += texto[i];
    }
    return texto === inv;
}

let band = miFuncion("oruro");
console.log(band);

band = miFuncion("hola");
console.log(band);
