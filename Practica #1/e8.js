function miFuncion(callback) {
    setTimeout(() => {
        callback();
    }, 2000); 
}

miFuncion(() => {
    console.log("pasado 2 s, el callback es llamado.");
});
 