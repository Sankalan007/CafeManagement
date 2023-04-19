import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Orders from 'src/app/model/Orders';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private baseUrl = 'http://localhost:8080/api/v1/bill';
  constructor(private http: HttpClient) {}

  addBill(orders: Orders): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.post(`${this.baseUrl}/generateBill`, orders, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }

  getAllBills(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`${this.baseUrl}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  }
}
