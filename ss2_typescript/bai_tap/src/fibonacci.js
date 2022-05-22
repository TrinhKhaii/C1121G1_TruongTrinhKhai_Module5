"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function sumFibonacci(number) {
    let sum = 0, num1 = 0, num2 = 1;
    let str = "Chuỗi Fibonacci với " + number + " số là: ";
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
function isFibonacciByRecursive(number) {
    if (number < 0) {
        return -1;
    }
    else if (number == 0 || number == 1) {
        return number;
    }
    else {
        return isFibonacciByRecursive(number - 1) + isFibonacciByRecursive(number - 2);
    }
}
let num = 10, sum = 0;
let str = "Chuỗi Fibonacci với " + num + " số là: ";
for (let i = 0; i < num; i++) {
    sum += isFibonacciByRecursive(i);
    str += isFibonacciByRecursive(i).toString() + " ";
}
console.log(str);
console.log("Tổng: " + sum);
let x = 0;
function r5() {
    return __awaiter(this, void 0, void 0, function* () {
        x += 1;
        console.log(x);
        return 5;
    });
}
(() => __awaiter(void 0, void 0, void 0, function* () {
    x += yield r5();
    console.log(x);
}))();
