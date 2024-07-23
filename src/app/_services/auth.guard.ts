import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router  } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from "./login.service";


@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private loginService: LoginService, private _router: Router) { }
    canActivate(): boolean {
        if (this.loginService.isLoged()) {
            return true;
        } else {
            this._router.navigate(['tr','home'])
            return false
        }
    }

}