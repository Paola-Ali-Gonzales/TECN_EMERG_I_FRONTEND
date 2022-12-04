import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {


  private baseEndpoint = '/api/ventas/cliente';
  private cabecera: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  //obtener observable de clientes (select)
  public selectClient(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.baseEndpoint);
  }
  //obtener un cliente 
  public selectClientID(idCliente: number): Observable<Cliente>{
    return this.http.get<Cliente>(`${this.baseEndpoint}/${idCliente}`);
  }

  public searchProductCriteria(criteria: string):  Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.baseEndpoint}/filtrar/${criteria}`);
  }
  //crear un cliente
  public createCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.baseEndpoint, cliente, { headers: this.cabecera});
  }
  //editar un cliente
  public editCliente(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(`${this.baseEndpoint}/${cliente.idCliente}`, cliente , {headers: this.cabecera});
  }
  //eliminar un cliente
  public deleteCliente(idCliente: number): Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${idCliente}`);
  }

}
