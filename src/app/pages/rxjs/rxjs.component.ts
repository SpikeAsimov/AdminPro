import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscriber, Subscription} from "rxjs";
import {filter, map, retry} from "rxjs/operators";

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  suscripcion: Subscription;

  constructor() {

    this.suscripcion = this.regresaObservable()
    /*.pipe(
      retry(2)
    )*/
    .subscribe(
      numero => console.log('Sub:', numero),
      error => console.error('Sub: ', error),
      () => console.log('Sub: Observador terminó')
    );

  };


  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La pagina se fue');
    this.suscripcion.unsubscribe();
  }

  regresaObservable(): Observable<any> {
    //Observable:
    return new Observable( (observer: Subscriber<any>) => {

      let contador = 0;

      const intervalo = setInterval(() => {

        contador ++ ;

        const salida = {
          valor: contador
        };

        observer.next(salida);

/*        if (contador === 3) {
          clearInterval(intervalo);
          observer.complete();
        }*/

/*        if (contador === 2) {
          clearInterval(intervalo);
          observer.error('Soy un error del observer!');
        }*/

      }, 1000);

    }).pipe(

      map( resp => resp.valor ),
      filter( (valor, index) => {
        //console.log('Filter', valor, index);

        if ((valor % 2)=== 1) {
          //impar
          return true;
        }else {
          //Par
          return false;
        }

      })

    );

  }

}
