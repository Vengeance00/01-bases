import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeComponent } from "./heroe/heroe.component";
import { ListadoComponent } from "./listado/listado.component";

@NgModule({
    declarations: [
        //Que componentes va a tener el modulo
        HeroeComponent,
        ListadoComponent
    ],
    exports: [
        //Que componentes va a exportar el modulo
        // Exportamos los componentes que queremos que sean visibles desde otros módulos
        ListadoComponent
    ],
    imports: [
        //Que módulos va a tener el modulo
        // Importamos los módulos que necesitamos para el funcionamiento de este módulo
        CommonModule //Para poder usar ngFor
    ]
})

export class HeroesModule {

}