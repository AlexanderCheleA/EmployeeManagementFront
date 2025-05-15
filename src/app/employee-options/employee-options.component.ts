import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Employee } from '../models/Employee.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ValidationUtils } from '../utils/validation-utils';

@Component({
  selector: 'app-employee-options',
  templateUrl: './employee-options.component.html',
  styleUrl: './employee-options.component.css'
})
export class EmployeeOptionsComponent {

  highestSalaryEmployee?: Employee;
  youngestEmployee: any;
  employeeCountLastMonth: number = -1;

  constructor(
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar
  ) { }

  getHighestSalary() {
    this.employeeService.getHighestSalary().subscribe(
      (employee: Employee) => {
        this.highestSalaryEmployee = employee;
        console.log('Empleado con salario más alto:', this.highestSalaryEmployee);
      },
      error => {
        console.error('Error HighestSalary:', error);

        if (error.status === 500 && error.error) {
          const validationMessages = ValidationUtils.formatValidationErrors(error.error);
          this.snackBar.open(validationMessages, 'Cerrar', { duration: 5000 });
        } else {
          this.snackBar.open('Error al obtener el salario más alto', 'Cerrar', { duration: 5000 });
        }
      }
    );
  }

  getYoungestEmployee() {
    this.employeeService.getYoungestEmployee().subscribe(
      response => {
        this.youngestEmployee = response;
        console.log('Empleado más joven:', this.youngestEmployee);
      },
      error => {
        console.error('Error Youngest Employee:', error);

        if (error.status === 500 && error.error) {
          const validationMessages = ValidationUtils.formatValidationErrors(error.error);
          this.snackBar.open(validationMessages, 'Cerrar', { duration: 5000 });
        } else {
          this.snackBar.open('Error al obtener la edad más baja', 'Cerrar', { duration: 5000 });
        }
      }
    );
  }

  countEmployeesLastMonth() {
    this.employeeService.countEmployeesJoinedLastMonth().subscribe(
      response => {
        this.employeeCountLastMonth = response;
        console.log('Número de empleados que se unieron en el último mes:', this.employeeCountLastMonth);
      },
      error => {
        console.error('Error al contar los empleados del último mes:', error);
      }
    );
  }
}
