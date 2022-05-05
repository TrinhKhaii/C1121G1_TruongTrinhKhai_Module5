import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num1: number = 0;
  num2: number = 0;
  calculator?: string ;
  result?:number;

  calculate() {
    switch (this.calculator) {
      case "+":
        this.result = this.num1 + this.num2;
        break;
      case "-":
        this.result = this.num1 - this.num2;
        break;
      case "*":
        this.result = this.num1 * this.num2;
        break;
      case "/":
        this.result = this.num1 / this.num2;
        break;
      default:
        this.result = 0;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
