"use strict";
let money = 10000;
const buyACAR = (car) => {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can buy " + car);
            }
            else {
                reject("Do not enough money.");
            }
        }, 100);
    }));
};
money = 10001;
const promise = buyACAR("Vinfast").then(value => {
    console.log(value);
}, error => {
    console.log(error);
});
