import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent implements OnInit{
  addressForm = this.fb.group({
    numDoc: [null, Validators.required, Validators.maxLength(12)],
    nomPersona: [null, Validators.required],
    apePersona: [null, Validators.required],
    telPersona: [null, Validators.maxLength(12)],
    correoPersona: [null, Validators.email],
    direccion: [null, Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder,public forms: FormsService) {}
  ngOnInit(): void {
    this.forms.componente.subscribe((res)=>{
    if (res==="Personas"){
            this.addressForm.setControl("numDoc",new FormControl (this.forms.object.numDoc))
            this.addressForm.setControl("nomPersona",new FormControl (this.forms.object.nomPersona))
            this.addressForm.setControl("apePersona",new FormControl (this.forms.object.apePersona))
            this.addressForm.setControl("telPersona",new FormControl (this.forms.object.telPersona))
            this.addressForm.setControl("correoPersona",new FormControl (this.forms.object.correoPersona))
            this.addressForm.setControl("direccion",new FormControl (this.forms.object.direccion))
          }
      })        
  }
  
  onSubmit(): void {
    Swal.fire(
      'Buen trabajo!',
      'Cambios Guardado!',
      'success'
    )
  }
}
