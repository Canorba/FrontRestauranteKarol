import { ApiService } from './../../Services/api.service';
import { TableService } from './../../Services/table.service';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-table-template',
  templateUrl: './table-template.component.html',
  styleUrls: ['./table-template.component.css']
})
export class TableTemplateComponent implements OnInit {
  @Input() titulo:string
  column:Object;
  displayedColumns: string[]=[]
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

