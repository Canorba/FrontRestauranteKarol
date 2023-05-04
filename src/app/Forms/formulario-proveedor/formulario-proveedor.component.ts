import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-proveedor',
  templateUrl: './formulario-proveedor.component.html',
  styleUrls: ['./formulario-proveedor.component.css']
})
export class FormularioProveedorComponent {
  addressForm = this.fb.group({
    nombreProveedor: [null, Validators.required],
    nit: [null, Validators.maxLength(14)],
    correo: [null, Validators.email],
    direccion: [null, Validators.required],
    telefono: [null, Validators.maxLength(12)],
    idProducto: [null, Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder) {}

  onSubmit(): void {
    Swal.fire(
      'Buen trabajo!',
      'Se agrego correctamente!'
    )
  }
}
