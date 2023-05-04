import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';
import { FormularioPlatilloComponent } 
        from 'src/app/Forms/formulario-platillo/formulario-platillo.component';
import { TableService } from './../../Services/table.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-platillo',
  templateUrl: './platillo.component.html',
  styleUrls: ['./platillo.component.css']
})
export class PlatilloComponent implements OnInit {
  column:Object;
  displayedColumns: string[]=[]
  dataSource!: MatTableDataSource<any>;

  titulo="Platillos";
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public Api: ApiService,public TableService: TableService,public dialog: MatDialog){
    this.dataSource=new MatTableDataSource();
  }

  ngOnInit(): void {
      this.Getplatillo();
  }

  openModal() {
    const dialogRef = this.dialog.open(FormularioPlatilloComponent);

  }



  public async Getplatillo(){
    this.TableService.titleTabla="Platilloes";
    this.TableService.controlador = "Platilloes";
  
       await this.Api.get("Platilloes").then((res)=>{
       
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