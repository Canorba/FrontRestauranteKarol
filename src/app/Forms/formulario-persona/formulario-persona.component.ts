import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.css']
})
export class FormularioPersonaComponent {
  addressForm = this.fb.group({
    numDocumento: [null, Validators.required, Validators.maxLength(12)],
    nombre: [null, Validators.required],
    apellido: [null, Validators.required],
    telefono: [null, Validators.maxLength(12)],
    correo: [null, Validators.email],
    direccion: [null, Validators.required]
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
