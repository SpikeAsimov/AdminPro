import { Component, OnInit } from '@angular/core';
import {error} from "util";

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() {

    this.contar3segundos().then(
      mensaje => console.log('Then: Se terminó la promesa', mensaje)
    )
      .catch( error => console.error('Error en la promesa', error));
  }

  ngOnInit() {
  }

  contar3segundos(): Promise<boolean> {

      return new Promise( (resolve, reject) => {

      let contador = 0;
      console.log('Contador usando setInterval:  ' );

      let intervalo = setInterval( () => {
        contador += 1;
        console.log(contador);

        if ( contador === 3) {
          resolve(true);
          //reject('Se detuvo el contador por un error');
          clearInterval(intervalo);
        }
      }, 1000)

    } );

  }

}
