import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.html',
  styleUrls: ['./patient-registration.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage = '';
  successMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registerForm = this.fb.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
    ngOnInit(): void {

    
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    this.http.post('/api/register', this.registerForm.value).subscribe({
      next: () => {
        this.successMessage = 'Registration successful!';
        this.errorMessage = '';
        this.registerForm.reset();
      },
      error: err => {
        this.errorMessage = err.error?.message || 'Registration failed.';
        this.successMessage = '';
      }
    });
  }
}
