import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOptionsComponent } from './employee-options.component';

describe('EmployeeOptionsComponent', () => {
  let component: EmployeeOptionsComponent;
  let fixture: ComponentFixture<EmployeeOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmployeeOptionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeeOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
