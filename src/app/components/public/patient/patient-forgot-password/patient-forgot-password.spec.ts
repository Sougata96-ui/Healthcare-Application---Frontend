import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientForgotPassword } from './patient-forgot-password';

describe('PatientForgotPassword', () => {
  let component: PatientForgotPassword;
  let fixture: ComponentFixture<PatientForgotPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientForgotPassword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientForgotPassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
