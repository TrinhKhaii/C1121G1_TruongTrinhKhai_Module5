import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker-app',
  templateUrl: './color-picker-app.component.html',
  styleUrls: ['./color-picker-app.component.css']
})
export class ColorPickerAppComponent implements OnInit {

  colorIndex?: number;
  colorStr?: string;

  changeColor() {
    switch (this.colorIndex) {
      case 1:
        this.colorStr = "blue";
        break;
      case 2:
        this.colorStr = "green";
        break;
      case 3:
        this.colorStr = "yellow";
        break;
      case 4:
        this.colorStr = "magenta";
        break;
      case 5:
        this.colorStr = "red";
        break;
      case 6:
        this.colorStr = "black";
        break;
      case 7:
        this.colorStr = "lime";
        break;
      case 8:
        this.colorStr = "aqua";
        break;
      case 9:
        this.colorStr = "navy";
        break;
      case 10:
        this.colorStr = "teal";
        break;

    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
