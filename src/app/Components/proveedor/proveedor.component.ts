import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormularioProveedorComponent } 
        from 'src/app/Forms/formulario-proveedor/formulario-proveedor.component';
import { TableService } from './../../Services/table.service';
import { MatDialog } from '@angular/material/dialog';
import { FormsService } from 'src/app/Services/forms.service';

@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css']
})
export class ProveedorComponent implements OnInit {
  column:Object;
  displayedColumns: string[]=[]
  dataSource!: MatTableDataSource<any>;
  Componenente: String;
  titulo="Proveedores";
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public Api: ApiService,public TableService: TableService,public dialog: MatDialog,public forms: FormsService){
    this.dataSource=new MatTableDataSource();
  }

  ngOnInit(): void {
    this.Getproveedor();
}

openModal() {
  const dialogRef = this.dialog.open(FormularioProveedorComponent);

}

public async Getproveedor(){
  this.TableService.titleTabla="Proveedors";
  this.TableService.controlador = "Proveedors";

     await this.Api.get("Proveedors").then((res)=>{
     
      this.displayedColumns=Object.keys(res[0])
        
        this.dataSource.data=res
        this.TableService.dataSource=res;
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
}