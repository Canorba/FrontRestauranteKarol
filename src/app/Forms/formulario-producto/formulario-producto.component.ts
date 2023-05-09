import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent {
  addressForm = this.fb.group({
    nombreProducto: [null, Validators.required],
    categoria: [null, Validators.required],
    fechaFabricacion: [null],
    fechaVencimiento: [null]
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
