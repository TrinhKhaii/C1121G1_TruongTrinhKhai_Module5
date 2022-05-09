import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() progress:string = "0";

  constructor() { }

  loading() {
    let interval = setInterval(() => {
     let a = parseInt(this.progress) + 5;
     this.progress= String(a);
      if (this.progress == "100") {
        clearInterval(interval);
      }
    }, 1000);
  }

  ngOnInit(): void {
    this.loading();
  }
}
