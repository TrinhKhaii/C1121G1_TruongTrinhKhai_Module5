"use strict";
let sum = 0;
let count = 0;
let isPrime;
for (let i = 2; count < 30; i++) {
    isPrime = true;
    if (i == 2) {
        sum += i;
        count++;
        continue;
    }
    for (let j = 2; j <= Math.sqrt(i); j++) {
        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (!isPrime) {
        continue;
    }
    sum += i;
    count++;
}
console.log(`Ket qua: ${sum}`);
