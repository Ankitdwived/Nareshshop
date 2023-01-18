import { Component,OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-shopper-jewelery',
  templateUrl: './shopper-jewelery.component.html',
  styleUrls: ['./shopper-jewelery.component.css']
})
export class ShopperJeweleryComponent implements OnInit {

  public jewelery:any[]=[];
  constructor(private api:ApiserviceService){}
 
  ngOnInit(): void {
    this.api.GetSpecificCateory('http://fakestoreapi.com/products/category/jewelery').subscribe(res=>this.jewelery=res);

    
    
  }
}
