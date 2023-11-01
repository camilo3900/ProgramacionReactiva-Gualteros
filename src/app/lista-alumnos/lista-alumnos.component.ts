import { Component, EventEmitter, OnDestroy, Output } from '@angular/core';
import { Alumno, AlumnosService } from '../alumnos.service';
import { Observable, Subscription, filter, take } from 'rxjs';
import { datos } from '../data/data';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})

export class ListaAlumnosComponent implements OnDestroy {
  mainTitle: string="";
  datos: Array<Alumno> =[];
  alumnos$:Observable<Array<Alumno>>
  info: Array<any> = [];
  error: string = "";
  correo: Array<string> = [];
  idiomas: Array<string> = [];
  idiomasCargados = false;
  dataSubscription: Subscription;
  esVisible: boolean = true;
  
  constructor(private alumnosService: AlumnosService){
    this.mainTitle="utilizando promesas".toUpperCase();

    /* Utilizando el async */
    this.alumnos$ = this.alumnosService.getAlumno();

    this.dataSubscription = this.alumnos$.subscribe({
      next: (val)=>{
        
        this.info= val.filter(val=>val.matriculado==true).map(val=> val.name);
        console.log(this.info);
        
      }
    });
  }
  /* Promise para traer datos */
  async getIdiomas(){
    this.esVisible = true;
    this.error="";
    try{
      await new Promise((resolve)=>setTimeout(resolve, 3000));
      const result = await this.alumnosService.getIdioma();
      this.idiomas= result;
      this.idiomasCargados = true;
    } catch (err){
      this.error = "Error al cargar idiomas: ";
      console.log(this.error);
      
    }
  finally{
      this.esVisible = false;
    }}
  /* Se destruye el Observable */
  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
}
