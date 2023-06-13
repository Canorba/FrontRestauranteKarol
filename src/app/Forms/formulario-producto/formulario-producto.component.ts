import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-producto',
  templateUrl: './formulario-producto.component.html',
  styleUrls: ['./formulario-producto.component.css']
})
export class FormularioProductoComponent implements OnInit {
  addressForm = this.fb.group({
    id: [null, Validators.required],
    nomProducto: [null, Validators.required],
    categoria: [null, Validators.required],
    fechaFabricacion: [null],
    fechaVencimiento: [null]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder,public forms: FormsService) {}
  ngOnInit(): void {
    this.forms.componente.subscribe((res)=>{
    if (res==="Productoes"){
      this.addressForm.setControl("id",new FormControl (this.forms.object.id))
      this.addressForm.setControl("nomProducto",new FormControl (this.forms.object.nomProducto))
      this.addressForm.setControl("categoria",new FormControl (this.forms.object.categoria))
      this.addressForm.setControl("fechaFabricacion",new FormControl (this.forms.object.fechaFabricacion))
      this.addressForm.setControl("fechaVencimiento",new FormControl (this.forms.object.fechaVencimiento))
      
      
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
