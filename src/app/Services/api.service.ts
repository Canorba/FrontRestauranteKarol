import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public http: HttpClient) { }
  url = "https://localhost:7008/api/";


  public async get(controlador: string) {
    var response: any
    await this.http.get(this.url + controlador).toPromise().then(res => {
      response = res
      console.log(response);
    });
    return response
  }
  

  public async getById(controlador: string, id:any) {
    var response: any
    await this.http.get(this.url + controlador+"/"+ id).subscribe(res => {
      response = res
    });
    
    return response
  }

  public async post(controlador: string, body:string) {
    var response: any
    await this.http.post(this.url + controlador,body).subscribe(res => {
      response = res
    });
    return response
  }

  public async put(controlador: string, body:any, id:any) {
    var response: any
    await this.http.put(this.url + controlador+"/"+ id, body).subscribe(res => {
      response = res
    });
    return response
  }

  public async delete(controlador: string, id:any) {
    var response: any
    await this.http.delete(this.url + controlador+"/"+ id).subscribe(res => {
      response = res
    });
    return response
  }

}

