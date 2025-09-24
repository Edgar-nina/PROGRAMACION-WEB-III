// Función que devuelve una promesa simulando una consulta a base de datos
function consultarUsuario(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id > 0) {
                resolve({ id: id, nombre: "Juan" });
            } else {
                reject("ID inválido");
            }
        }, 1000);
    });
}

// Función que convierte la promesa en callback
function consultarUsuarioCallback(id, callback) {
    (async () => {
        try {
            const usuario = await consultarUsuario(id);
            callback(null, usuario); // todo bien
        } catch (error) {
            callback(error, null);   // ocurrió un error
        }
    })();
}

// Uso con callback
consultarUsuarioCallback(1, (err, usuario) => {
    if (err) {
        console.error("Error:", err);
    } else {
        console.log("Usuario:", usuario);
    }
});
