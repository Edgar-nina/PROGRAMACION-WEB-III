function paso1() {
    return new Promise(resolve => setTimeout(() => resolve("Paso 1 completado"), 1000));
}

function paso2() {
    return new Promise(resolve => setTimeout(() => resolve("Paso 2 completado"), 1000));
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
    const r1 = await paso1();
    console.log(r1);

    const r2 = await paso2();
    console.log(r2);

    console.log("Todos los pasos completados");
}

ejecutar();
