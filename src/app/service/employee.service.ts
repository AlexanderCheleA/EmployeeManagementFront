import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Employee } from '../models/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8080/employee';

  constructor(private http: HttpClient) { }

  createEmployee(employee: Employee, departmentId: number): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}/create/${departmentId}`, employee);
  }

  getHighestSalary(): Observable<Employee> {
    return this.http.get<Employee>(`${this.baseUrl}/highestSalary`);
  }

  getYoungestEmployee(): Observable<any> {
    return this.http.get(`${this.baseUrl}/lowerAge`);
  }

  countEmployeesJoinedLastMonth(): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/countLastMonth`);
  }
  
}
