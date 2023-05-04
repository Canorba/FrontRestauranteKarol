import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormularioPedidoComponent } from 'src/app/Forms/formulario-pedido/formulario-pedido.component';
import { TableService } from './../../Services/table.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  column:Object;
  displayedColumns: string[]=[]
  dataSource!: MatTableDataSource<any>;
  titulo="Pedidos";
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public Api: ApiService,public TableService: TableService,public dialog: MatDialog){
    this.dataSource=new MatTableDataSource();
  }

  ngOnInit(): void {
      this.Getpedidos();
  }

  openModal() {
    const dialogRef = this.dialog.open(FormularioPedidoComponent);

  }

  public async Getpedidos(){
     
    this.TableService.controlador = "Pedidoes";
    await this.Api.get("Pedidoes").then((res)=>{
    
     this.displayedColumns=Object.keys(res[0])
       this.dataSource.data=res
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
