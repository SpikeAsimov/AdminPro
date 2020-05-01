import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {

  percent: number = 50;

  constructor() { }

  ngOnInit() {
  }

  cambiarValor( valor: number ) {

   if (this.percent >= 100 && valor > 0 ) {
     this.percent = 100;
     return;
   }
    if (this.percent <= 0 && valor < 0 ) {
      this.percent = 0;
      return;
    }

   this.percent = this.percent + valor;

  }

}
