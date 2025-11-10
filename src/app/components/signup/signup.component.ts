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
    const payload = { username: this.username, password: this.password };

    this.http.post<any>('http://localhost:8040/register', payload).subscribe({
      next: (res) => {
        console.log('✅ Registration successful:', res);
        alert('User registered successfully!');
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error('❌ Registration failed:', err);
        alert('Registration failed! Please check backend or try again.');
      }
    });
  }
}
