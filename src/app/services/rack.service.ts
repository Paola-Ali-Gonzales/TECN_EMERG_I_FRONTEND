import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rack } from '../models/rack';
import { CommonService } from './common.service';
import { BASE_ENDPOINT } from '../config/app';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class RackService extends CommonService<Rack> {

  protected override baseEndpoint = BASE_ENDPOINT + '/rack';

  constructor(http: HttpClient) {
    super(http);
  }

  public findByDescription(term: string): Observable<Rack[]> {
    return this.http.get<Rack[]>(`${this.baseEndpoint}/filtrar/${term}`);
  }

  public modify(rack: Rack): Observable<Rack> {
    return this.http.put<Rack>(`${this.baseEndpoint}/${rack.idRack}`, rack,
      { headers: this.cabeceras });
  }

  /*ASIGNA PRODUCTOS A RACKS */
  addProduct(rack: Rack, productos: Producto[]): Observable<Rack> {
    return this.http.put<Rack>(`${this.baseEndpoint}/${rack.idRack}/asignar-productos`,
      productos,
      { headers: this.cabeceras });
  }

  /*BORRA PRODUCTO A RACKS*/
  deleteProduct(rack: Rack, producto: Producto): Observable<Rack> {
    return this.http.put<Rack>(`${this.baseEndpoint}/${rack.idRack}/eliminar-producto`,
      producto,
      { headers: this.cabeceras });
  }
}
