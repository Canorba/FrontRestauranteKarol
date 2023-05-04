import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent {
  addressForm = this.fb.group({
    rolUsuario: [null, Validators.required],
    nombreUsuario: [null, Validators.required],
    contraseña: [null, Validators.required],
    estado: [null, Validators.required],
    idPersona: [null, Validators.required]
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
