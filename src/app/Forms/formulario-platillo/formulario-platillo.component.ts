import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { FormsService } from 'src/app/Services/forms.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-formulario-platillo',
  templateUrl: './formulario-platillo.component.html',
  styleUrls: ['./formulario-platillo.component.css']
})
export class FormularioPlatilloComponent implements OnInit {
  addressForm = this.fb.group({
    nomPlatillo: [null, Validators.required],
    tipoPlatillo: [null, Validators.required],
    descripPlat: [null, Validators.required]
  });

  hasUnitNumber = false;
  
  constructor(private fb: FormBuilder,public forms: FormsService) {}
  ngOnInit(): void {
    this.forms.componente.subscribe((res)=>{
    if (res==="Platilloes"){
      this.addressForm.setControl("nomPlatillo",new FormControl (this.forms.object.nomPlatillo))
      this.addressForm.setControl("tipoPlatillo",new FormControl (this.forms.object.tipoPlatillo))
      this.addressForm.setControl("descripPlat",new FormControl (this.forms.object.descripPlat))
      
      
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
