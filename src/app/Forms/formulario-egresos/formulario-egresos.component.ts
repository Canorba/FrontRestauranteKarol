import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-egresos',
  templateUrl: './formulario-egresos.component.html',
  styleUrls: ['./formulario-egresos.component.css']
})
export class FormularioEgresosComponent {
  addressForm = this.fb.group({
    tipoEgreso: [null, Validators.required],
    descripcionEgreso: [null, Validators.required],
    fechaPago: [null, Validators.required],
    idProveedor: [null, Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    Swal.fire(
      'Buen trabajo!',
      'Cambios Guardado!',
      'success'
    )
  }
}
