function Num() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("num");
            resolve(5);
        }, 1000);
    });
}
function Pordos(numero) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("num x 2");
            resolve(numero * 2);
        }, 1000);
    });
}
async function ejecutar() {
    const numero = await Num();        
    const res = await Pordos(numero);
    console.log("total", res);
}
ejecutar();

