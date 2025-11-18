import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080/api/auth';


  constructor(private http: HttpClient) { }

  // Register user
  register(data: any) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  // Login user
  login(data: any) {
    return this.http.post(`${this.apiUrl}/login`, data);
  }

  // Save token
  saveToken(token: string) {
    localStorage.setItem('token', token);
  }

  // Get token
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  // Check if logged in
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Logout
  logout() {
    localStorage.removeItem('token');
  }
}
