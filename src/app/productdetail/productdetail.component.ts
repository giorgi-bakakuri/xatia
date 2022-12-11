import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { List } from '../interface/list';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {
  constructor(public serve: ProductService, public routers: ActivatedRoute){}
   
  newpsroducte!: any;

  ngOnInit(): void {
    this.routers.paramMap.subscribe((el: any) => {
      this.newpsroducte = this.serve.products.filter((item: List) => item.id == el.params.id)
    })
    
  }
}
