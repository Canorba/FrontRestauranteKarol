import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit {
  addressForm = this.fb.group({
    id: [null, Validators.required],
    nomProducto: [null, Validators.required],
    categoria: [null, Validators.required],
    fechaFabricacion: [null],
    fechaVencimiento: [null]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder,public forms: FormsService,public Api:ApiService) {}
  ngOnInit(): void {
    this.forms.componente.subscribe((res)=>{
    if (res==="Productoes"){
      this.addressForm.setControl("id",new FormControl (this.forms.object.id))
      this.addressForm.setControl("nomProducto",new FormControl (this.forms.object.nomProducto))
      this.addressForm.setControl("categoria",new FormControl (this.forms.object.categoria))
      this.addressForm.setControl("fechaFabricacion",new FormControl (this.forms.object.fechaFabricacion))
      this.addressForm.setControl("fechaVencimiento",new FormControl (this.forms.object.fechaVencimiento))
      
      
    }

    })
  }

  async onSubmit(): Promise<void> {

    const id = this.forms.object.id; 
  try {
    await this.Api.put('Productoes', this.addressForm.value,id);
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



  // onSubmit(): void {
  //   Swal.fire(
  //     'Buen trabajo!',
  //     'Cambios Guardado!',
  //     'success'
  //   )
  // }

  }
}