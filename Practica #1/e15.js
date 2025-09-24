function cargarConCb(cb) {
    setTimeout(() => {
        cb(null, "Datos con callback");
    }, 1000);
}
function cargarPromesa() {
    return new Promise((res, rej) => {
        cargarConCb((err, datos) => {
            if (err) {
                rej(err);
            } else {
                res(datos);
            }
        });
    });
}
async function mostrar() {
    try {
        const res = await cargarPromesa();
        console.log("Res:", res);
    } catch (err) {
        console.error("Error:", err);
    }
}
mostrar();
