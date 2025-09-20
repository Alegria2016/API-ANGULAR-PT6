import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.service';
import { NavBarComponent } from '../../../shared/nav-bar/nav-bar.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [ReactiveFormsModule,NavBarComponent,NgIf],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  userForm: FormGroup;
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      job: ['', Validators.required]
    });
  }

  async onSubmit(): Promise<void> {
    if (this.userForm.valid) {
      this.isLoading = true;
      try {
        const response = await this.usersService.createUser(this.userForm.value);
        alert(`User ${this.userForm.value.name} has been created successfully.`);
        this.router.navigate(['/users/list']);
      } catch (error) {
        console.error('Error creating user:', error);
        alert('Failed to create user.');
      } finally {
        this.isLoading = false;
      }
    }
  }
}