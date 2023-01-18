import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-shopper-detail',
  templateUrl: './shopper-detail.component.html',
  styleUrls: ['./shopper-detail.component.css']
})
export class ShopperDetailComponent implements OnInit{

  constructor(private route:ActivatedRoute,private api:ApiserviceService){}


  public Product:any={};
  public ProductId:number|string=0;
  ngOnInit(): void {
    this.api.GetProduct(`http://fakestoreapi.com/products/${this.route.snapshot.paramMap.get('id')}`).subscribe(data=>this.Product=data);

    
  }
}
