import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
//import { CookieService } from 'ngx-cookie-service/public-api';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})
export class ElectronicsGuard implements CanActivate {
 // constructor(private cookie:CookieService){}
  canActivate(){
    return true;
  }
  
}
