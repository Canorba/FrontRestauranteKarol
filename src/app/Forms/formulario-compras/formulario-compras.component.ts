import { TableTemplateComponent } from './../../Components/TableTemplate/table-template.component';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';
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
    idProveedor: [null, Validators.required],
    id: [null, Validators.required],
    nomProveedor: [null, Validators.required],
    correoProveedor: [null, Validators.required],
    telProveedor: [null, Validators.required],
    nomProducto: [null, Validators.required],
    categoria: [null, Validators.required],

   
    
  });

  hasUnitNumber = false;

  constructor(private fb: FormBuilder,public forms: FormsService,public Api:ApiService) {}
  ngOnInit(): void {
    this.forms.componente.subscribe((res)=>{
    if (res==="Compras"){
      this.addressForm.setControl("tipoCompra",new FormControl (this.forms.object.tipoCompra))
      this.addressForm.setControl("idProveedor",new FormControl (this.forms.object.idProveedor))
      this.addressForm.setControl("fechaCompra",new FormControl (this.forms.object.fechaCompra))
      this.addressForm.setControl("fechaDespacho",new FormControl (this.forms.object.fechaDespacho))
      this.addressForm.setControl("id",new FormControl (this.forms.object.id))
      this.addressForm.setControl("nomProveedor",new FormControl (this.forms.object.nomProveedor))
      this.addressForm.setControl("correoProveedor",new FormControl (this.forms.object.correoProveedor))
      this.addressForm.setControl("telProveedor",new FormControl (this.forms.object.telProveedor))
      this.addressForm.setControl("nomProducto",new FormControl (this.forms.object.nomProducto))
      this.addressForm.setControl("categoria",new FormControl (this.forms.object.categoria))
   
     
      
    }
    })
  }
  
  edit(): void {
    interface EditUsuario {
      id: string;
      fechasCompra: string;
      fechaDespacho: string;
      tipoCompra: string;
      idProveedor: string;
      nomProveedor: string;
      correoProveedor: string;
      telProveedor: string;
      nomProducto: string;
      categoria: string;
     

    }
    
    this.forms.componente.subscribe(() => {
      this.forms.object.id = this.addressForm.get('id').value;
      this.forms.object.fechaCompra = this.addressForm.get('fechaCompra').value;
      this.forms.object.fechaDespacho = this.addressForm.get('fechaDespacho').value;
      this.forms.object.tipoCompra = this.addressForm.get('tipoCompra').value;
      this.forms.object.idProveedor = this.addressForm.get('idProveedor').value;
      this.forms.object.nomProveedor = this.addressForm.get('nomProveedor').value;
      this.forms.object.correoProveedor = this.addressForm.get('correoProveedor').value;
      this.forms.object.telProveedor = this.addressForm.get('telProveedor').value;
      this.forms.object.nomProducto = this.addressForm.get('nomProducto').value;
      this.forms.object.categoria = this.addressForm.get('categoria').value;


 
     

      const editUsuario: EditUsuario = {
        fechasCompra: this.forms.object.fechaCompra,
        fechaDespacho: this.forms.object.fechaDespacho,
        idProveedor: this.forms.object.idProveedor,
        tipoCompra: this.forms.object.tipoCompra,
        id: this.forms.object.id,
        nomProveedor: this.forms.object.nomProveedor,
        correoProveedor: this.forms.object.correoProveedor,
        telProveedor: this.forms.object.telProveedor,
        nomProducto: this.forms.object.nomProducto,
        categoria: this.forms.object.categoria,
       
  
      };

      console.log(editUsuario);
      this.Api.put('Compras', editUsuario, editUsuario.id)
    });

    if (this.addressForm.valid) {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      });
    } else {
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Datos incompletos',
        showConfirmButton: false,
        timer: 1500
      });
    }
  }
}

