import { ApiService } from './../../Services/api.service';
import { TableService } from './../../Services/table.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.css']
})
export class TableTemplateComponent implements OnInit {
  @Input() component:string
  @Input() titulo:string
  column:Object;
  displayedColumns: string[]=[]
  acciones: any = "Acciones"
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public Api: ApiService, public TableService:TableService){
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

  delete(id: any){
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        switch (this.component) {
          case "compras":
            this.Api.delete("compras",id)
            break;
          case "egresos":
            this.Api.delete("egresos",id)
            break;
          case "factura":
            this.Api.delete("factura",id)
            break;
          case "inventario":
            this.Api.delete("inventario",id)
            break;
          case "pedido":
            this.Api.delete("pedido",id)
            break;
          case "persona":
            this.Api.delete("PersonaComponent",id)
            break;
          case "platillo":
            this.Api.delete("platillo",id)
            break;
          case "producto":
            this.Api.delete("producto",id)
            break;
          case "proveedor":
            this.Api.delete("proveedor",id)
            break; 
        }       
        swalWithBootstrapButtons.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Your imaginary file is safe :)',
          'error'
        )
      }
    })
  }

  edit(){
    
  }
}

