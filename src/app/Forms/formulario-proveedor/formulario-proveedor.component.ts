import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-proveedor',
  templateUrl: './formulario-proveedor.component.html',
  styleUrls: ['./formulario-proveedor.component.css']
})
export class FormularioProveedorComponent implements OnInit {
  addressForm = this.fb.group({
    nomProveedor: [null, Validators.required],
    idProveedor: [null, Validators.required, Validators.maxLength(14)],
    correoProveedor: [null, Validators.email],
    dirProveedor: [null, Validators.required],
    telProveedor: [null, Validators.required, Validators.maxLength(12)],
    
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder,public forms: FormsService) {}
  ngOnInit(): void {
    this.forms.componente.subscribe((res)=>{
    if (res==="Proveedors"){
      this.addressForm.setControl("nomProveedor",new FormControl (this.forms.object.nomProveedor))
      this.addressForm.setControl("idProveedor",new FormControl (this.forms.object.idProveedor))
      this.addressForm.setControl("correoProveedor",new FormControl (this.forms.object.correoProveedor))
      this.addressForm.setControl("dirProveedor",new FormControl (this.forms.object.dirProveedor))
      this.addressForm.setControl("telProveedor",new FormControl (this.forms.object.telProveedor))
      
      
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
