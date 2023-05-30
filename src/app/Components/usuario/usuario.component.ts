import { MatDialog } from '@angular/material/dialog';
import { TableService } from './../../Services/table.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormularioUsuarioComponent } from 'src/app/Forms/formulario-usuario/formulario-usuario.component';
import { FormsService } from 'src/app/Services/forms.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  column:Object;
  displayedColumns: string[]=[]
  dataSource!: MatTableDataSource<any>;
  Componenente: String;
  titulo="Usuarios"
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public Api: ApiService, public TableService: TableService,public dialog: MatDialog,public forms: FormsService){
    this.dataSource=new MatTableDataSource();
  }

  ngOnInit(): void {
      this.GetUsuario();
  }

  openModal() {
    const dialogRef = this.dialog.open(FormularioUsuarioComponent);

  }



  public async GetUsuario(){
    this.TableService.titleTabla="Usuarios";
  this.TableService.controlador = "Usuarios";
     await this.Api.get("Usuarios").then((res)=>{
     
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
