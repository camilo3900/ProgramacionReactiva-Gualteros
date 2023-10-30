import { Component, OnDestroy } from '@angular/core';
import { Alumno, AlumnosService } from '../alumnos.service';
import { Observable, Subscription, map, take } from 'rxjs';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss']
})

export class ListaAlumnosComponent implements OnDestroy {

  alumnos$: Observable<Alumno[]>;
  name:Array<string> = [];
  dataSubscription: Subscription;
  constructor(private alumnosService: AlumnosService){

    this.alumnos$ = this.alumnosService.getAlumno();

    this.dataSubscription = this.alumnos$.subscribe({
        next: (alumnos) => {
          this.name = alumnos.map((a) => a.name);
          
        }
    })
/*     this.dataSubscription= this.alumnosService.getAlumno().pipe(take(6)).subscribe({
      next: (res)=>{
        console.log(res);
        this.datos = res.map((a)=>a.name);
      },
      error: (e:any)=>{
        console.log(e);
        
      },
    }); */
    
  }
  ngOnDestroy(): void {
    this.dataSubscription.unsubscribe();
  }
}
