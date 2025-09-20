import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = environment.API;

  constructor(private http: HttpClient) { }

  // Método para obtener los headers con la API key
  private getHeaders(): HttpHeaders {
    return new HttpHeaders({
      'x-api-key': 'reqres-free-v1',
      'Content-Type': 'application/json'
    });
  }

  login(email: string, password: string): Promise<any> {
    return this.http.post(
      `${this.apiUrl}/login`, 
      { email, password },
      { headers: this.getHeaders() }
    ).toPromise();
  }
}