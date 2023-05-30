import { Dialog } from '@angular/cdk/dialog';
import { ApiService } from './../../Services/api.service';
import { TableService } from './../../Services/table.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import { FormularioComprasComponent } from 'src/app/Forms/formulario-compras/formulario-compras.component';
import { MatDialog } from '@angular/material/dialog';
import { FormsService } from 'src/app/Services/forms.service';
import { FormularioEgresosComponent } from 'src/app/Forms/formulario-egresos/formulario-egresos.component';
import { FormularioFacturaComponent } from 'src/app/Forms/formulario-factura/formulario-factura.component';
import { FormularioPedidoComponent } from 'src/app/Forms/formulario-pedido/formulario-pedido.component';
import { FormularioInventarioComponent } from 'src/app/Forms/formulario-inventario/formulario-inventario.component';
import { FormularioPersonaComponent } from 'src/app/Forms/formulario-persona/formulario-persona.component';
import { FormularioPlatilloComponent } from 'src/app/Forms/formulario-platillo/formulario-platillo.component';
import { FormularioProductoComponent } from 'src/app/Forms/formulario-producto/formulario-producto.component';
import { FormularioProveedorComponent } from 'src/app/Forms/formulario-proveedor/formulario-proveedor.component';
import { FormularioUsuarioComponent } from 'src/app/Forms/formulario-usuario/formulario-usuario.component';


@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.css']
})
export class TableTemplateComponent implements OnInit {
  @Input() titulo:string
  @Input() Componenente: String;
  column:Object;
  displayedColumns: string[]=[]
  acciones: any = "Acciones"
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public Api: ApiService, public TableService:TableService, public dialog: MatDialog, public forms:FormsService){
    this.dataSource=new MatTableDataSource();
  }

  ngOnInit(): void {
    
  this.datosTabla();
  }

 
  public async datosTabla(){
   
    await this.Api.get(this.TableService.controlador).then((res)=>{
      this.displayedColumns=Object.keys(res[0])
      this.dataSource.data=res
      this.TableService.dataSource=res
      this.displayedColumns.push(this.acciones) 
    });
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(id: string) {
    switch (this.Componenente) {
      case "Compras":
        this.forms.deleteFormulario(id);
        this.forms.componente.next("Compras");
        this.dialog.open(FormularioComprasComponent);
        break;
      default:
        break;
    }
  }
  

  edit(object:any){

 switch(this.Componenente){
   case "Compras":
    this.forms.object=object
       this.forms.componente.next("Compras")
      this.dialog.open( FormularioComprasComponent);
    break;
    
   case "Egresoes":
       this.forms.object=object
          this.forms.componente.next("Egresoes")
         this.dialog.open( FormularioEgresosComponent);
         break;

    case "Facturas":
          this.forms.object=object
             this.forms.componente.next("Facturas")
            this.dialog.open( FormularioFacturaComponent);
            break;

    case "Inventarios":
              this.forms.object=object
                 this.forms.componente.next("Inventarios")
                this.dialog.open( FormularioInventarioComponent);
                break;

    case "Pedidoes":
                  this.forms.object=object
                     this.forms.componente.next("Pedidoes")
                    this.dialog.open( FormularioPedidoComponent);
                    break;
    case "Personas":
                      this.forms.object=object
                         this.forms.componente.next("Personas")
                        this.dialog.open( FormularioPersonaComponent);
                        break;
    case "Platilloes":
                          this.forms.object=object
                             this.forms.componente.next("Platilloes")
                            this.dialog.open( FormularioPlatilloComponent);
                            break;
    case "Productoes":
                          this.forms.object=object
                             this.forms.componente.next("Productoes")
                            this.dialog.open( FormularioProductoComponent);
                            break;
    case "Proveedors":
                          this.forms.object=object
                             this.forms.componente.next("Proveedors")
                            this.dialog.open( FormularioProveedorComponent);
                            break;
    case "Usuarios":
                          this.forms.object=object
                             this.forms.componente.next("Usuarios")
                            this.dialog.open( FormularioUsuarioComponent);
                            break;
 }
  }
}