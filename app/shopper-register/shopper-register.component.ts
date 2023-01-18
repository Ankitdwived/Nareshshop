import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-shopper-register',
  templateUrl: './shopper-register.component.html',
  styleUrls: ['./shopper-register.component.css']
})
export class ShopperRegisterComponent implements OnInit {

constructor(private api:ApiserviceService,private route:Router){}

  ngOnInit(): void {
    
  }
  public RegisterClick(customer:any){
    console.log("hello")
this.api.RegisterCustomer(customer).subscribe();
alert("registration successfully");
this.route.navigate(['login']);

  }
}
