import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario } from '../interfaces/interfaces';
import {tap} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${ this.baseUrl }/users`);
  }

  getUsuarioPorId( id: string ):Observable<Usuario> {
    return this.http.get<Usuario>(`${ this.baseUrl }/users/${ id }`);
  }

  getSugerencias( termino: string ): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${ this.baseUrl }/users?q=${ termino }&_limit=6`);
  }

  agregarUsuario( usuario: Usuario ): Observable<Usuario> {
    return this.http.post<Usuario>(`${ this.baseUrl }/users`, usuario );
  }

  actualizarUsuario( usuario: Usuario ): Observable<Usuario> {
    return this.http.put<Usuario>(`${ this.baseUrl }/users/${ usuario.id }`, usuario );
  }

  borrarUsuario( id: string ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/users/${ id }`);
  }
}
