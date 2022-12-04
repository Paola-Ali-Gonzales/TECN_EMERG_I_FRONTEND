import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangePasswordDTO } from '../models/change-password-dto';
import { EmailValuesDTO } from '../models/email-values-dto';
import { environment } from './../../environments/environment';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class RecuperarContraseniaService {

  user:Usuario;

  private baseEndpoint = 'api/cliente-usuario';
  private cabecera: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http: HttpClient) { }

  public sendEmail(dto: EmailValuesDTO): Observable<any> {
    return this.http.post<any>(this.baseEndpoint + '/email-password/send-email', dto);
  }

  public changePassword(user: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(this.baseEndpoint + '/recoverPassword/' + user.email, user, { headers: this.cabecera});
  }
}