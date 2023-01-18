import { Component,OnInit } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-material-demo',
  templateUrl: './material-demo.component.html',
  styleUrls: ['./material-demo.component.css']
})
export class MaterialDemoComponent implements OnInit {
public Products:any[]=[];

public electronic:any[]=[];

  constructor(private api:ApiserviceService){}

  ngOnInit(): void {
this.api.GetProducts().subscribe(data=>
  this.Products=data);

  

    
  }
  }


