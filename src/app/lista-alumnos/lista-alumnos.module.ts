import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaAlumnosComponent } from './lista-alumnos.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    ListaAlumnosComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports:[
    ListaAlumnosComponent
  ]
})
export class ListaAlumnosModule { }
