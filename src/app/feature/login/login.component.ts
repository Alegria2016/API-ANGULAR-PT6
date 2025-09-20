import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule
import { Router } from '@angular/router';
import { LoginService } from './shared/services/login/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true, // Mark as a standalone component
  imports: [ReactiveFormsModule, CommonModule], // Import ReactiveFormsModule and CommonModule
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  ngOnInit(): void {
  }

  async onSubmit(): Promise<void> {
    if (this.loginForm.valid) {
      this.isLoading = true;
      try {
        const response = await this.loginService.login(
          this.loginForm.value.email,
          this.loginForm.value.password
        );

        localStorage.setItem('token', response.token);
        this.router.navigate(['/users']);
      } catch (error) {
        console.error('Login error:', error);
        alert('Login failed. Please check your credentials.');
      } finally {
        this.isLoading = false;
      }
    }
  }
}