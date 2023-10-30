import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

export interface Alumno{
  id: number,
  name: string,
  email: string,
  matriculado: boolean,
};
@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor() { }

  getAlumno(): Observable<Alumno[]>{
    return new Observable((subscriber) =>{subscriber.next([ 
    {id: 1, name:"Fabian",  email:"fabiguevara@gmail.com", matriculado:true},
    {id: 2, name:"Miguel",  email:"juanmi_96@gmail.com", matriculado:true},
    {id: 3, name:"Carlos",  email:"carpe25@gmail.com", matriculado:false},
    {id: 4, name:"Edgar",  email:"fore@gmail.com", matriculado:true},
    {id: 5, name:"Gustavo",  email:"gustavop.45@gmail.com", matriculado:true},
    {id: 6, name:"Lewis",  email:"opimuzpo@hos.gb", matriculado:false},
    {id: 7, name:"Adam",  email:"fidumfe@aro.gov", matriculado:true},
    {id: 8, name:"Olivia",  email:"peewpec@eva.zw", matriculado:true},
    {id: 9, name:"Ethel",  email:"sihegud@wul.nl", matriculado:true},
    {id: 10, name:"Kyle",  email:"ohowze@ewoed.gw", matriculado:true},
    {id: 11, name:"Myrtle", email:"adjoto@ji.py", matriculado:false},])
  })
}}
