import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
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

  constructor(private fb: FormBuilder,public forms: FormsService , public Api:ApiService) {}
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

  async onSubmit(): Promise<void> {

    const id = this.forms.object.id;

   
    try {
      await this.Api.put('Personas', this.addressForm.value,id);
      console.log('Datos guardados exitosamente.');
      Swal.fire({
        icon: 'success',
        title: 'Éxito',
        text: 'Los cambios se han guardado exitosamente.',
        confirmButtonText: 'Aceptar'
      });
    } catch (error) {
      console.error('Error al guardar los datos:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Se produjo un error al guardar los cambios.',
        confirmButtonText: 'Aceptar'
      });
    }
  }
}
  
  // onSubmit(): void {
  //   Swal.fire(
  //     'Buen trabajo!',
  //     'Cambios Guardado!',
  //     'success'
  //   )
  // }
