import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ShoppingCart } from 'src/modules/shopping-cart.module';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";
import { analyzeAndValidateNgModules, ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private http: HttpClient) { }

  postShoppingCartItem(item: ShoppingCart): Observable<any> {
    var url = `${environment.back_end_url}/ShoppingCarts`;
    return this.http.post<any>(url, item, { observe: 'response' }).pipe(
      map(resp => {
        return resp;
      })
    )
  }

  getShoppingCartItem(): Observable<any> {
    var url = `${environment.back_end_url}/ShoppingCarts`;
    return this.http.get(url, { observe: 'response' }).pipe(
      map(resp => {
        return resp;
      })
    )
  };

  deleteShoppingItem(id: number): Observable<any>{
    var url=`${environment.back_end_url}/ShoppingCarts/${id}`;
    return this.http.delete(url, {observe: 'response'}).pipe(
      map(resp=>{
        return resp;
      })
    )
  }

}
