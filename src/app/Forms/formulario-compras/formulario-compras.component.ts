import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-compras',
  templateUrl: './formulario-compras.component.html',
  styleUrls: ['./formulario-compras.component.css']
})
export class FormularioComprasComponent implements OnInit {
  addressForm = this.fb.group({
    fechaCompra: [null, Validators.required],
    fechaDespacho: [null, Validators.required],
    tipoCompra: [null, Validators.required],
    idProveedor: [null, Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder,public forms: FormsService) {}
  ngOnInit(): void {
    this.forms.componente.subscribe((res)=>{
    if (res==="Compras"){
      this.addressForm.setControl("tipoCompra",new FormControl (this.forms.object.tipoCompra))
      this.addressForm.setControl("idProveedor",new FormControl (this.forms.object.idProveedor))
      this.addressForm.setControl("fechaCompra",new FormControl (this.forms.object.fechaCompra))
      this.addressForm.setControl("fechaDespacho",new FormControl (this.forms.object.fechaDespacho))
      
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
