import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-factura',
  templateUrl: './formulario-factura.component.html',
  styleUrls: ['./formulario-factura.component.css']
})
export class FormularioFacturaComponent implements OnInit {
  addressForm = this.fb.group({
    fechaFactura: [null, Validators.required],
    cantidad: [null, Validators.required],
    valor: [null, Validators.required],
    total: [null, Validators.required],
    estadoFactura: [null, Validators.required],
    idFactura: [null, Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder,public forms: FormsService) {}
  ngOnInit(): void {
    this.forms.componente.subscribe((res)=>{
    if (res==="Facturas"){
      this.addressForm.setControl("fechaFactura",new FormControl (this.forms.object.fechaFactura))
      this.addressForm.setControl("cantidad",new FormControl (this.forms.object.cantidad))
      this.addressForm.setControl("valor",new FormControl (this.forms.object.valor))
      this.addressForm.setControl("total",new FormControl (this.forms.object.total))
      this.addressForm.setControl("estadoFactura",new FormControl (this.forms.object.estadoFactura))
      this.addressForm.setControl("idFactura",new FormControl (this.forms.object.idFactura))
      
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
