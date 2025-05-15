import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { EmployeeOptionsComponent } from './employee-options/employee-options.component';

const routes: Routes = [
  { path: 'employee-form', component: EmployeeFormComponent },
  { path: 'employee-options', component: EmployeeOptionsComponent },
  { path: '', redirectTo: '/employee-options', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
