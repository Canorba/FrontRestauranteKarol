import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-inventario',
  templateUrl: './formulario-inventario.component.html',
  styleUrls: ['./formulario-inventario.component.css']
})
export class FormularioInventarioComponent {
  addressForm = this.fb.group({
    fechaIngreso: [null, Validators.required],
    cantidad: [null, Validators.required],
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
