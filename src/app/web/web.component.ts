import { Component, OnInit } from '@angular/core';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-web',
  templateUrl: './web.component.html',
  styleUrls: ['./web.component.scss']
})
export class WebComponent implements OnInit {

  ProductList:any

  constructor(private api:ApisService ){}

  ngOnInit(): void {
    this.api.getproduct().subscribe(res=>{this.ProductList=res})
  }

  

}
