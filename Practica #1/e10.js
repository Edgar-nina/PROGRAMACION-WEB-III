// CUANDO USAR CALLBACKS
// Los callbacks son útiles cuando tenemos operaciones sencillas y rápidas,
// especialmente si solo necesitamos ejecutar algo después de otra función.
// Pero, si se encadenan muchos callbacks, aparece el problema del
// "Callback Hell".
function call(callback) {
    console.log("inc call");
    setTimeout(() => {
        callback("usando callback");
    }, 2000);
}
call((mensaje) => {
    console.log(mensaje);
});
// CUANDO USAR PROMESAS
// Las promesas son más convenientes cuando manejamos operaciones
// asíncronas más complejas, o varias en cadena.
// Son más legibles y fáciles de manejar con .then(), .catch() o async/await.
function prome() {
    return new Promise((resolve, reject) => {
        console.log("inc prom");
        setTimeout(() => {
            resolve("usando promesa");
        }, 2000);
    });
}

