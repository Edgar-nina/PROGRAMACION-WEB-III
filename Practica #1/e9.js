function promesa() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("resuelto despues de 3s");
        }, 3000);
    });
}

async function ejecutar() {
    const men = await promesa();
    console.log(men);
}
ejecutar();
