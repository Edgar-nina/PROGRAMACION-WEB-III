function buscar(id) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (id > 0) {
                res({ id: id, nom: "Juan" });
            } else {
                rej("ID inválido");
            }
        }, 1000);
    });
}
function buscarCb(id, cb) {
    (async () => {
        try {
            const usr = await buscar(id);
            cb(null, usr);
        } catch (err) {
            cb(err, null); 
        }
    })();
}
buscarCb(1, (err, res) => {
    if (err) {
        console.error("Error:", err);
    } else {
        console.log("Usuario:", res);
    }
});
