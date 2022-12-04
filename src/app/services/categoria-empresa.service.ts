import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaEmpresa } from '../models/categoria-empresa';

@Injectable({
  providedIn: 'root'
})
export class CategoriaEmpresaService {

  private baseEndpoint = '/api/cliente-usuario';
  private cabecera: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  public createCategoryBusiness(categoryBusiness: CategoriaEmpresa[]): Observable<CategoriaEmpresa[]>{
    return this.http.post<CategoriaEmpresa[]>(this.baseEndpoint + "/categoryBusiness", categoryBusiness, { headers: this.cabecera});
  }
}
