export interface Employee {
  id: number;
  name: string;
  lastName: string;
  age: number;
  salary?: number;
  initDate?: string;
  endDate?: string;
  employeeStatus?: string;
  departmentId: number;
}
