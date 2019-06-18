import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/services/shopping-cart.service';
import { NgForm } from '@angular/forms';
import { ShoppingCart } from 'src/modules/shopping-cart.module';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
  shoppingCart: ShoppingCart;
  shoppingItems: ShoppingCart[];

  constructor(private service: ShoppingCartService) { }

  ngOnInit() {
    this.getShoppingItems();
  }

  saveShoppingItem(form: NgForm){
    this.shoppingCart= form.value;
    debugger;
    this.service.postShoppingCartItem(this.shoppingCart).subscribe((data)=>{
      console.log(data);
      if(data.headers.status = '201'){
        form.reset();
        this.getShoppingItems();
      }
    })
  };

  getShoppingItems(){
    this.service.getShoppingCartItem().subscribe((data)=>{
      this.shoppingItems = data.body;
    })
  };

  deleteShoppingItem(id: number){
    if(confirm('delete confirmation')){
      this.service.deleteShoppingItem(id).subscribe((data)=>{
        if(data.headers.status = '200'){
          this.getShoppingItems();
        }
      })
    }
  };

}
