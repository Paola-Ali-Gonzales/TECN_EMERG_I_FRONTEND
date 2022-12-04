import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from '../models/categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private baseEndpoint = '/api/cliente-usuario';
  private cabecera: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  public selectCategory(): Observable<Categoria[]>{
    return this.http.get<Categoria[]>(this.baseEndpoint + '/category');
  }
  
}
