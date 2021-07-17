import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrdenService {

  private baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient) { }

  getOrdens(): Observable<Order[]> {
    return this.http.get<Order[]>(`${ this.baseUrl }/orders`);
  }

  getOrderPorId( id: string ):Observable<Order> {
    return this.http.get<Order>(`${ this.baseUrl }/orders/${ id }`);
  }

  getSugerencias( termino: string ): Observable<Order[]> {
    return this.http.get<Order[]>(`${ this.baseUrl }/orders?q=${ termino }&_limit=6`);
  }

  agregarOrder( order: Order ): Observable<Order> {
    console.log(order);
    return this.http.post<Order>(`${ this.baseUrl }/orders`, order );
  }

  actualizarOrden( order: Order ): Observable<Order> {
    return this.http.put<Order>(`${ this.baseUrl }/orders/${ order.id }`, order );
  }

  borrarOrder( id: string ): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/orders/${ id }`);
  }
}
