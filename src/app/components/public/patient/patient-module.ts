import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientRoutingModule } from './patient-routing-module';
import { LoginComponent } from './patient-login/patient-login';
import { RegisterComponent } from './patient-registration/patient-registration';
import { ForgotPasswordComponent } from './patient-forgot-password/patient-forgot-password';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PatientRoutingModule,
  ]
})
export class PatientModule {}
