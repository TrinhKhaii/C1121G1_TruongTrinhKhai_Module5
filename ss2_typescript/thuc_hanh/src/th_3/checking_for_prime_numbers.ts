function isPrime1(number: number): boolean {
    let isPrime = true;
    if (number < 2) {
        isPrime =  false;
    } else if (number > 2) {
        for (let i = 2; i <= Math.sqrt(number); i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}

let array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
let sum1 = 0;
for (let number of array) {
    if (isPrime1(number)) {
        sum1 += number;
        console.log(`hihi: ${number}`);
    }
}
console.log(`Ket qua: ${sum1}`);