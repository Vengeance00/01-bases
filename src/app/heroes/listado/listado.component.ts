import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent{
  heroes: string[] = ['Aquaman', 'Superman', 'Batman', 'Flash', 'Mujer Maravilla'];
  heroeBorrado: string = "";
  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || "";
  }
}
