import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresa } from '../models/empresa';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {

  private baseEndpoint = '/api/cliente-usuario';
  private cabecera: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }
  
  //obtener un rol
  public selectBusiness(idBusiness: number): Observable<Empresa>{
    return this.http.get<Empresa>(`${this.baseEndpoint}/business/${idBusiness}`);
  }

  public getNextId() : Observable<number> {
    return this.http.get<number>(this.baseEndpoint + '/business/nextId');
  }

  public createBusiness(business: Empresa): Observable<Empresa>{
    return this.http.post<Empresa>(this.baseEndpoint + '/business', business, { headers: this.cabecera});
  }
  
  public editBusiness(business: Empresa): Observable<Empresa>{
    return this.http.put<Empresa>(`${this.baseEndpoint}/${business.id}`, business , {headers: this.cabecera});
  }
}
