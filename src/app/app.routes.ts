import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './feature/login/login.component';
import { TokenGuard } from './core/guard/token/token.guard';
import { ListUsersComponent } from './feature/users/list-users/list-users.component';
import { CreateUserComponent } from './feature/users/create-user/create-user.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
   
   { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { 
    path: 'users', 
    canActivate: [TokenGuard],
    children: [
      { path: 'list', component: ListUsersComponent },
      { path: 'create', component: CreateUserComponent },
      { path: '', redirectTo: 'list', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '/login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
