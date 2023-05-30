import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-egresos',
  templateUrl: './formulario-egresos.component.html',
  styleUrls: ['./formulario-egresos.component.css']
})
export class FormularioEgresosComponent implements OnInit {
  addressForm = this.fb.group({
    tipoEgreso: [null, Validators.required],
    descripEgreso: [null, Validators.required],
    fechaPago: [null, Validators.required],
    idProveedor: [null, Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder,public forms: FormsService) {}
  ngOnInit(): void {
    this.forms.componente.subscribe((res)=>{
    if (res==="Egresoes"){
      this.addressForm.setControl("tipoEgreso",new FormControl (this.forms.object.tipoEgreso))
      this.addressForm.setControl("descripEgreso",new FormControl (this.forms.object.descripEgreso))
      this.addressForm.setControl("fechaPago",new FormControl (this.forms.object.fechaPago))
      this.addressForm.setControl("idProveedor",new FormControl (this.forms.object.idProveedor))
      
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
