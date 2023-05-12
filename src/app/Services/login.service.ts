import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginService implements OnInit{

    constructor() {}

    login = new BehaviorSubject(localStorage.getItem('login') || "" );
    
    ngOnInit(): void {
        this.login.next(localStorage.getItem('login') || "");
    }
}