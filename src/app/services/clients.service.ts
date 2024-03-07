import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ClientDTO } from '../dto/client-dto';

const httpHeaders = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Access-Control-Allow-Methods':'POST, GET, PUT',
    'Access-Control-Allow-Origin':'*'
  })
};

/**
 * Class Service que permite controlar la informacion del cliente.
 */
@Injectable({
  providedIn: 'root'
})

export class ClientsService {

  private apiUrl = 'http://localhost:8080/api/client';
  

  constructor(private http: HttpClient, private router: Router) { }

   /**
   * Obtiene el listado de clientes
   * @return {Observable} Observable<ClientDTO[]>
   * @public
   */
  getAllClients(): Observable<ClientDTO[]>{
    return this.http.get<ClientDTO[]>(this.apiUrl+'s/');
  }

   /**
   * Obtiene el cliente segun el shared key
   * @param {string} sharedKey : sharedKey string
   * @return {Observable} Observable<ClientDTO[]>
   * @public
   */
  getClientBySharedKey(sharedKey: string): Observable<ClientDTO> {
    return this.http.get<ClientDTO>(`${this.apiUrl}s/${sharedKey}`);
  }

   /**
   * Registra un cliente
   * @return {Observable} Observable<ClientDTO>
   * @public
   */
  createClient2(client : ClientDTO) : Observable<ClientDTO>{
    return this.http.post<ClientDTO>(this.apiUrl, client);
  }

  createClient(client : ClientDTO) : Observable<void>{
    return this.http.post<ClientDTO>(this.apiUrl, client, httpHeaders).pipe(
      map(response => {
        if(response===null){
          throw new Error("Error Update Client");
        }
        this.router.navigate(['/clients']);
        return;
      })
    )
  }

   /**
   * Actualiza el cliente
   * @return {Observable} Observable>
   * @public
   */
  updateClient(client : ClientDTO) : Observable<void>{
    return this.http.put<ClientDTO>(this.apiUrl, client, httpHeaders).pipe(
      map(response => {
        if(response===null){
          throw new Error("Error Update Client");
        }
        this.router.navigate(['/clients']);
        return;
      })
    )
  }

}
