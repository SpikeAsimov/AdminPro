import {Component, Input, Output, OnInit, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress',{static: false}) txtProgress: ElementRef;

  @Input('AtributoPersonalizadoLeyenda') leyenda: string = "Mensaje ";
  @Input('AtributoPersonalizadoProgreso') progreso: number = 50;

  @Output('actualizaValor') cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() {
/*    console.log('Constructor:')
    console.log('Leyenda:', this.leyenda)
    console.log('progreso:', this.progreso)*/
  }

  ngOnInit() {
   /* console.log('ngOnInit:')
    console.log('Leyenda:', this.leyenda)
    console.log('progreso:', this.progreso)*/
  }

  onChanges (newValue: number) {

    //let elemHTML: any = document.getElementsByName('progreso')[0];

    //console.log(elemHTML.value);

    if (newValue >= 100) {
      this.progreso = 100;
    }else if (newValue <= 0 ) {
      this.progreso = 0;
    }else {
      this.progreso = newValue;
    }

    //elemHTML.value = this.progreso;

    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);
  }

  cambiarValor( valor: number ) {

    if (this.progreso >= 100 && valor > 0 ) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0 ) {
      this.progreso = 0;
      return;
    }

    this.progreso = this.progreso + valor;

    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
  }
}
