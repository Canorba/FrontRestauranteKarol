import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit{
  addressForm = this.fb.group({
    rolUsu: [null, Validators.required],
    nomUsuario: [null, Validators.required],
    apePersona: [null, Validators.required],
    password: [null, Validators.required],
    estadoUsu: [null, Validators.required],
    telPersona: [null, Validators.required],
    idUsuario: [null, Validators.required]
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder,public forms: FormsService) {}
  ngOnInit(): void {
    this.forms.componente.subscribe((res)=>{
    if (res==="Usuarios"){
      this.addressForm.setControl("rolUsu",new FormControl (this.forms.object.rolUsu))
      this.addressForm.setControl("nomUsuario",new FormControl (this.forms.object.nomUsuario))
      this.addressForm.setControl("apePersona",new FormControl (this.forms.object.apePersona))
      this.addressForm.setControl("password",new FormControl (this.forms.object.password))
      this.addressForm.setControl("estadoUsu",new FormControl (this.forms.object.estadoUsu))
      this.addressForm.setControl("telPersona",new FormControl (this.forms.object.telPersona))
      this.addressForm.setControl("idUsuario",new FormControl (this.forms.object.idUsuario))
      
      
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
