import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BMW_Sale {
  id?: number;
  model_name: string;
  year: number;
  units_sold: number;
  revenue: number;
}

@Injectable({
  providedIn: 'root'
})
export class BmwSalesService {
  private apiUrl = 'http://localhost:8040/bmw-sales';

  constructor(private http: HttpClient) { }

  getSales(): Observable<BMW_Sale[]> {
    return this.http.get<BMW_Sale[]>(this.apiUrl);
  }

  addSale(data: BMW_Sale): Observable<BMW_Sale> {
    return this.http.post<BMW_Sale>(this.apiUrl, data);
  }

  updateSale(id: number, data: BMW_Sale): Observable<BMW_Sale> {
    return this.http.put<BMW_Sale>(`${this.apiUrl}/${id}`, data);
  }

  deleteSale(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
