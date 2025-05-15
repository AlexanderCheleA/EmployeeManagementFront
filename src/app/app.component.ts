import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'employeeManagement';

showEmployeeForm = false;
  showEmployeeOptions = false;

  showForm() {
    if (this.showEmployeeForm) {
      this.showEmployeeForm = false;
    } else {
      this.showEmployeeForm = true;
      this.showEmployeeOptions = false;
    }
  }

  showOptions() {
    if (this.showEmployeeOptions) {
      this.showEmployeeOptions = false;
    } else {
      this.showEmployeeOptions = true;
      this.showEmployeeForm = false;
    }
  }
}
