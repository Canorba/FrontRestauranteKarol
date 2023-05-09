import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-pedido',
  templateUrl: './formulario-pedido.component.html',
  styleUrls: ['./formulario-pedido.component.css']
})
export class FormularioPedidoComponent {
  addressForm = this.fb.group({
    tipoPedido: [null, Validators.required],
    fechaPedido: [null, Validators.required],
    fechaDespacho: [null, Validators.required],
    tipoEntrega: [null, Validators.required],
    varloEntrega: [null, Validators.required],
    idPersona: [null, Validators.required]
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
