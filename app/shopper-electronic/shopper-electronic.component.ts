import { Component,OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-shopper-electronic',
  templateUrl: './shopper-electronic.component.html',
  styleUrls: ['./shopper-electronic.component.css']
})
export class ShopperElectronicComponent implements OnInit{

  public electronic:any[]=[];
  constructor(private api:ApiserviceService){}
 
  ngOnInit(): void {
    this.api.GetSpecificCateory('http://fakestoreapi.com/products/category/electronics').subscribe(res=>this.electronic=res);

    
    
  }
}
