import { Component } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {

  constructor(public api: ApiService) { }

  ngOnInit(): void {
    this.GetUsuario();
    this.PostUsuario();
  }
  

  public GetUsuario() {
    this.api.get("Usuario")
  }
  public PostUsuario() {
    this.api.post("Usuario", )
  }


}
