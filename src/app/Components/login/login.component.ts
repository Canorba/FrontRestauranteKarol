import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';
import  Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(public loginService: LoginService){}

  user= "" ;
  pass= "" ;
    loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });
  async onSubmit(){

        this.user = this.loginForm.controls["username"].value;
        this.pass = this.loginForm.controls["password"].value;
            if(this.user === "usuario" && this.pass === "1234"){
              Swal.fire(
                'Muy bien',
                'Se ha logueado Correctamente',
                'success'
              )
              localStorage.setItem('login', 'login');
              this.loginService.login.next("login");
            }else{
              Swal.fire({
                icon:'error',
                title:'Ooopss!!!',
                text: 'Datos Fallidos',
                footer: 'Intente con: usuario: usuario y contraseña: 1234'
            })
         }
     }
  }

