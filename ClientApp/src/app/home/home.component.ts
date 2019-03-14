import { Component, Input } from '@angular/core';

import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  // hablarse con otros componentes, no funciona
  @Input() _counterComponent: CounterComponent;

  constructor(public _cc: CounterComponent) { } // tampoco funciona

  // lo mejor para compartir datos entre componentes hermanos, que no padres e hijos, es hacer un shared service.
  // https://stackoverflow.com/questions/43940351/how-do-i-share-data-between-sibling-components-in-angular

  // properties
  public saludo: string = "hola tio";

  // methods
  // kendo button
  public obj: object = {
    doAlert: function () {
      console.log('counterComponent algo es : ' + this._cc)
      console.log('counterComponent algo es : ' + this._counterComponent);
    }
  };

  public onClick(): void {
      this.saludo = " mi click!!!!!!";
  };
  public onBlur(): void {
      this.saludo = " mi blur!!!!!!";
   }

  
}// fin HomeComponent
