import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.html',
  styleUrls: ['./patient-login.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  loading = false;
  error: string | null = null;

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    
  }

  goToRegister() {
    this.router.navigate(['/patient/register']);
  }

  goToForgotPassword() {
    this.router.navigate(['/patient/forgot-password']);
  }

  onSubmit(): void {
    if (this.loginForm.invalid) return;
    this.loading = true;

    const { email, password } = this.loginForm.value;

    console.log('Logging in with:', email, password);
    localStorage.setItem('auth_email', email);
    this.loading = false;
  }
}