import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Venta } from '../models/venta';
@Injectable({
  providedIn: 'root'
})
export class VentaService {

  private baseEndpoint = '/api/ventas';
  private cabecera: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  //obtener venta
  public selectVenta(): Observable<Venta[]>{
    return this.http.get<Venta[]>(this.baseEndpoint);
  }
  //obtener una venta 
  public selectVentaID(idVenta: number): Observable<Venta>{
    return this.http.get<Venta>(`${this.baseEndpoint}/${idVenta}`);
  }
  //crear una venta
  public createVenta(venta: Venta): Observable<Venta>{
    return this.http.post<Venta>(this.baseEndpoint, venta, { headers: this.cabecera});
  }
  //editar una venta
  public editVenta(venta: Venta): Observable<Venta>{
    return this.http.put<Venta>(`${this.baseEndpoint}/${venta.idVenta}`, venta , {headers: this.cabecera});
  }
  //eliminar una venta
  public deleteVenta(idVenta: number): Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${idVenta}`);
  }

}
