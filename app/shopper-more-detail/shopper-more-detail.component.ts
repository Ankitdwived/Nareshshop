import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-shopper-more-detail',
  templateUrl: './shopper-more-detail.component.html',
  styleUrls: ['./shopper-more-detail.component.css']
})
export class ShopperMoreDetailComponent implements OnInit {


  constructor(private route:ActivatedRoute,private api:ApiserviceService){}
public Product:any={};
  ngOnInit(): void {
    this.api.GetProduct(`http://fakestoreapi.com/products/${this.route.snapshot.paramMap.get('id')}`).subscribe(data=>this.Product=data)
  }
}
