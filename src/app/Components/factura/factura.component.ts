import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormularioFacturaComponent } from 'src/app/Forms/formulario-factura/formulario-factura.component';
import { TableService } from './../../Services/table.service';
import { MatDialog } from '@angular/material/dialog';
import { FormsService } from 'src/app/Services/forms.service';


@Component({
  selector: 'app-factura',
  templateUrl:'./factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  column:Object;
  displayedColumns: string[]=[]
  dataSource!: MatTableDataSource<any>;
  titulo="Factura";
  Componenente: String;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public Api: ApiService,public TableService: TableService,public dialog: MatDialog,public forms: FormsService,){
    this.dataSource=new MatTableDataSource();
  }

  ngOnInit(): void {
      this.GetFactura();
  }

  openModal() {
    const dialogRef = this.dialog.open(FormularioFacturaComponent);

  }
  public async GetFactura(){
   
    this.TableService.controlador = "Facturas";
       await this.Api.get("Facturas").then((res)=>{
       
        this.displayedColumns=Object.keys(res[0])
          this.dataSource.data=res
      });
      this.dataSource.paginator=this.paginator;
      this.dataSource.sort=this.sort
    }

  // loadTable(data:any[]){
  //   for(let column in data[0]){
  //     this.displayedColumns.push(column)
  //   }
  // }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}



