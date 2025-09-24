function miFuncion(texto) {
    let inv = "";
    
    for (let i = texto.length - 1; i >= 0; i--) {
        inv =inv + texto[i];
    }
    return inv;
}

let obj = miFuncion("abcd");
console.log(obj); 
