import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { NavBarComponent } from '../../../shared/nav-bar/nav-bar.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [CommonModule, FormsModule, NavBarComponent],
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.scss']
})
export class ListUsersComponent implements OnInit {
  users: any[] = [];
  filteredUsers: any[] = [];
  searchText = '';
  isLoading = false;

  constructor(private usersService: UsersService) { }

  async ngOnInit(): Promise<void> {
    await this.loadUsers();
  }

  async loadUsers(): Promise<void> {
    this.isLoading = true;
    try {
      const response = await this.usersService.getUsers();
      this.users = response.data;
      this.filteredUsers = this.users;
    } catch (error) {
      console.error('Error loading users:', error);
      alert('Failed to load users.');
    } finally {
      this.isLoading = false;
    }
  }

  async deleteUser(user: any): Promise<void> {
    if (confirm(`Are you sure you want to delete ${user.first_name} ${user.last_name}?`)) {
      try {
        await this.usersService.deleteUser(user.id);
        alert(`User ${user.first_name} ${user.last_name} has been deleted successfully.`);
        await this.loadUsers(); // Reload the user list
      } catch (error) {
        console.error('Error deleting user:', error);
        alert('Failed to delete user.');
      }
    }
  }

  onSearchChange(): void {
    if (!this.searchText) {
      this.filteredUsers = this.users;
      return;
    }
    
    this.filteredUsers = this.users.filter(user => 
      user.first_name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      user.last_name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}