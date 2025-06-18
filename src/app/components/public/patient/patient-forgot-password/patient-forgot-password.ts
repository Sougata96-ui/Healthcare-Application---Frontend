import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient-forgot-password',
  templateUrl: './patient-forgot-password.html',
  styleUrls: ['./patient-forgot-password.css']
})
export class ForgotPasswordComponent {
  forgotForm: FormGroup;
  errorMessage = '';
  successMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.forgotForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
    ngOnInit(): void {

    
  }

  onSubmit() {
    if (this.forgotForm.invalid) {
      return;
    }

    this.http.post('/api/forgot-password', this.forgotForm.value).subscribe({
      next: () => {
        this.successMessage = 'Reset link sent to your email!';
        this.errorMessage = '';
        this.forgotForm.reset();
      },
      error: err => {
        this.errorMessage = err.error?.message || 'Request failed.';
        this.successMessage = '';
      }
    });
  }
}
