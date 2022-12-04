import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Rol } from '../models/rol';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private baseEndpoint = '/api/cliente-usuario';
  private cabecera: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  //obtener un rol
  public saveRol(rol: Rol): Observable<Rol>{
    return this.http.post<Rol>(`${this.baseEndpoint}/rol`, rol, { headers: this.cabecera });
  }

  //obtener un rol
  public selectRol(idRol: number): Observable<Rol>{
    return this.http.get<Rol>(`${this.baseEndpoint}/rol/${idRol}`);
  }
}
