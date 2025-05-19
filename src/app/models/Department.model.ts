import { Employee } from './Employee.model';
import { GlobalStatus } from './global-status.enum';

export interface Department {
  id: number;
  name: string;
  status: GlobalStatus;
  employees?: Employee[];
}
