import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-inventario',
  templateUrl: './formulario-inventario.component.html',
  styleUrls: ['./formulario-inventario.component.css']
})
export class FormularioInventarioComponent implements OnInit {
  addressForm = this.fb.group({
    nomProducto: [null, Validators.required],
    categoria: [null, Validators.required],
    fechaIngreso: [null, Validators.required],
    existencias: [null, Validators.required],
    
  });

  hasUnitNumber = false;
  
  constructor(private fb: FormBuilder,public forms: FormsService) {}
  ngOnInit(): void {
    this.forms.componente.subscribe((res)=>{
    if (res==="Inventarios"){
      this.addressForm.setControl("nomProducto",new FormControl (this.forms.object.nomProducto))
      this.addressForm.setControl("categoria",new FormControl (this.forms.object.categoria))
      this.addressForm.setControl("fechaIngreso",new FormControl (this.forms.object.fechaIngreso))
      this.addressForm.setControl("existencias",new FormControl (this.forms.object.existencias))
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
