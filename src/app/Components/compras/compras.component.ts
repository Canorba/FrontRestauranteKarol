import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormularioComprasComponent } from 'src/app/Forms/formulario-compras/formulario-compras.component';
import { TableService } from './../../Services/table.service';
import { MatDialog } from '@angular/material/dialog';
import { FormsService } from 'src/app/Services/forms.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent  implements OnInit {
  column:Object;
  displayedColumns: string[]=[]
  dataSource!: MatTableDataSource<any>;
  Componenente: String;
  titulo="Compras";
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public Api: ApiService,public TableService: TableService,public dialog: MatDialog, public forms: FormsService){
    this.dataSource=new MatTableDataSource();
  }

  ngOnInit(): void {
      this.Getcompra();
     
    
  }
  openModal() {
    const dialogRef = this.dialog.open(FormularioComprasComponent);

  }
  public async Getcompra(){
    
    this.TableService.titleTabla="Compras";
    this.TableService.controlador = "Compras";
       await this.Api.get("Compras").then((res)=>{
       
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
