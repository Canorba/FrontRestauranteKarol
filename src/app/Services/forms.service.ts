import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormsService {
  componente= new BehaviorSubject("");
  object:any
  
  formularios: any[] = []; 
  constructor() { }
  deleteFormulario(id: string) {
    const formularioIndex = this.formularios.findIndex((formulario) => formulario.id === id);
    if (formularioIndex !== -1) {
      this.formularios.splice(formularioIndex, 1);
      this.componente.next("Compras");
    }
  }
}
