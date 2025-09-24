function paso1(callback) {
    setTimeout(() => callback("Paso 1 completado"), 1000);
}

function paso2(callback) {
    setTimeout(() => callback("Paso 2 completado"), 1000);
}
paso1(r1 => {
    console.log(r1);
    paso2(r2 => {
        console.log(r2);
        console.log("Todos los pasos completados");
    });
});


//usando async y await
async function ejecutar() {
    console.log(await paso1());
    console.log(await paso2());
    console.log("Todos los pasos completados");
}

ejecutar();

