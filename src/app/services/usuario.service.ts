import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {


  private baseEndpoint = '/api/cliente-usuario';
  private cabecera: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  //obtener observable de usuarios (select)
  public selectUser(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.baseEndpoint);
  }
  //obtener un usuario 
  public selectUserID(idUsuario: number): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.baseEndpoint}/${idUsuario}`);
  }
  //crear un usuario
  public createUser(user: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(this.baseEndpoint + "/person", user, { headers: this.cabecera});
  }
  //editar un usuario
  /*public editUser(user: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.baseEndpoint}/${user.idUsuario}`, user , {headers: this.cabecera});
  }*/
  //eliminar un usuario
  public deleteUser(idUsuario: number): Observable<void>{
    return this.http.delete<void>(`${this.baseEndpoint}/${idUsuario}`);
  }
  //Autenticar usuario
  public loginUser(email:string, pass:string ): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.baseEndpoint}/login?email=${email}&pass=${pass}`, {headers: this.cabecera});
  }
}
