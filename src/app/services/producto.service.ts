import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Producto } from '../models/producto';
import { CommonService } from './common.service';
import { BASE_ENDPOINT } from '../config/app';
@Injectable({
  providedIn: 'root'
})
export class ProductService extends CommonService<Producto> {
  protected override baseEndpoint = BASE_ENDPOINT + '/product';
  
  constructor(http: HttpClient) { 
    super(http);
  }

  //editar un producto
  public editProducto(producto: Producto): Observable<Producto>{
    return this.http.put<Producto>(`${this.baseEndpoint}/${producto.productID}`, producto , {headers: this.cabeceras});
  }

  public findByNameOrDescription(term: string): Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.baseEndpoint}/filtrar/${term}`);
  }
}