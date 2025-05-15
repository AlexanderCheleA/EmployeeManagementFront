import { Employee } from './Employee.model';

export interface Department {
  id: number;
  name: string;
  status: string;
  employees?: Employee[];
}
