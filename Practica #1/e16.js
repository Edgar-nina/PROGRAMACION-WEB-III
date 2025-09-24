function p1() {
    return new Promise(r => setTimeout(() => r("P1 listo"), 1000));
}

function p2() {
    return new Promise(r => setTimeout(() => r("P2 listo"), 1000));
}
async function run() {
    let r1 = await p1();
    console.log(r1);

    let r2 = await p2();
    console.log(r2);

    console.log("Todo listo");
}
run();
