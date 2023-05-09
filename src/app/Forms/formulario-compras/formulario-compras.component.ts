import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-compras',
  templateUrl: './formulario-compras.component.html',
  styleUrls: ['./formulario-compras.component.css']
})
export class FormularioComprasComponent {
  addressForm = this.fb.group({
    fechaCompra: [null, Validators.required],
    fechaDespacho: [null, Validators.required],
    tipoCompra: [null, Validators.required],
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
