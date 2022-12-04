import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';

export abstract class CommonService<E> {

  protected baseEndpoint: string;

  protected cabeceras: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(protected http: HttpClient) { }

  public list(): Observable<E[]>{
    return this.http.get<E[]>(this.baseEndpoint);
  }

  public ver(id: number): Observable<E> {
    return this.http.get<E>(`${this.baseEndpoint}/${id}`);
  }

  public create(e: E): Observable<E> {
    return this.http.post<E>(this.baseEndpoint, e,
      { headers: this.cabeceras });
  }

  public delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseEndpoint}/${id}`);
  }

}
