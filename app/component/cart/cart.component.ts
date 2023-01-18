import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  constructor(){}

  ngOnInit(): void {
    
  }
  public CartTitle(msg:string):string{
    return msg;

  }
 public Total(qty:number,price:number):number{
  return qty*price;
 }
}
