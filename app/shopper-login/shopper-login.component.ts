import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-shopper-login',
  templateUrl: './shopper-login.component.html',
  styleUrls: ['./shopper-login.component.css']
})
export class ShopperLoginComponent implements OnInit {
public Customers:any[]=[];
  constructor(private cookie:CookieService,private route:Router,private api:ApiserviceService){}
  ngOnInit(): void {
    this.api.GetCustomers().subscribe(data=>this.Customers=data);
  }

  public LoginClick(UserDetails:any){
    for(var customer of this.Customers){
     if(customer.userId==UserDetails.username){
      this.cookie.set("username",customer.userId);
      this.route.navigate(['electronics']);
      break;
    }else{
      this.route.navigate(['error']);
    }
  }
}
}