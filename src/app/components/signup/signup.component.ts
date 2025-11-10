import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) { }

  registerUser() {
    this.http.post<any>('http://localhost:8040/auth/register', {   // 👈 FIXED URL
      username: this.username,
      password: this.password
    }).subscribe({
      next: (res) => {
        alert('✅ Registration successful! Please login.');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('❌ Registration failed:', err);
        alert('Registration failed. Please try again.');
      }
    });
  }
}
