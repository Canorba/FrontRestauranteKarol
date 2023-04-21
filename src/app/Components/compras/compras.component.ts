import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent  implements OnInit {
  column:Object;
  displayedColumns: string[]=[]
  dataSource!: MatTableDataSource<any>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(public Api: ApiService){
    this.dataSource=new MatTableDataSource();
  }

  ngOnInit(): void {
      this.Getcompra();
  }
  
  public async Getcompra(){
     await this.Api.get("Compras").then((res)=>{
     
      this.displayedColumns=Object.keys(res[0])
        // this.loadTable([res[0]])
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
