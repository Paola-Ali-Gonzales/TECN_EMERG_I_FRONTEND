import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  private baseEndpoint = '/api/product';
  private cabecera: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  //obtener observable de clientes (select)
  public selectClient(): Observable<Producto[]>{
    return this.http.get<Producto[]>(this.baseEndpoint);
  }
  //obtener un cliente 
  public selectClientID(idCliente: number): Observable<Producto>{
    return this.http.get<Producto>(`${this.baseEndpoint}/${idCliente}`);
  }


  public searchProductCriteria(criteria: string):  Observable<Producto[]>{
    return this.http.get<Producto[]>(`${this.baseEndpoint}/filtrar/${criteria}`);
  }
  //crear un cliente
  public createCliente(cliente: Producto): Observable<Producto>{
    return this.http.post<Producto>(this.baseEndpoint, cliente, { headers: this.cabecera});
  }
  //editar un cliente
  public editCliente(cliente: Producto): Observable<Producto>{
    return this.http.put<Producto>(`${this.baseEndpoint}/${cliente.productID}`, cliente , {headers: this.cabecera});
  }
  //eliminar un cliente
  public deleteCliente(idCliente: number): Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${idCliente}`);
  }

}
