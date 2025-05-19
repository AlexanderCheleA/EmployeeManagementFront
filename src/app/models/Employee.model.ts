import { GlobalStatus } from './global-status.enum';

export interface Employee {
  id: number;
  name: string;
  lastName: string;
  age: number;
  salary?: number;
  initDate?: string;
  endDate?: string;
  status?: GlobalStatus;
  departmentId: number;
}
