import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = environment.API;

  constructor(private http: HttpClient) { }

 
  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    const headers: { [name: string]: string | string[]; } = {
      'x-api-key': 'reqres-free-v1',
      'Content-Type': 'application/json'
    };

    
    if (token) {
      headers['Authorization'] = token;
    }

    return new HttpHeaders(headers);
  }

  getUsers(): Promise<any> {
    return this.http.get(
      `${this.apiUrl}/users`, 
      { headers: this.getHeaders() }
    ).toPromise();
  }

  getUser(id: number): Promise<any> {
    return this.http.get(
      `${this.apiUrl}/users/${id}`, 
      { headers: this.getHeaders() }
    ).toPromise();
  }

  createUser(user: any): Promise<any> {
    return this.http.post(
      `${this.apiUrl}/users`, 
      user, 
      { headers: this.getHeaders() }
    ).toPromise();
  }

  deleteUser(id: number): Promise<any> {
    return this.http.delete(
      `${this.apiUrl}/users/${id}`, 
      { headers: this.getHeaders() }
    ).toPromise();
  }
}