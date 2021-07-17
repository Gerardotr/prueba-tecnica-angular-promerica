import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Producto } from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getProductos(): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${ this.baseUrl }/product`);
  }

  getProductoPorId( id: string ):Observable<Producto> {
    return this.http.get<Producto>(`${ this.baseUrl }/product/${ id }`);
  }

  getSugerencias( termino: string ): Observable<Producto[]> {
    return this.http.get<Producto[]>(`${ this.baseUrl }/product?q=${ termino }&_limit=6`);
  }

  agregarProducto( producto: Producto ): Observable<Producto> {
    return this.http.post<Producto>(`${ this.baseUrl }/product`, producto );
  }

  actualizarProducto( usuario: Producto ): Observable<Producto> {
    return this.http.put<Producto>(`${ this.baseUrl }/product/${ usuario.id }`, usuario );
  }

  borrarProducto( id: string ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/product/${ id }`);
  }
}
