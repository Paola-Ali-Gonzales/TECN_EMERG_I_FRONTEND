import { Injectable } from '@angular/core';
import { Warehouse } from '../models/warehouse';
import { CommonService } from './common.service';
import { HttpClient } from '@angular/common/http';
import { BASE_ENDPOINT } from '../config/app';
import { Section } from '../models/section';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WarehouseService extends CommonService<Warehouse> {

  protected override baseEndpoint = BASE_ENDPOINT + '/warehouse';

  constructor(http: HttpClient) { 
    super(http);
  }

  public modify(warehouse:Warehouse): Observable<Warehouse> {
    return this.http.put<Warehouse>(`${this.baseEndpoint}/${warehouse.idWarehouse}`, warehouse,
      { headers: this.cabeceras });
  }

  /*ASIGNA LAS SECCIONES A ALMACEN */
  addSection(warehouse: Warehouse, sections: Section[]): Observable<Warehouse>{
    return this.http.put<Warehouse>(`${this.baseEndpoint}/${warehouse.idWarehouse}/asignar-section`,
     sections,
     {headers: this.cabeceras});
  }

  /*BORRA SECCIONES DEL ALMACEN */
  deleteSection(warehouse: Warehouse, section: Section): Observable<Warehouse> {
    return this.http.put<Warehouse>(`${this.baseEndpoint}/${warehouse.idWarehouse}/eliminar-section`,
    section,
    {headers: this.cabeceras});
  }

}
