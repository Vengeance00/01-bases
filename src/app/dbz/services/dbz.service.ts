import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()//Esto es para que se pueda inyectar el servicio en otro lugar
export class DbzService {
    private _personajes: Personaje[] = [
        {
          nombre: 'Goku',
          poder: 15000
        },
        {
          nombre: 'Vegeta',
          poder: 7500
        }
      ];
    //Objetos son pasados por referencia
    get personajes(): Personaje[] {
        return [...this._personajes];//Esto es para que se pueda modificar el array spread operator
    }
    constructor() {

    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }
}