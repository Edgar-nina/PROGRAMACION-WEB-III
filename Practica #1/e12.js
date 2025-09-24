function p1(callback) {
    setTimeout(() => {
        console.log("p1 c");
        callback(5);
    }, 1000);
}
function p2(numero, callback) {
    setTimeout(() => {
        console.log("P2 c");
        callback(numero * 2);
    }, 1000);
}
p1(function(result1) {
    p2(result1, function(result2) {
        console.log("res", result2);
    });
});
/////////////
function p1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("p1 c");
            resolve(5);
        }, 1000);
    });
}
function p2(numero) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("p2 c");
            resolve(numero * 2);
        }, 1000);
    });
}
async function ejecutar() {
    const result1 = await p1();
    const result2 = await p2(result1);
    console.log("res final:", result2);
}
ejecutar();
