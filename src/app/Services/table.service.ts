import { MatTableDataSource } from '@angular/material/table';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(ApiService: ApiService ) { }
  responseTable:any
  displayedColumnsTable: String[]
  titleTabla:String
  dataSource:any 
  acciones:any
  controlador = '';
}
    