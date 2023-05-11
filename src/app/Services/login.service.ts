import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginService implements OnInit{

    constructor() {}

    Login = new BehaviorSubject (localStorage.getItem('login')|| "" );
    ngOnInit(): void {
        this.Login.next(localStorage.getItem('login') || "");
    }


}