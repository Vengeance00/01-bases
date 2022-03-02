import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html'
})
export class AgregarComponent{
  // @Input() personajes: Personaje[] = [];
  @Input() nuevo: Personaje = {
    nombre  : '',
    poder: 0,
  }

  @Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter<Personaje>();//Output es una propiedad que se puede emitir al padre desde el hijo

  agregar() {
    if (this.nuevo.nombre.trim().length === 0) { return; }
    this.onNuevoPersonaje.emit(this.nuevo);//Emitimos el nuevo personaje
    // this.personajes.push(this.nuevo);
    this.nuevo = {
      nombre  : '',
      poder: 0,
    }
    // console.log(this.personajes);
    // console.log(this.nuevo);
  }
}
