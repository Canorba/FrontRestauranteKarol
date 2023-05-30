import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-pedido',
  templateUrl: './formulario-pedido.component.html',
  styleUrls: ['./formulario-pedido.component.css']
})
export class FormularioPedidoComponent implements OnInit{
  addressForm = this.fb.group({
    tipoPedido: [null, Validators.required],
    fechaPedido: [null, Validators.required],
    fechaDespacho: [null, Validators.required],
    tipoEntrega: [null, Validators.required],
    valorEntrega: [null, Validators.required],
    nomPersona: [null, Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder,public forms: FormsService) {}
  ngOnInit(): void {
    this.forms.componente.subscribe((res)=>{
    if (res==="Pedidoes"){
      this.addressForm.setControl("tipoPedido",new FormControl (this.forms.object.tipoPedido))
      this.addressForm.setControl("fechaPedido",new FormControl (this.forms.object.fechaPedido))
      this.addressForm.setControl("fechaDespacho",new FormControl (this.forms.object.fechaDespacho))
      this.addressForm.setControl("tipoEntrega",new FormControl (this.forms.object.tipoEntrega))
      this.addressForm.setControl("valorEntrega",new FormControl (this.forms.object.valorEntrega))
      this.addressForm.setControl("nomPersona",new FormControl (this.forms.object.nomPersona))
      
    }

    })
        
  }

  onSubmit(): void {
    Swal.fire(
      'Buen trabajo!',
      'Cambios Guardado!',
      'success'
    )
  }
}
