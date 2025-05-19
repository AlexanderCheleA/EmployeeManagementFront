import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DepartmentService } from '../service/department.service';
import { Department } from '../models/Department.model';
import { ValidationUtils } from '../utils/validation-utils';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent implements OnInit {

  employeeForm!: FormGroup;
  departments: Department[] = [];

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private snackBar: MatSnackBar,
    private departmentService: DepartmentService,
  ) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      name: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      age: ['', [Validators.required, Validators.pattern("^[0-9]*$")]],
      salary: [''],
      initDate: ['', [Validators.required]],
      endDate: [''],
      status: [''],
      departmentId: ['', [Validators.required]],
    });

    this.loadDepartments();
  }

  onSubmit(): void {
    if (this.employeeForm.invalid) {
      return;
    }

    const employeeData = this.employeeForm.value;
    const departmentId = employeeData.departmentId;

    if (!employeeData.salary) {
      employeeData.salary = 0;
    }

    this.employeeService.createEmployee(employeeData, departmentId).subscribe(
      response => {
        console.log('Empleado creado:', response);
        this.snackBar.open('Empleado creado con éxito', 'Cerrar', { duration: 3000 });
        this.employeeForm.reset();
      },
      error => {
        console.error('Error al crear el empleado:', error);

        if (error.status === 400 && error.error) {
          const validationMessages = ValidationUtils.formatValidationErrors(error.error);
          this.snackBar.open(validationMessages, 'Cerrar', { duration: 5000 });
        } else {
          this.snackBar.open('Error inesperado al crear empleado', 'Cerrar', { duration: 5000 });
        }
      }
    );
  }

  loadDepartments(): void {
    this.departmentService.getDepartments().subscribe({
      next: (data) => this.departments = data,
      error: () => this.snackBar.open('Error al cargar departamentos', 'Cerrar', { duration: 3000 })
    });
  }
}
