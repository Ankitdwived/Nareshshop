import { Component,OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {Observable} from 'rxjs';
import { increment } from '../counter-action';
import { decrement,reset } from '../counter-action';
@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {


  public count$:Observable<number>|any;
  constructor(private store:Store<{count:number}>){
    this.count$=store.select('count');
  }

  public increment(){
    this.store.dispatch(increment())
     
  }
  public decrement(){
    this.store.dispatch(decrement());
  }
  public reset(){
    this.store.dispatch(reset());
  }
  ngOnInit(): void {
    
  }
}
