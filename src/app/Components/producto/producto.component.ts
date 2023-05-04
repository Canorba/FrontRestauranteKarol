import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormularioProductoComponent } 
        from 'src/app/Forms/formulario-producto/formulario-producto.component';
import { TableService } from './../../Services/table.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  column:Object;
  displayedColumns: string[]=[]
  dataSource!: MatTableDataSource<any>;
  titulo="Productos";
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public Api: ApiService,public TableService: TableService,public dialog: MatDialog){
    this.dataSource=new MatTableDataSource();
  }

  ngOnInit(): void {
      this.Getproducto();
  }

  openModal() {
    const dialogRef = this.dialog.open(FormularioProductoComponent);

  }

  public async Getproducto(){
    this.TableService.titleTabla="Productoes";
    this.TableService.controlador = "Productoes";
  
       await this.Api.get("Productoes").then((res)=>{
       
        this.displayedColumns=Object.keys(res[0])
          // this.loadTable([res[0]])
          this.dataSource.data=res
          this.TableService.dataSource=res;
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
