import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormularioComponent } from 'src/app/formulario/formulario.component';
import { TableService } from './../../Services/table.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  column:Object;
  displayedColumns: string[]=[]
  dataSource!: MatTableDataSource<any>;
  titulo="Inventario";
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public Api: ApiService,public TableService: TableService,public dialog: MatDialog){
    this.dataSource=new MatTableDataSource();
  }

  ngOnInit(): void {
      this.GetInventario();
  }

  openModal() {
    const dialogRef = this.dialog.open(FormularioComponent);

  }

  public async GetInventario(){
    this.TableService.controlador = "Inventarios";
    await this.Api.get("Inventarios").then((res)=>{
    
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



