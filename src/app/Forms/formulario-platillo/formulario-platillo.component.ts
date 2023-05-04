import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-platillo',
  templateUrl: './formulario-platillo.component.html',
  styleUrls: ['./formulario-platillo.component.css']
})
export class FormularioPlatilloComponent {
  addressForm = this.fb.group({
    nombrePlatillo: [null, Validators.required],
    tipoPlatillo: [null, Validators.required],
    descripcionPlatillo: [null, Validators.required]
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
