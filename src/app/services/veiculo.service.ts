import { Veiculo } from './../models/veiculo.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const API_URL = 'http://localhost:8000/api';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(private http: HttpClient) { }

  getVeiculos(): Observable<any> {
    return this.http.get(`${API_URL}/veiculos`, { responseType: 'json' });
  }

  get(id: any): Observable<any> {
    return this.http.get(`${API_URL}/veiculos/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(`${API_URL}/veiculos`, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${API_URL}/veiculos/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${API_URL}/veiculos/${id}`);
  }

}
