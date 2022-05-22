let x = 0;
async function r5() {
    x += 1;
    console.log(x);
    return 5;
}
(async () => {
    x += await r5();
    console.log(x);
})();
