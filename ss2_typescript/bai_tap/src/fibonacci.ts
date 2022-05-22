function sumFibonacci(number: number): number {
    let sum = 0, num1 = 0, num2 = 1;
    let str:string = "Chuỗi Fibonacci với " + number + " số là: ";
    for (let i = 0; i < number; i++) {
        str += num1.toString() + " ";
        sum += num1;
        let sumOfPrevTwo = num1 + num2;
        num1 = num2;
        num2 = sumOfPrevTwo;
    }
    console.log(str);
    return sum;
}

console.log("Tổng: " + sumFibonacci(10));

// Recursive
console.log("Recursive");
function isFibonacciByRecursive(number: number): number {
    if (number < 0) {
        return -1;
    } else if (number == 0 || number == 1) {
        return number;
    } else {
        return isFibonacciByRecursive(number - 1) + isFibonacciByRecursive(number - 2);
    }
}

let num = 10 ,sum = 0;
let str:string = "Chuỗi Fibonacci với " + num + " số là: ";
for (let i = 0; i < num; i++) {
    sum += isFibonacciByRecursive(i);
    str += isFibonacciByRecursive(i).toString() + " ";
}
console.log(str);
console.log("Tổng: " + sum);


