import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaAlumnosModule } from './lista-alumnos/lista-alumnos.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ListaAlumnosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
