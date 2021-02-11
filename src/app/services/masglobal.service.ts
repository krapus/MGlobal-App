import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Employee } from '../models/employee.interface';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MasGlobalService {
  constructor(private httpClient: HttpClient) {}

  getAllEmployees(): Observable<Employee[]> {
    return this.getQuery(environment.endPoints.employees).pipe(
      map((data: any) => data)
    );
  }

  getEmployeeById(id: number): Observable<Employee> {
    return this.getQuery(`${environment.endPoints.employeeById}${id}`).pipe(
      map((data: any) => data)
    );
  }

  getQuery(query: string) {
    const url = `${environment.urlBase}${query}`;
    return this.httpClient.get(url);
  }
}
