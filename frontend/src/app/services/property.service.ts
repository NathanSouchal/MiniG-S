import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Property {
  id?: number;
  name: string;
  address: string;
  year: number;
  numberOfHousingUnits: number;
}

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private apiUrl = 'http://localhost:3000/property';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Property[]> {
    return this.http.get<Property[]>(this.apiUrl);
  }

  create(property: Property): Observable<Property> {
    return this.http.post<Property>(this.apiUrl, property);
  }

  update(id: number, property: Partial<Property>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, property);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
