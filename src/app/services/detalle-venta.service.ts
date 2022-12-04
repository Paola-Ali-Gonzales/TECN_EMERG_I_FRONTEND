import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetalleVenta } from '../models/detalle-venta';
@Injectable({
  providedIn: 'root'
})
export class DetalleVentaService {
  private baseEndpoint = 'http://localhost:8090/api/detalle-venta';
  private cabecera: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  //obtener detalles venta
  public selectDetalleVenta(): Observable<DetalleVenta[]>{
    return this.http.get<DetalleVenta[]>(this.baseEndpoint);
  }
  //obtener un detalle venta 
  public selectDetalleVentaID(idDetalleVenta: number): Observable<DetalleVenta>{
    return this.http.get<DetalleVenta>(`${this.baseEndpoint}/${idDetalleVenta}`);
  }
  //crear un detalle venta
  public createDetalleVenta(detalleVenta: DetalleVenta): Observable<DetalleVenta>{
    return this.http.post<DetalleVenta>(this.baseEndpoint, detalleVenta, { headers: this.cabecera});
  }
  //editar un detalle venta
  public editDetalleVenta(detalleVenta: DetalleVenta): Observable<DetalleVenta>{
    return this.http.put<DetalleVenta>(`${this.baseEndpoint}/${detalleVenta.idDetalleVenta}`, detalleVenta , {headers: this.cabecera});
  }
  //eliminar un detalle venta
  public deleteDetalleVenta(idDetalleVenta: number): Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${idDetalleVenta}`);
  }
}
